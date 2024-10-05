"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupType } from "@/lib/validators/auth.validator";
import { LabelledInput } from "./LabelledInput";
import { Button } from "./ui/button";
import { signup } from "@/app/actions/auth.action";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignupForm() {
     const router = useRouter();
     const { register, handleSubmit } = useForm<SignupType>({
          resolver: zodResolver(signupSchema),
          defaultValues: {
               name: "",
               email: "",
               password: "",
          }
     });

     const onSubmit = async (data: SignupType) => {
          try {
               const res = await signup(data);
               if (res?.success) {
                    const response = await signIn("credentials", { email: data.email, password: data.password, redirect: false });
                    if (!response?.ok) {
                         return toast.error(response?.error || "Internal server error");
                    } else {
                         toast.success(res.message);
                         router.push("/");
                    }
               }else {
                    toast.error(res?.message);
               }
          } catch (e: any) {
               console.error(e);
               toast.error(e.message || "Internal server error");
          }
     }

     return (
          <div>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-4">
                    <div className="text-3xl font-bold text-center pb-6">Signin</div>
                    <LabelledInput<SignupType> register={register} label="name" />
                    <LabelledInput<SignupType> register={register} label="email" />
                    <LabelledInput<SignupType> register={register} label="password" type="password" />
                    <Button type="submit" className="mt-4">Signup</Button>
                    <div className="text-center text-sm pt-2">Already have an account? <Link href="/signin" className="text-blue-500 hover:underline">Signin</Link></div>
               </form>
          </div>
     )
}
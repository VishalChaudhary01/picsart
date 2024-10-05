"use client";
import { Button } from "@/components/ui/button";
import { signinSchema, SigninType } from "@/lib/validators/auth.validator";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { toast } from "sonner";
import { LabelledInput } from "./LabelledInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function SigninForm() {
     const router = useRouter();
     const { register, handleSubmit } = useForm<SigninType>({
          resolver: zodResolver(signinSchema),
          defaultValues: {
               email: '',
               password: '',
          }
     });
     
     async function handleSignin(data: SigninType) {
          console.log(data)
          try {
               const response = await signIn("credentials", { ...data, redirect: false });
               if (!response?.ok) {
                    return toast.error(response?.error || "Internal server error");
               } else {
                    toast.success("Signin successful!");
                    router.push("/");
               }
          } catch (e: any) {
               console.error(e);
               toast.error("Internal server error");
          }
     }

     return (
          <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col gap-2 p-4">
               <div className="text-3xl font-bold text-center pb-6">Signin</div>
               <LabelledInput<SigninType> register={register} label="email" />
               <LabelledInput<SigninType> register={register} label="password" type="password" />
               <Button type="submit" className="mt-4">Signin</Button>
               <div className="text-center text-sm pt-2">Don`t have an account? <Link href="/signup" className="text-blue-500 hover:underline">Signup</Link></div>
          </form>
     )
}
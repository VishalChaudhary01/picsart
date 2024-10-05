import { SignupForm } from "@/components/SignupForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignupPage() {
     const session = await getServerSession(authOptions);
     if (session?.user) redirect("/");

     return <SignupForm />
}
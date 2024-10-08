import SigninForm from "@/components/SigninForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function SigninPage() {
     const session = await getServerSession(authOptions);
     if (session?.user) redirect("/");

     return <SigninForm />
}
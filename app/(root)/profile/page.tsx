"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

export default function ProfilePage() {
     const session = useSession();
     if (!session.data?.user) redirect("/signin");
     return (
          <div>
               Profile
          </div>
     )
}
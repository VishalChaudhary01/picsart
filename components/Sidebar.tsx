"use client"
import { sidebarLinks } from "@/constants"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
     const session = useSession();
     const pathname = usePathname();
     return (
          <div className="sticky top-0 left-0 hidden lg:flex flex-col justify-between items-center py-8 min-h-screen w-72 bg-dark-2 text-white">
               <div className="flex flex-col gap-2 w-full px-8">
                    <div className="text-2xl font-bold pl-4 pb-4">
                         Picsart
                    </div>
                    {sidebarLinks.slice(0, 6).map((link) => {
                         const isActive = link.href === pathname;
                         return (
                              <Link href={link.href} key={link.name} className={`flex gap-2 py-2 px-4 rounded-md ${isActive && "bg-blue-500"}`}>
                                   <img src={link.icon} alt="logo"/>
                                   <span className="text-base font-medium">{link.name}</span>
                              </Link>
                         )
                    })}
               </div>
               <div className="flex flex-col gap-2 w-full px-8">
                    {session.data?.user ? (sidebarLinks.slice(6, 8).map((link) => {
                         const isActive = link.href === pathname;
                         return (
                              <Link href={link.href} key={link.name} className={`flex gap-2 py-2 px-4 rounded-md ${isActive && "bg-blue-500"}`}>
                                   <img src={link.icon} alt="logo"/>
                                   <span className="text-base font-medium">{link.name}</span>
                              </Link>
                         )})) : (
                         <div className="flex flex-col gap-4">
                              <Link href="/signin" className={`flex justify-center text-base font-medium rounded-full py-1.5 px-4 bg-blue-500 hover:bg-blue-600`}>Sign In</Link>
                              <Link href="/signup" className={`flex justify-center text-base font-medium rounded-full py-1.5 px-4 bg-blue-500 hover:bg-blue-600`}>Sign Up</Link>
                         </div>
                         )
                    }
               </div>
          </div>
     )
}
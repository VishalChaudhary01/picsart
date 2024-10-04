"use client"
import { sidebarLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
     const pathname = usePathname();
     return (
          <div className="sticky top-0 left-0 hidden lg:flex flex-col justify-between items-center py-8 min-h-screen w-72 bg-dark-2 text-white">
               <div className="flex flex-col gap-2">
                    {sidebarLinks.slice(0, 6).map((link) => {
                         const isActive = link.href === pathname;
                         return (
                              <Link href={link.href} key={link.name} className={`flex gap-2 p-2 rounded-md ${isActive && "bg-blue-500"}`}>
                                   <img src={link.icon} alt="logo"/>
                                   <span className="text-base font-medium">{link.name}</span>
                              </Link>
                         )
                    })}
               </div>
               <div className="flex flex-col gap-2 pb-6">
                    {sidebarLinks.slice(6, 8).map((link) => {
                         const isActive = link.href === pathname;
                         return (
                              <Link href={link.href} key={link.name} className={`flex gap-2 py-2 px-8 rounded-md ${isActive && "bg-blue-500"}`}>
                                   <img src={link.icon} alt="logo"/>
                                   <span className="text-base font-medium">{link.name}</span>
                              </Link>
                         )
                    })}
               </div>
          </div>
     )
}
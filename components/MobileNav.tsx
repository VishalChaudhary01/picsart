"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function MobileNav() {
     const session = useSession();
     const pathname = usePathname();

     return (
          <div className="lg:hidden sticky top-0 flex justify-between items-center px-8 py-2 backdrop-blur-sm">
               <div className="text-2xl font-bold">
                    Picsart
               </div>
               <Sheet>
                    <SheetTrigger>
                         <img src="/icons/align.svg" alt="logo" className="text-2xl font-bold"/>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-dark-2 text-white w-72">
                         <SheetHeader>
                              <SheetTitle className="text-2xl font-bold text-white pl-4 pb-4">Picsart</SheetTitle>
                         </SheetHeader>
                         <div className="flex flex-col gap-2">
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
                         <div className="flex flex-col gap-2">
                              {session.data?.user ? (sidebarLinks.slice(6, 8).map((link) => {
                                   const isActive = link.href === pathname;
                                   return (
                                        <Link href={link.href} key={link.name} className={`flex gap-2 py-2 px-4 rounded-md ${isActive && "bg-blue-500"}`}>
                                             <img src={link.icon} alt="logo"/>
                                             <span className="text-base font-medium">{link.name}</span>
                                        </Link>
                                   )})) : (
                                   <div className="flex flex-col pt-4 gap-4">
                                        <Link href="/signin" className={`flex justify-center text-base font-medium rounded-full py-1.5 px-4 bg-blue-500 hover:bg-blue-600`}>Sign In</Link>
                                        <Link href="/signup" className={`flex justify-center text-base font-medium rounded-full py-1.5 px-4 bg-blue-500 hover:bg-blue-600`}>Sign Up</Link>
                                   </div>
                                   )
                              }
                         </div>
                    </SheetContent>
               </Sheet>
          </div>
     )
}
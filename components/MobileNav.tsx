"use client"
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function MobileNav() {
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
                         <div className="flex flex-col gap-2 p-">
                              {sidebarLinks.map((link) => {
                                   const isActive = link.href === pathname;
                                   return (
                                        <Link href={link.href} key={link.name} className={`flex gap-2 p-2 rounded-md ${isActive && "bg-blue-500"}`}>
                                             <img src={link.icon} alt="logo"/>
                                             <span className="text-base font-medium">{link.name}</span>
                                        </Link>
                                   )
                              })}
                         </div>
                    </SheetContent>
               </Sheet>
          </div>
     )
}
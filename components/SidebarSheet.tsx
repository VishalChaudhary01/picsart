import {
     Sheet,
     SheetContent,
     SheetHeader,
     SheetTitle,
   } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import Link from "next/link"
import { usePathname } from "next/navigation";

interface SidebarProps {
     open: boolean;
     setOpen: (e: boolean) => void;
}
export function SidebarSheet({ open, setOpen }: SidebarProps) {
     const pathname = usePathname();
     return (
          <Sheet open={open} onOpenChange={() => setOpen(false)}>
               <SheetContent side="left" className="bg-dark-2 text-white w-72">
                    <SheetHeader>
                         <SheetTitle className="text-2xl font-bold text-white">Picsart</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-2">
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
     )
}
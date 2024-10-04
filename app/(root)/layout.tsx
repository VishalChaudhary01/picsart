import MobileNav from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-dark-2 text-white">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 overflow-auto py-8 px-8 lg:px-4 bg-dark-1 text-white">
        {children}
      </main>
    </div>
  );
}

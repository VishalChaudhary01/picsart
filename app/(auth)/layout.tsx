
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-dark-1">
      <main className="flex justify-center items-center border border-gray-500 min-w-96 h-auto p-4 rounded-md shadow-md bg-dark-2 text-white">
        {children}
      </main>
    </div>
  );
}



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "text-tremor-content dark:text-dark-tremor-content-emphasis dark:bg-[#1E1E1E] _bg-tremor-background _dark:bg-dark-tremor-background"
      }
    >
      {children}
    </div>
  );
}

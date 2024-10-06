// import { ThemeProvider } from "next-themes";
// import Navbar from "./(layout-components)/Navbar/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "text-tremor-content dark:text-dark-tremor-content-emphasis bg-tremor-background dark:bg-dark-tremor-background"
      }
    >
        <>
          {/* <Navbar /> */}
          {children}
        </>
    </div>
  );
}

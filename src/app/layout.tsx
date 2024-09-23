import { ThemeProvider } from "@/components/theme-provider";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const APP_NAME = "FunFun.tools";
const APP_DEFAULT_TITLE = "FunFun.tools";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "Discover the best AI tools and products in 2024. Find the top AI websites and tools to help you grow your business, improve productivity, and drive innovation.",
  applicationName: APP_NAME,
  metadataBase: new URL("https://new-vercel-project-vert.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative z-[999999999999999999999999999999999]"><ToastContainer /></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

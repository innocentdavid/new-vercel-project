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

const APP_NAME = "FollowersTool";
// const APP_DEFAULT_TITLE = "FollowersTool";

export const metadata: Metadata = {
  title: `FollowersTool: Directory of Best Instagram Followers Growth Tools`,
  description: "Explore over 60 Instagram followers growth services with genuine, unfiltered reviews. See what others say and save on subscriptions with exclusive coupon codes.",
  applicationName: APP_NAME,
  metadataBase: new URL("https://followerstool.vercel.app"),
  manifest: "/manifest.json",
  alternates: {
    canonical: `https://followerstool.vercel.app`,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    images: "https://followerstool.vercel.app/og_image.png",
  },
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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

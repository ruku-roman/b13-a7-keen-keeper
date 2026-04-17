import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import { TimelineProvider } from "@/Lib/TimelineProvider.mjs"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "High-performance relationship management",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body 
        className="min-h-full flex flex-col" 
        suppressHydrationWarning={true}
      >
        <TimelineProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
          <ToastContainer position="top-right" autoClose={2000} theme="colored" />
        </TimelineProvider>
      </body>
    </html>
  );
}
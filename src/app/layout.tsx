import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import AuthStatus from "@/components/auth/authStatus";
import SessionProviderWrapper from "@/components/auth/sessionProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProviderWrapper>
      <html lang='ja'>
        <body className={`${inter.className} relative`}>
          <Sidebar />
          <main className='absolute translate-x-[160px]'>
            <AuthStatus />
            {children}
          </main>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}

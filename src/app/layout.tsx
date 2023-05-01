import Chat from "@/components/Chat";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookBuddy",
  description: "Your bookstore for fantasy & mestery novels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat />
        {children}
      </body>
    </html>
  );
}

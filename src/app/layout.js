import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PicKar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
          src="/images/back2.png"
          alt="background"
          fill
          style={{ zIndex: "-1" }}
        />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

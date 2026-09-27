import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/nav/Navbar";

const myFont = localFont({
  name: "MyFont",
  src: "../fonts/TG Frekuent Mono-Variable.ttf",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naman Rai",
  description:
    "Founding Engineer at Roger (YC S24). I build AI agents, browser tools, and products from a blank page to production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${myFont.className} custom-cursor `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

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
  description: "Full Stack Developer",
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

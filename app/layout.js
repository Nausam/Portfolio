import "./globals.css";
import { Signika } from "next/font/google";
import Providers from "./providers";

const inter = Signika({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Nausam",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014]`}>{children}</body>
    </html>
  );
}

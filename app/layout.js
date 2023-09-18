import "./globals.css";
import { Signika } from "next/font/google";
import Providers from "./providers";

const inter = Signika({ subsets: ["latin"] });

export const metadata = {
  title: "Nausam | Portfolio",
  description: "My Full-Stack Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
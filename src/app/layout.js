import { Inter } from "next/font/google";
import Menu from "../components/Menu/Menu";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: " next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Menu />
        {children}
      </body>
    </html>
  );
}

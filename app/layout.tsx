import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";

export const metadata: Metadata = {
  title: "murilo",
  description: "Compra e venda de veiculos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

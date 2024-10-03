import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental Management Property Planner",
  description: "Efficiently manage your rental properties and bookings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
              <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">
                Rental Planner
              </Link>
              <Navigation />
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 Rental Management Property Planner</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
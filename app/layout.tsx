import { Navbar, Footer } from "@/components";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FamSec- Family insurance website",
  description:
    "We understand that protecting your loved ones is of utmost importance. That&apos;s why we are dedicated to providing comprehensive solutions tailored to your family&apos;s unique needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <div className="body__wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

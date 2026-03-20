import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VGSBVM | Vansh Gopal Singh Baghel Vidhi Mahavidyalaya",
  description: "Vansh Gopal Singh Baghel Vidhi Mahavidyalaya (VGSBVM) is a dedicated law college in Sakrauli, Uttar Pradesh, affiliated with Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans text-brand-dark overflow-x-hidden bg-white">
        {children}
      </body>
    </html>
  );
}

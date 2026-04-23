import type { Metadata } from "next";
import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jadoo – Travel, Enjoy and Live a New and Full Life",
  description:
    "Discover the world's best destinations with Jadoo. Book flights, hotels, and tours with ease. Travel smarter, live fuller.",
  keywords: "travel, flights, hotels, destinations, tours, jadoo",
  openGraph: {
    title: "Jadoo – Travel & Tourism",
    description: "Your gateway to the world's best destinations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${volkhov.variable}`}>
      <body className="font-poppins bg-white text-brand-body antialiased">
        {children}
      </body>
    </html>
  );
}

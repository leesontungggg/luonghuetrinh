import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Luong Hue Trinh",
  description: "Luong Hue Trinh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://luonghuetrinh.org/images/1a.jpg"
        />
        <meta property="og:title" content="Luong Hue Trinh" />
        <meta
          property="og:description"
          content="ietnamese multimedia composer. Electroacoustic music improviser."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body style={{ backgroundColor: "#ffffff" }} className={lato.className}>
        {children}
      </body>
    </html>
  );
}

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
  description:
    "Vietnamese electroacoustic/multimedia composer & improviser",
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
          content="https://www.luonghuetrinh.org/thumbnail_og.jpg"
        />
        <meta property="og:title" content="Luong Hue Trinh" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.luonghuetrinh.org/" />
        <meta
          property="og:description"
          content="Vietnamese electroacoustic/multimedia composer & improviser"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://www.luonghuetrinh.org/" />
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=UA-69714233-2`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function() {dataLayer.push(arguments)}
                  
                  window.gtag('js', new Date());

                  window.gtag('config', 'UA-69714233-2');
                  window.gtag('set', {
                    'cookie_flags': 'SameSite=None;Secure'
                  });
                `,
          }}
        />
      </head>
      <body style={{ backgroundColor: "#ffffff" }} className={lato.className}>
        {children}
      </body>
    </html>
  );
}

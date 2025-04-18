import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "James Sullivan",
  description: "A portfolio website",
  metadataBase: new URL("https://jamessullivan.dev/"),
  openGraph: {
    images: "/opg-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${inter.className} bg-slate-800 text-[#87AED4]`}>
        {children}
      </body>
    </html>
  );
}

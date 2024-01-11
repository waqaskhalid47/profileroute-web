import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header/header";

import { DM_Sans } from "next/font/google";

const dM_Sans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profile Route",
  description: "Get Your Own portfolio Page Within One Minute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dM_Sans.className} p-0`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

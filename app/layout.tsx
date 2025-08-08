import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Wealth View Dashboard",
    default: "Wealth View Dashboard",
  },
  description: "The official Wealth View Dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

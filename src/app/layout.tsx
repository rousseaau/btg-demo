import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridge The Gap San Diego",
  description: "Uniting past, present, and future generations with their Filipino roots.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

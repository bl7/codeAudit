import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "CodeAudit - Source Code Audit Services in Nepal",
  description: "Our specialists find the weakest points in your company's source code and will show you how to fix them step-by-step, as well as how to improve your security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

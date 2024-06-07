import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/app/preline/components/PrelineScript";
import { ReactQueryProvider } from "@/app/common/providers/ReactQueryProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pilosa - quick scan",
  description: "Run a quick carbon footprint scan for your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 dark:bg-neutral-900`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>

        <link rel="icon" href="/scanner.svg" type="image/svg+xml" />
        <script
          defer
          data-client-id="02428650-b31d-4d3c-9efc-de90f8f37f64"
          src="https://app.pilosa.io/v1/sloth.js"
        ></script>
        <script
          defer
          data-domain="pilosa.io"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>

      <PrelineScript />
    </html>
  );
}

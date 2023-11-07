import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";

import Nav from "~/app/_components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Cheep",
  description: "Twitter clone by Kyle Gilbert",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider headers={headers()}>
            <main className="mx-auto w-full md:w-[35%]">{children}</main>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

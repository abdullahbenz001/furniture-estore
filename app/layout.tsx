import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/global/Container";

export const metadata: Metadata = {
  title: "E-Store",
  description: "Build By Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Container className="pt-24">{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}

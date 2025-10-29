import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Clone Linkedin",
  description: "Clone Linkedin - GuilhermeP3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`antialiased bg-zinc-100 dark:bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/providers/theme-providers";
import { ThemeToggle } from "@/components/custom/themeToggle";
import { Toaster } from "@/components/ui/toaster";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem

        >
          <div className="h-16 border-b border-slate-600 flex items-center justify-end  px-3 ">
            <ThemeToggle />
          </div>

          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}



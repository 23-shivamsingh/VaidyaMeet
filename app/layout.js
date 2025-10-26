import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
// This is the root layout for the application
// It sets up the HTML structure and includes global styles and fonts
// The metadata object defines the title and description for the application

export const metadata = {
  title: "VaidyaMeet - Your Health Companion",
  description:
    "onnect with doctors, book appointments, and manage your health onlince",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header*/}
            <Header />

            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* footer*/}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-500">
                <p>
                  made with 💗 by ShivRaj | © 2025 VaidyaMeet. All Rights
                  Reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

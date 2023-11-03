import Footer from "@/components/footer-page";
import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { AppNavigationMenu } from "../../components/navigation-menu";

export const metadata: Metadata = {
  title: {
    default: "Crypto Start",
    template: `%s | Crypto Start`,
  },
  description: "Nơi bắt đầu cho sự nghiệp crypto của bạn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <AppNavigationMenu />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

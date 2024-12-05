import "./globals.css";
import { Footer, Header } from "@/components/index";
import { ThemeProvider } from "@/app/AppContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ch-CN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

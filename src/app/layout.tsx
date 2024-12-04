import "./globals.css";
import { Footer, Header } from "@/components/index";
export default function Layout() {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <h1>Welcome to our website</h1>
        </main>
        <Footer />
      </body>
    </html>
  );
}

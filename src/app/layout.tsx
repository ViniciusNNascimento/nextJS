import "./globals.css";
import { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: 'Aula nextJS',
  description: 'aprimorando nextJS!',
  openGraph: {
    title: 'aprendendo nextJS!',
    description: 'aprendendo nextJS!',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}
          </Provider>
      </body>
    </html>
  );
}

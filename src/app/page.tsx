import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula next Js do zero',
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


export default function Home() {
  return (
    <div>
      <h1>Pagina Home</h1>
    </div>
  )
}
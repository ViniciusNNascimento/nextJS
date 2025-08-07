import { Metadata } from "next"
import { Provider } from "@/components/ui/provider"

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


export default function Home({Component, pageProps}) {
  return (
   <Provider>
    <Component {...pageProps}/>
   </Provider>
  )
}
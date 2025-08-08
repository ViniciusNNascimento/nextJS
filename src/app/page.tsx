

import { Metadata } from "next"
import {
  Button,
  HStack,
  Box,
  Heading,

} from '@chakra-ui/react'

import { AccordionPage } from "../components/accordion"
import { BadgePage } from "@/components/badge"
import { ButtonPage } from "@/components/button"

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
      <ButtonPage>
        
      </ButtonPage>
      <Box alignItems={"center"} justifyItems={"center"}>
        <AccordionPage />
      </Box>
      <Box padding={''} alignItems='center' justifyItems={"center"}>
        <BadgePage />
      </Box>


      




    </div>

  )
}
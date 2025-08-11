

import { Metadata } from "next"
import {
  Box,
  Flex,
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


export const revalidate = 30

export default function Home() {
  const randomNumber = Math.random() * 10
  
  return (



    <Flex gap='4' direction='column' >
      
      <h1>Pagina Home</h1>
      <h2>Numero gerado: {randomNumber}</h2>
      <Box alignItems={"center"} justifyItems={"center"}>
        <ButtonPage />
      </Box>

      <Box alignItems={"center"} justifyItems={"center"}>
        <AccordionPage />
      </Box>

      <Box alignItems='center' justifyItems={"center"}>
        <BadgePage />
      </Box>

    </Flex>

  )
}
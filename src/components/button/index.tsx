'use client'

import { useState } from "react"
import { Button } from "@chakra-ui/react"

export function ButtonPage() {
    const [nome, setNome] = useState("vinicius programador")

    function handleChangeName() {
        if (nome === "vinicius programador") {
            
            setNome('vinicius nicacio')
        } else {
            setNome('vinicius programador')
        }
        

    }

    return (
        <div>
            <Button onClick={handleChangeName}>{nome}</Button>
            <br />
           
        </div>
    )
}
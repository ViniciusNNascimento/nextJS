'use client'

import { Badge, Stack } from "@chakra-ui/react"

export function BadgePage() {
    return (
        <Stack direction='row'>
            <Badge colorPalette='green'>Success</Badge>
            <Badge colorPalette='red'>Removed</Badge>
            <Badge colorPalette='purple'>New</Badge>
        </Stack>
    )
}
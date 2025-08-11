import { ActionBarPage } from "@/components/action-bar"
import { CardPage } from "@/components/card"
import { Box, Flex } from "@chakra-ui/react"

export default function dashboard() {
    return (
        <Box>


            <h1>Pagina Dashboard</h1>
            <Flex direction='column'>
                <Box justifyItems={'center'} gap='4' >
                    <ActionBarPage />
                    <CardPage />
                </Box>
            </Flex>
        </Box>
    )
}
import { ActionBarPage } from "@/components/action-bar"
import { CardPage } from "@/components/card"
import { Box } from "@chakra-ui/react"

export default function dashboard() {
    return (
        <div>
            <h1>Pagina Dashboard</h1>
            <Box justifyItems={'center'} >
                <ActionBarPage />
                <CardPage />
            </Box>
        </div>
    )
}
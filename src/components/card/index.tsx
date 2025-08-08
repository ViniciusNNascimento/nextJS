'use client'

import { Avatar, Button, Card } from "@chakra-ui/react"

export function CardPage() {
    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Avatar.Root size="2xl" shape="rounded">
                    <Avatar.Image src="https://picsum.photos/200/300" />
                    <Avatar.Fallback name="Nue Camp" />
                </Avatar.Root>
                <Card.Title mt="2">Prado Calçados</Card.Title>
                <Card.Description>
                    This is the card body. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                    Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Participar</Button>
            </Card.Footer>
        </Card.Root>

    )
}
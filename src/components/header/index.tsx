"use client";

import NextLink from "next/link";
import {
    Box,
    Container,
    Flex,
    HStack,
    Link as ChakraLink,
    IconButton,
    Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function Header() {


    return (
        <Box as="header" bg="gray.900" color="white" px={2} py={4}>
            <Container maxW="7xl">
                <Flex align="center" justify="space-between">
                    <ChakraLink
                        as={NextLink}
                        href="/"
                        bg="gray.200"
                        color="black"
                        px={4}
                        py={2}
                        rounded="md"
                        _hover={{ color: "blue.500", bg: "gray.900" }}
                        transition="all 200ms"
                    >
                        NextJS
                    </ChakraLink>

                    <HStack
                        as="nav"

                        border="1px"
                        borderColor="gray.300"
                        bg="gray.200"
                        color="black"
                        px={2}
                        py={2}
                        rounded="md"
                    >
                        <ChakraLink
                            as={NextLink}
                            href="/"
                            color={"black"}
                            _hover={{ color: "blue.500", textDecoration: "underline" }}
                        >
                            Home
                        </ChakraLink>
                        <ChakraLink
                            as={NextLink}
                            href="/posts"
                            color={"black"}
                            _hover={{ color: "blue.500", textDecoration: "underline" }}
                        >
                            Post
                        </ChakraLink>
                        <ChakraLink
                            as={NextLink}
                            href="/dashboard"
                            color="black"
                            _hover={{ color: "blue.500", textDecoration: "underline" }}
                        >
                            Dashboard
                        </ChakraLink>




                    </HStack>
                    <ChakraLink
                        as={NextLink}
                        href="/sign-up"
                        bg="gray.200"
                        color="black"
                        px={4}
                        py={2}
                        rounded="md"
                        _hover={{ color: "blue.500", bg: "gray.900" }}
                        transition="all 200ms"
                    >
                        Cadastre-se
                    </ChakraLink>
                </Flex>
            </Container>
        </Box>
    );
}

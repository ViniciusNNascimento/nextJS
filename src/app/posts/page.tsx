import {
    Link,
    Box,
    Button,
    Input,
    Flex,

} from "@chakra-ui/react"



export interface PostProps {
    id: number,
    title: string,
    body: string,
    userId: number,
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function Posts() {
    const response = await fetch('http://dummyjson.com/posts', {
        cache: 'force-cache',
        next: {
            revalidate: 60
        }
    })
    const data: ResponseProps = await response.json()

    async function handleFetchPosts() {
        'use server'
        const response = await fetch('http://dummyjson.com/posts')
        const data: ResponseProps = await response.json()
    }

    async function handleSearchusers(formData: FormData) {
        'use server'
        const userId = formData.get('userId')

        const response = await fetch(`http://dummyjson.com/posts/user/${userId}`)
        const data: ResponseProps = await response.json()

    }

    return (
        <Box
            color='white'
            mx='4'
        >
            <h1 className="">
                Pagina Posts
            </h1>
            <Button mb='2' onClick={handleFetchPosts}>
                
                Buscar posts
            </Button>

            <form
                className="gap-2 flex my-2"
                action={handleSearchusers}


            >
                <Input
                border={'gray.100'}
                    mt=''
                    type="text"
                    placeholder="Id do usuario"
                    className="border border-gray-400 p-"
                    name="userId"
                    w='1/5'

                />
                <Button
                    type="submit"
                >
                    buscar usuario
                </Button>

            </form>

            <Flex  my='4' gap='4' color={'black'} direction='column' >
                {data.posts.map((post) => (
                    <Box padding={'4'} key={post.id} bg='gray.300' rounded='2xl'>
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link
                            color={'blue.500'}
                            _hover={{ color: "blue.400" }}
                            href={`/posts/${post.id}`}>
                            Ver detalhes
                        </Link>
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}
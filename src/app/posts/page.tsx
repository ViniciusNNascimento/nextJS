import {
    Link,
    Box,
    

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
    const response = await fetch('http://dummyjson.com/posts')
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
        bg="tomato"
       
        color='white'
       
    >
            <h1 className="">
                Pagina Posts
            </h1>
            <button onClick={handleFetchPosts}>
                Buscar posts
            </button>

            <form
                className="gap-2 flex my-2"
                action={handleSearchusers}
            >
                <input
                    type="text"
                    placeholder="Id do usuario"
                    className="border border-gray-400 p-2"
                    name="userId"

                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2">
                    buscar usuario
                </button>

            </form>

            <Box mx='4' color={'black'} className="flex flex-col gap-4 ">
                {data.posts.map((post) => (
                    <Box padding={'4'} key={post.id} className="bg-gray-300 rounded-2xl">
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
            </Box>
        </Box>
    )
}
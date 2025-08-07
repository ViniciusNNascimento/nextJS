'use client'

import { useEffect, useState } from "react"

export default function test() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/post')
            .then(res => res.json())
            .then(data => setPost(data.posts))
    }, [])

    return (
        <div className="">
            <h1 className="text-center font-bold my-2 text-2xl">Pagina Client</h1>
            <button onClick={() => alert('teste')}>
                botao
            </button>


            <div className="flex flex-col gap-4 ">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-gray-300 rounded-2xl p-2">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
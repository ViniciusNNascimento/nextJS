import { Suspense } from "react";
import { PostInfo } from "./_components/post";
import { LoadingSkeleton } from "@/components/loadingSkeleton";

export default async function DetailPost({

    params
}: {
    params: Promise<{ id: string }>

}) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 2000)
    })

    const { id } = await params;
    return (
        <div className="mx-2">
            <h1>Detalhes do post: {id}</h1>
            <Suspense fallback={<LoadingSkeleton/>}>
                <PostInfo id={id} />
            </Suspense>
        </div>
    )
} 
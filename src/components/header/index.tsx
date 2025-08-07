import Link from "next/link"

export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <Link href='/'>
                    NextJS
                </Link>
                <nav>
                    <ul className="flex items-center justify-center  gap-2">
                        <Link href='/' >
                            Home
                        </Link>
                        <Link href='/posts'>
                            Post
                        </Link>
                        <Link href='/dashboard'>
                            Dashboard
                        </Link>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
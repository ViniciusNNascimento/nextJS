import Link from "next/link"

export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <Link
                    className="bg-gray-200 p-2 rounded hover:text-blue-500 text-black hover:bg-gray-900 transition duration-200"
                    href='/'>
                    NextJS
                </Link>
                <nav>
                    <ul className="flex gap-4 border border-gray-300 bg-gray-200 p-2 rounded text-black">
                        <Link className="hover:text-blue-500 transform hover:underline underline-offset-1" href='/' >
                            Home
                        </Link>
                        <Link className="hover:text-blue-500 transform hover:underline underline-offset-1" href='/posts'>
                            Post
                        </Link>
                        <Link className="hover:text-blue-500 transform hover:underline underline-offset-1" href='/dashboard'>
                            Dashboard
                        </Link>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
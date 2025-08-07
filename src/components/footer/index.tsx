import Link from "next/link"

export function Footer() {
    return (
        <footer className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify justify-between w-full mx-auto max-w-7xl">
                <Link href='/'>
                    NextJS
                </Link>
                <div>
                    <ul className="flex flex-col items-center justify-center  gap-2">
                        <Link href='/' >
                            Home
                        </Link>
                        <Link href='/posts'>
                            Fale conosco
                        </Link>
                        <Link href='/dashboard'>
                            Trabalhe conosco
                        </Link>

                    </ul>
                </div>
            </div>
        </footer>
    )
}
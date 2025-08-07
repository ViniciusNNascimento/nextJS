import Link from "next/link"

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">Pagina 404 não encontrada</h1>
            <p>Essa pagina que tentaou acessar nao existe</p>
            <Link 
            className="text-cyan-500 cursor-pointer hover:text-cyan-700"
            href='/'>Voltar para home</Link>
        </div>
    )
}
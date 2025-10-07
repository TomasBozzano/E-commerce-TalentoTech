import { LinkButton } from "../../../components/LinkButton"

export const ProductDetail = ({ product, id }) => {
    return (
        <main className="flex flex-col items-center w-full p-4 gap-6">
            <article className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 box-border bg-white shadow-sm border border-slate-200 rounded-lg p-4 w-full">
                <div className="mr-4 flex justify-center items-center border-r border-slate-200 pr-4">
                    <img src={product.avatar} alt={product.nombre} className="w-64 h-64 object-cover rounded-md" />
                </div>
                <div className="flex flex-col justify-center col-span-2 gap-2">
                    <h1 className="text-xl font-bold">{product.nombre}</h1>
                    <p className="">{product.descripcion}</p>
                    <p className="">Precio: ${product.precio}</p>
                    <LinkButton path="/products" nameButton="Volver a Productos" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-fit" />
                </div>
            </article>
        </main>
    )
}

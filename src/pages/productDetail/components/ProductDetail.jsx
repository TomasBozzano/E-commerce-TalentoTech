import { Button } from "../../../components/Button"
import { LinkButton } from "../../../components/LinkButton"
import plus from '../../../assets/plus.svg'
import { useStore } from "../../../store/StoredProduct"
import { toast, ToastContainer } from "react-toastify"
import defaultAvatar from '../../../assets/default-avatar.png'
import { StoredAuth } from "../../../store/StoredAuth"

export const ProductDetail = ({ product, id }) => {

    const isLoggedIn = StoredAuth((state) => state.isAuthenticated);

    const addProduct = useStore((state) => state.addProduct)

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            toast.error("Debes iniciar sesión para agregar productos al carrito");
            return;
        }
        
        if (!product) return;
        toast.success("Producto agregado al carrito");
        addProduct(product)
    }
    return (
        <>
            <header className="flex flex-col items-start w-full p-4 gap-6">
                <LinkButton path="/products" nameButton="Volver a Productos" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-fit justify-content-end" />
            </header>
            <main className="flex flex-col items-center w-full p-4 gap-6">
                <article className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 box-border bg-white shadow-sm border border-slate-200 rounded-lg p-4 w-full">
                    <div className="mr-4 flex justify-center items-center border-r border-slate-200 pr-4">
                        <img src={product.avatar === "" ? defaultAvatar : product.avatar} alt={product.nombre} className="w-64 h-64 object-cover rounded-md" />
                    </div>
                    <div className="flex flex-col justify-center col-span-2 gap-2">
                        <h1 className="text-xl font-bold">{product.nombre}</h1>
                        <p className="">{product.descripcion}</p>
                        <p className="">Precio: ${product.precio}</p>
                        <div className="flex flex-row gap-4 mt-4">
                            <Button nameButton={<img src={plus} alt="Agregar al carrito" className="w-6 h-6" />} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={handleAddToCart} />
                        </div>
                    </div>
                </article>
            </main>
            <ToastContainer />
        </>
    )
}

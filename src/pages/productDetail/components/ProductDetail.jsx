import { Button } from "../../../components/Button"
import { LinkButton } from "../../../components/LinkButton"
import plus from '../../../assets/plus.svg'
import { useStore } from "../../../store/StoredProduct"
import { toast, ToastContainer } from "react-toastify"
import defaultAvatar from '../../../assets/default-avatar.png'
import { StoredAuth } from "../../../store/StoredAuth"
import { ModalUpdateProduct } from "../../products/components/modal/ModalUpdateProduct"
import { ModalDeleteProduct } from "../../products/components/modal/ModalDeleteProduct"
import { useState } from "react"
import { ButtonDefault } from "../../../components/ButtonDefault"
import { MdDeleteForever, MdEdit } from "react-icons/md";

export const ProductDetail = ({ product, onSaved }) => {

    const isLoggedIn = StoredAuth((state) => state.isAuthenticated);
    const role = StoredAuth((state) => state.role);

    const addProduct = useStore((state) => state.addProduct)
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

    const handleModal = (product) => {
        setIsOpenModalUpdate(true);
    }

    const handleModalDelete = (product) => {
        setIsOpenModalDelete(true);
    }

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
                        {role === "admin" ? (
                            <div className="flex flex-row p-4 mt-auto gap-2 justify-center">
                                <ButtonDefault className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600" onClick={() => handleModal(product)} name={<MdEdit className="h-4 w-6" />} />
                                <ButtonDefault className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600" onClick={() => handleModalDelete(product)} name={<MdDeleteForever className="h-4 w-6" />} />
                            </div>

                        ) : null}
                    </div>
                    {isOpenModalUpdate && (
                        <ModalUpdateProduct
                            isClosed={() => setIsOpenModalUpdate(false)}
                            isOpen={isOpenModalUpdate}
                            product={product}
                            onSaved={onSaved}
                        />
                    )}

                    {isOpenModalDelete && (
                        <ModalDeleteProduct
                            isClosed={() => setIsOpenModalDelete(false)}
                            isOpen={isOpenModalDelete}
                            productId={product.id}
                            onSaved={onSaved}
                        />
                    )}
                </article>
            </main>
            <ToastContainer />
        </>
    )
}

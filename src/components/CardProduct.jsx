import { Button } from "./Button"
import { useStore } from "../store/StoredProduct.js"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import defaultAvatar from '../assets/default-avatar.png'
import { StoredAuth } from "../store/StoredAuth.js";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { ButtonDefault } from "./ButtonDefault.jsx";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { ModalUpdateProduct } from "../pages/products/components/modal/ModalUpdateProduct.jsx";
import { ModalDeleteProduct } from "../pages/products/components/modal/ModalDeleteProduct.jsx";

export const CardProduct = ({ product, onSaved }) => {
    const addProduct = useStore((state) => state.addProduct);
    const isLoggedIn = StoredAuth((state) => state.isAuthenticated);
    const role = StoredAuth((state) => state.role);
    const [hidden, setHidden] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const nav = useNavigate();

    const handleAddToCart = (product) => {

        if (!isLoggedIn) {
            toast.error("Debes iniciar sesión para agregar productos al carrito");
            return;
        }

        if (!product) return toast.error("Producto no disponible");

        sessionStorage.setItem("product", JSON.stringify([...useStore.getState().products, product]));
        addProduct(product);

        toast.success("Producto agregado al carrito");
    }

    const handleViewDetails = () => {
        nav(`/products/${product.id}`, { state: { product } });
    }

    const handleToggleHidden = () => {
        setHidden(!hidden);
    }

    const handleModal = (product) => {
        setIsOpenModalUpdate(true);
    }

    const handleModalDelete = (product) => {
        setIsOpenModalDelete(true);
    }

    return (
        <>
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                <div className="relative h-64 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={product.avatar === "" ? defaultAvatar : product.avatar} alt={product.nombre} />
                </div>
                <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                        {product.nombre}
                    </h6>
                    <p className="text-slate-600 leading-normal font-light">
                        {product.descripcion}
                    </p>
                    <p className="text-slate-600 leading-normal font-light">
                        Precio: ${product.precio}
                    </p>
                </div>
                <div className="flex flex-row p-4 mt-auto gap-2">
                    <Button nameButton="Comprar"
                        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${hidden ? "hidden" : ""}`}
                        onClick={() => handleAddToCart(product)} />
                    <Button nameButton="Ver más"
                        className={`bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 ${hidden ? "hidden" : ""}`}
                        onClick={handleViewDetails} />
                </div>
                {role === "admin" ? (
                    <div className="flex flex-row p-4 mt-auto gap-2 justify-center">
                        <ButtonDefault className={"bg-gray-500 text-white px-2 py-2 rounded hover:bg-gray-600"} onClick={handleToggleHidden} name={hidden ? <LuEyeClosed className="h-4 w-6" /> : <LuEye className="h-4 w-6" />} />
                        <ButtonDefault className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600" onClick={() => handleModal(product)} name={<MdEdit className="h-4 w-6" />} />
                        <ButtonDefault className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600" onClick={() => handleModalDelete(product)} name={<MdDeleteForever className="h-4 w-6" />} />
                    </div>

                ) : null}

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
            </div>
        </>
    )
}

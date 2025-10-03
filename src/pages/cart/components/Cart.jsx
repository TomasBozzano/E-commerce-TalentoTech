import { Link } from "react-router-dom";
import { LinkButton } from "../../../components/LinkButton";
import { useStore } from "../../../store/StoredProduct";
import { useState } from "react";

export const Cart = () => {

    const productsInCart = useStore((state) => state.products);
    const [products, setProducts] = useState(productsInCart);

    if (!products || products.length === 0) {
        return (
            <>
                <h3 className="text-lg font-medium text-center p-4">El carrito se encuentra vacío</h3>
                <p className="text-center">No hay productos en el carrito.</p>
                <LinkButton to="/products" nameButton="Ir a Productos" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" />
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                <div className="border-t border-gray-200">
                    <dl>
                        {products.map((product) => (
                            <div key={product.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Producto</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.nombre}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    )
};
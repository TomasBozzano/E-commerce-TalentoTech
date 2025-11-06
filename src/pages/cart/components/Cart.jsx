import { LinkButton } from "../../../components/LinkButton";
import { useStore } from "../../../store/StoredProduct";
import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import trashIcon from "../../../assets/trash.svg";
import productIcon from "../../../assets/product.svg";
import defaultAvatar from '../../../assets/default-avatar.png'

export const Cart = () => {

    const productsInCart = useStore((state) => state.products);
    const removeProduct = useStore((state) => state.removeProduct);
    const clearCart = useStore((state) => state.clearCart);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const uniqueProducts = Object.values(
            productsInCart.reduce((acc, product) => {
                if (!acc[product.id]) {
                    acc[product.id] = { ...product, cantidad: 1 };
                } else {
                    acc[product.id].cantidad += 1;
                }
                return acc;
            }, {})
        );
        setProducts(uniqueProducts);
    }, [productsInCart]);

    const handleDeleteProduct = (id) => {
        removeProduct(id);
        const updatedProducts = productsInCart.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    const handleClearCart = () => {
        clearCart();
        setProducts([]);
    }

    const calculateTotal = () => {
        let total = 0;
        products.forEach((product) => {
            const changedPrice = product.precio.toString().replace(".", "");
            total += parseFloat(changedPrice) * product.cantidad;
        });

        return formatNumber(total);
    }

    const formatNumber = (number) => {
        return new Intl.NumberFormat('es-AR').format(number);
    }

    if (!products || products.length === 0) {
        return (
            <main className="flex flex-col items-center justify-center h-64 bg-white shadow-sm border border-slate-200 rounded-lg w-full gap-2">
                <h3 className="text-lg font-medium text-center p-4">El carrito se encuentra vacío</h3>
                <p className="text-center">No hay productos en el carrito.</p>
                <LinkButton path="/products" nameButton="Ir a Productos" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" />
            </main>
        )
    }

    return (
        <>
            <header className="flex flex-col items-start w-full p-4 gap-6">
                <LinkButton path="/products" nameButton="Volver a Productos" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-fit justify-content-end" />
            </header>
            <main className="flex flex-col items-center w-full p-4 gap-6">
                <h1 className="text-2xl font-bold text-center p-4">Carrito de Compras</h1>
                <section className="grid grid-cols-2 gap-6 w-full">
                    <article className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg p-4">
                        {products.map((product) => (
                            <div key={product.id} className="grid grid-cols-3 p-2 border-b border-slate-200 items-center">
                                <div className="mr-4 content-center flex justify-center items-center border-r border-slate-200 pr-4">
                                    <img src={product.avatar === "" ? defaultAvatar : product.avatar} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-medium">{product.nombre} - ID {product.id}</h4>
                                    <p className="text-sm text-slate-500">Descripción: {product.descripcion}</p>
                                    <p className="text-sm text-slate-500">Cantidad: {product.cantidad}</p>
                                    <p className="text-sm text-slate-500">Precio: ${product.precio}</p>
                                </div>
                                <div className="flex-grow flex flex-col justify-center items-end">
                                    <Button nameButton={<img src={trashIcon} alt="Eliminar" />} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 self-center"
                                        onClick={() => handleDeleteProduct(product.id)} />
                                </div>
                            </div>
                        ))}
                        <div className="flex-grow">
                            <Button nameButton="Vaciar Carrito" className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
                                onClick={handleClearCart} />
                        </div>
                    </article>
                    <div className="flex flex-col items-center h-64 bg-white shadow-sm border border-slate-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-center p-4">Total a Pagar</h3>
                        <p className="text-center">${calculateTotal()}</p>
                        <LinkButton
                            to="/checkout"
                            nameButton="Ir a Pagar"
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
                        />
                    </div>
                </section>

            </main>
        </>
    )
};
import { StoredAuth } from '../store/StoredAuth';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.png'
import { toast, ToastContainer } from 'react-toastify';
import { useStore } from '../store/StoredProduct';
import { Button } from './Button';

export const ProductCarousel = ({ product }) => {

    const addProduct = useStore((state) => state.addProduct);
    const isLoggedIn = StoredAuth((state) => state.isAuthenticated);
    const nav = useNavigate();

    const handleAddToCart = (product) => {

        if (!isLoggedIn) {
            toast.error("Debes iniciar sesión para agregar productos al carrito");
            nav('/login');
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
                        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`}
                        onClick={() => handleAddToCart(product)} />
                    <Button nameButton="Ver más"
                        className={`bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600`}
                        onClick={handleViewDetails} />
                </div>

                <ToastContainer />
            </div>
        </>
    )
}

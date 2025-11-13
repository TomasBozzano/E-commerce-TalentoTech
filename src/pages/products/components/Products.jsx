import { useEffect, useState } from "react"
import { getProducts } from "../../../services/products.service";
import { CardProduct } from "../../../components/CardProduct";
import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { ButtonDefault } from "../../../components/ButtonDefault";

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenModal, setIsOpenModal] = useState(false);
    
    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleModalCreate = () => {
        setIsOpenModal(!isOpenModal);
    }

    return (
        <div>
            {loading ? (
                <p className="font-bold text-xxl-center text-center p-4">Cargando productos...</p>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center gap-2 p-2">
                        <h2 className="text-2xl font-bold text-center">Productos</h2>
                        <ButtonDefault nameButton="Agregar Producto" onClick={() => nav("/dashboard/products/add")} />
                    </div>
                    <div className="m-2 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map(product => (
                            <CardProduct key={product.id} product={product} onSaved={fetchProducts} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

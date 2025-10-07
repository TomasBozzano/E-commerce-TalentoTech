import { useEffect, useState } from "react"
import { getProducts } from "../../../services/products.service";
import { CardProduct } from "../../../components/CardProduct";

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <p className="font-bold text-xxl-center text-center p-4">Cargando productos...</p>
            ) : (
                <div className="m-4 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    )
}

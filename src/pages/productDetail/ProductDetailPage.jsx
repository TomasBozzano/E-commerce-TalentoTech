import { useParams } from "react-router-dom";
import { Template } from "../../components/Template"
import { ProductDetail } from "./components/ProductDetail"
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products.service";


export const ProductDetailPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(false);

    const getProduct = async () => {
        const data = await getProductById(id);
        setProduct(data);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    useEffect(() => {
        setLoading(true);
        getProduct();
    }, [id]);

    return (
        <>
            <Template >
                {loading ?
                    <p className="text-center font-bold text-2xl">Cargando...</p> :
                    <ProductDetail product={product} onSaved={getProduct} />}
            </Template>
        </>
    )
}

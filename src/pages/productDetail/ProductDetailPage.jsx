import { useLocation, useParams } from "react-router-dom";
import { Template } from "../../components/Template"
import { ProductDetail } from "./components/ProductDetail"


export const ProductDetailPage = () => {

    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;

    return (
        <>
            <Template >
                <ProductDetail product={product} id={id} />
            </Template>
        </>
    )
}

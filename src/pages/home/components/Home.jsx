import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { CardProduct } from "../../../components/CardProduct";
import { LinkButton } from "../../../components/LinkButton";
import { getProducts } from "../../../services/products.service";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth >= 640);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await getProducts();
            setProducts(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <header className="flex justify-center">
                <h1 className="text-2xl font-bold text-center p-4">Bienvenidos a nuestra tienda</h1>
            </header>
            <main className="flex justify-center flex-col items-center p-2">
                <p className="mt-2 text-gray-600 text-center">Aqui encontraras los mejores productos</p>
                <section className="w-full p-2">
                    <h2 className="text-xl font-bold text-center mb-4">Productos Destacados</h2>
                    {loading && <p className="font-bold text-center p-4">Cargando productos...</p>}

                    {isMobile && !loading && products.length > 0 && (
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} showDots={true}>
                            {products.slice(0, 5).map(product =>
                                <CardProduct key={product.id} product={product} onSaved={fetchData} />
                            )}
                        </Carousel>
                    )}

                    {!isMobile && !loading && products.length > 0 && (
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {products.slice(0, 3).map(product => (
                                <CardProduct key={product.id} product={product} onSaved={fetchData} />
                            ))}
                        </div>
                    )}
                </section>
                <section className="w-full p-4 flex flex-col items-center gap-4 ">
                    <p className="mt-2 text-center">Visita nuestra seccion de productos para ver todo lo que tenemos para ofrecerte</p>
                    <LinkButton path="/products" nameButton="Ir a Productos" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" />
                </section>
            </main>
        </>
    )
}

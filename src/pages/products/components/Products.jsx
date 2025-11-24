import { useEffect, useState } from "react"
import { getProducts } from "../../../services/products.service";
import { CardProduct } from "../../../components/CardProduct";
import { ButtonDefault } from "../../../components/ButtonDefault";
import { StoredAuth } from "../../../store/StoredAuth";
import { ModalCreateProduct } from "./modal/ModalCreateProduct";
import { usePagination } from "../../../hooks/usePagination";
import { ButtonPagination } from "../../../components/ButtonPagination";
import { useDebounce } from "../../../hooks/useDebounce";
import { InputSearch } from "../../../components/InputSearch";
import { toast } from "react-toastify";

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const debounce = useDebounce(500);

    const pagination = usePagination(products, 6);

    const { currentPage, totalPages, itemsCurrentPage, goToPage, backToPage } = pagination;

    const roleUser = StoredAuth((state) => state.role);

    // TODO: Arreglar paginación por temas de romper siguiente y anterior

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
        setAllProducts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleModalCreate = () => {
        setIsOpenModal(true);
    };

    const changeSearch = (event) => {
        const searchTerm = String(event.target.value).toLocaleLowerCase();

        if (!searchTerm) {
            setProducts(allProducts);
            return;
        }

        const doFilter = () => {
            const filteredProducts = allProducts.filter(product => {
                const nombre = product.nombre;
                const descripcion = product.descripcion;
                return nombre.toLocaleLowerCase().includes(searchTerm) ||
                    descripcion.toLocaleLowerCase().includes(searchTerm)
            });
            setProducts(filteredProducts);
            currentPage !== 1 && backToPage();
        }
        
        debounce(doFilter);
    };

    return (
        <div>
            {loading ? (
                <p className="font-bold text-xxl-center text-center p-4">Cargando productos...</p>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center gap-2 p-2">
                        <h2 className="text-2xl font-bold text-center">Productos</h2>
                        {roleUser === "admin" && <ButtonDefault name="Agregar Producto" onClick={handleModalCreate} className={"bg-green-500 hover:bg-green-600"} />}
                    </div>

                    <div className="flex justify-center ">
                        <InputSearch onChange={changeSearch} />
                    </div>

                    <div>
                        {itemsCurrentPage().length === 0 && (
                            <p className="font-bold text-xxl-center text-center p-4">No hay productos para mostrar</p>
                        )}
                    </div>

                    <div className="m-2 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {itemsCurrentPage().map(product => (
                            <CardProduct key={product.id} product={product} onSaved={fetchProducts} />
                        ))}
                    </div>

                    {itemsCurrentPage().length > 0 ? (
                    <div className="flex justify-center items-center gap-4 p-4">
                        <ButtonPagination 
                            onClickPrevious={backToPage}
                            onClickNext={goToPage}
                            namePrevious="Anterior"
                            nameNext="Siguiente"
                            namePosition={`${currentPage} / ${totalPages}`} 
                            page={currentPage}
                            totalPages={totalPages} />
                    </div>) : null}

                    {isOpenModal && (<ModalCreateProduct isClosed={() => setIsOpenModal(false)} isOpen={isOpenModal} onSaved={fetchProducts} />)}
                </>
            )}
        </div>
    )
}

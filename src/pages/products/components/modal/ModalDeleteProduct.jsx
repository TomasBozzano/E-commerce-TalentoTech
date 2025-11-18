import { toast, ToastContainer } from "react-toastify";
import { ButtonDefault } from "../../../../components/ButtonDefault";
import { Modal } from "../../../../components/Modal"
import { deleteProduct } from "../../../../services/products.service";
import { useState } from "react";

export const ModalDeleteProduct = ({ isClosed, isOpen, productId, onSaved }) => {
    if (!isOpen) return null;
    const [loading, setLoading] = useState(false);
    
    const handleDelete = async () => {
        try {
            setLoading(true);
            await deleteProduct(productId);
            toast.success("Producto eliminado");
        } catch (error) {
            toast.error("Error al eliminar el producto");
        } finally{
            setTimeout(() => {
                onSaved();
                isClosed();
                setLoading(false);
            }, 2500);
        }
    }

    return (
        <Modal isClosed={isClosed}>
            <h2 className="text-center font-bold">Eliminar Producto</h2>
            <p className="text-center">¿Estás seguro de que deseas eliminar este producto?</p>
            <div className="mt-4 flex justify-end">
                <ButtonDefault className={`bg-red-600 p-2 rounded hover:bg-red-500 text-white ${loading ? "opacity-50 cursor-not-allowed" : ""}`} onClick={isClosed} name="Cancelar" />
                <ButtonDefault className={`bg-blue-600 rounded hover:bg-blue-500 p-2 text-white ${loading ? "opacity-50 cursor-not-allowed" : ""}`} onClick={handleDelete} name="Guardar" />
            </div>
            <ToastContainer />
        </Modal>
    )
}

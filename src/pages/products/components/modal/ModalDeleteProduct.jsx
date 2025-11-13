import { toast, ToastContainer } from "react-toastify";
import { ButtonDefault } from "../../../../components/ButtonDefault";
import { Modal } from "../../../../components/Modal"
import { deleteProduct } from "../../../../services/products.service";

export const ModalDeleteProduct = ({ isClosed, isOpen, productId, onSaved }) => {

    if (!isOpen) return null;

    const handleDelete = async () => {
        try {
            await deleteProduct(productId);
            toast.success("Producto eliminado");
        } catch (error) {
            toast.error("Error al eliminar el producto");
        } finally{
            setTimeout(() => {
                onSaved();
                isClosed();
            }, 2500);
        }
    }

    return (
        <Modal isClosed={isClosed}>
            <h2 className="text-center font-bold">Eliminar Producto</h2>
            <p className="text-center">¿Estás seguro de que deseas eliminar este producto?</p>
            <div className="mt-4 flex justify-end">
                <ButtonDefault className="bg-red-600 p-2 rounded hover:bg-red-500 text-white" onClick={isClosed} name="Cancelar" />
                <ButtonDefault className="bg-blue-600 rounded hover:bg-blue-500 p-2 text-white" onClick={handleDelete} name="Guardar" />
            </div>
            <ToastContainer />
        </Modal>
    )
}

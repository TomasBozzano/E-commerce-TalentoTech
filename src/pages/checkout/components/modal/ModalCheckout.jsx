import { toast, ToastContainer } from "react-toastify";
import { ButtonDefault } from "../../../../components/ButtonDefault"
import { Modal } from "../../../../components/Modal"
import { useStore } from "../../../../store/StoredProduct";
import { useNavigate } from "react-router-dom";

export const ModalCheckout = ({ isClosed, loading }) => {

    const cartStore = useStore(state => state);
    const nav = useNavigate();
    

    const handleSave = () => {
        if (loading) return;
        toast.success("Compra realizada con éxito!");
        cartStore.clearCart();
        sessionStorage.removeItem("product");
        setTimeout(() => {
            isClosed();
            nav("/");
        }, 2000);
    }

    return (
        <Modal isClosed={isClosed}>
            <h2 className="text-center text-2xl p-2">Abonar compra</h2>
            <p className="text-center p-2">¿Estas seguro que desea finalizar la compra?</p>
            <div className="mt-4 flex justify-end">
                <ButtonDefault className={`bg-red-600 p-2 rounded hover:bg-red-500 text-white ${loading ? "opacity-50 cursor-not-allowed" : ""}`} onClick={isClosed} name="Cancelar" />
                <ButtonDefault className={`bg-blue-600 rounded hover:bg-blue-500 p-2 text-white ${loading ? "opacity-50 cursor-not-allowed" : ""}`} onClick={handleSave} name="Guardar" />
            </div>
            <ToastContainer />
        </Modal>
    )
}

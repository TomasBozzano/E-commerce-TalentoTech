import { toast } from "react-toastify";
import { ButtonDefault } from "../../../../components/ButtonDefault";
import { deleteUser } from "../../../../services/auth.service";
import { Modal } from "../../../../components/Modal";

export const ModalUserDelete = ({ isOpen, isClosed, user, onSaved }) => {

    const handleDelete = async () => {
        try {
            await deleteUser(user.id);
            toast.success("Usuario eliminado con éxito");
        } catch (error) {
            toast.error("Error al eliminar el usuario");
        } finally {
            setTimeout(() => {
                onSaved();
                isClosed();
            }, 2500);
        }
    }

    return (
        <Modal isClosed={isClosed}>
            <h2>
                    ¿Estás seguro de que deseas eliminar este usuario?
                </h2>
                <div className="flex justify-end space-x-4 mt-4">
                    <ButtonDefault className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-400" onClick={isClosed} name="Cancelar" />
                    <ButtonDefault className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={handleDelete} name="Eliminar" />
                </div>
        </Modal>
    )
}

import { toast, ToastContainer } from "react-toastify";
import { ButtonDefault } from "../../../../components/ButtonDefault";
import { deleteUser } from "../../../../services/auth.service";

export const ModalUserDelete = ({ isOpen, isClosed, user }) => {

    const handleDelete = async () => {
        try {
            const deletedUser = await deleteUser(user.id);
            toast.success("Usuario eliminado con éxito");
        } catch (error) {
            toast.error("Error al eliminar el usuario");
        } finally {
            isClosed();
        }
    }

    return (
        <div className='fixed inset-0 bg-gray-400/30 backdrop-blur-sm flex items-center justify-center' onClick={isClosed}>
            <div className='bg-white p-6 rounded shadow-lg w-96 flex flex-col' onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end">
                    <p className="text-right rounded cursor-pointer bg-gray-300 px-2 py-1" onClick={isClosed}>X</p>
                </div>
                <h2>
                    ¿Estás seguro de que deseas eliminar este usuario?
                </h2>
                <div className="flex justify-end space-x-4 mt-4">
                    <ButtonDefault className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-400" onClick={isClosed} name="Cancelar" />
                    <ButtonDefault className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={handleDelete} name="Eliminar" />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

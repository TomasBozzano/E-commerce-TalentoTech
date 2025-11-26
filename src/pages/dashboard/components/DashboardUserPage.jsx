import { use, useEffect, useState } from "react"
import { LinkButton } from "../../../components/LinkButton"
import { Template } from "../../../components/Template"
import { getUsers } from "../../../services/auth.service";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { ModalUser } from './modal/ModalUser'
import { ModalUserDelete } from "./modal/ModalUserDelete";
import { ButtonDefault } from "../../../components/ButtonDefault";
import { ModalUserCreate } from "./modal/ModalUserCreate";
import { toast } from "react-toastify";

export const DashboardUserPage = () => {

    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const [selectedUserDelete, setSelectedUserDelete] = useState(null);
    const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await getUsers();
            setUsers(response);
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Error al cargar los usuarios.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const handleModalDelete = (user) => {
        setSelectedUserDelete(user);
        setIsModalOpenDelete(true);
    }

    return (
        <Template>
            <header className="p-4">
                <LinkButton path='/dashboard' className={"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"} nameButton={"Volver al Dashboard"} />
            </header>
            <main>
                <h2 className='text-center text-2xl font-bold p-2 '> Dashboard Users </h2>
                <p className='text-center'>Aquí puedes gestionar los usuarios.</p>
                <div className="flex justify-center items-center p-2">
                    <ButtonDefault className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4" onClick={() => setIsModalOpenCreate(true)} name={"Crear Usuario"} />
                </div>
                {loading ? (
                    <p className="text-center">Cargando usuarios...</p>
                ) : (
                    <section className="p-4 w-5/6 mx-auto max-md:w-full max-md:p-2">
                        <div className="overflow-x-auto md:overflow-visible">
                            <table className="hidden md:table w-full text-center">
                                <thead className="bg-gray-200 rounded-t-lg border border-blue-400">
                                    <tr className="border-b border-blue-400">
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Nombre</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Rol</th>
                                        <th className="px-4 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white border-b-1 border-gray-400">
                                    {users.map((user) => (
                                        <tr key={user.id} className="border-b border-gray-300">
                                            <td className="px-4 py-2">{user.id}</td>
                                            <td className="px-4 py-2">{user.name}</td>
                                            <td className="px-4 py-2">{user.email}</td>
                                            <td className="px-4 py-2">{user.role}</td>
                                            <td className="px-4 py-2">
                                                <ButtonDefault className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600" onClick={() => handleModalDelete(user)} name={<MdDeleteForever className="h-4 w-6" />} />
                                                <ButtonDefault className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 ml-2" onClick={() => handleModal(user)} name={<MdEdit className="h-4 w-6" />} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Versión móvil */}
                            <div className="flex flex-col gap-4 md:hidden">
                                {users.map((user) => (
                                    <div key={user.id} className="border border-blue-400 rounded-lg p-4 bg-white shadow-sm">
                                        <p><strong>ID:</strong> {user.id}</p>
                                        <p><strong>Nombre:</strong> {user.name}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Rol:</strong> {user.role}</p>
                                        <div className="mt-2 flex justify-center gap-2 items-center">
                                            <ButtonDefault className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600" onClick={() => handleModalDelete(user)} name={<MdDeleteForever className="h-4 w-6" />} />
                                            <ButtonDefault className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600" onClick={() => handleModal(user)} name={<MdEdit className="h-4 w-6" />} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            {isModalOpen && <ModalUser isOpen={isModalOpen} isClosed={() => setIsModalOpen(false)} user={selectedUser} onSaved={fetchUsers} />}
            {isModalOpenDelete && <ModalUserDelete isOpen={isModalOpenDelete} isClosed={() => setIsModalOpenDelete(false)} user={selectedUserDelete} onSaved={fetchUsers} />}
            {isModalOpenCreate && <ModalUserCreate isClosed={() => setIsModalOpenCreate(false)} onSaved={fetchUsers} />}
        </Template>
    )
}

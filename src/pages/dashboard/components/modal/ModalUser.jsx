
import { useState } from "react";
import { InputBox } from "../../../../components/InputBox";
import { InputLabel } from "../../../../components/InputLabel";
import { toast, ToastContainer } from "react-toastify";
import { changeRole } from "../../../../services/auth.service";
import { ButtonDefault } from "../../../../components/ButtonDefault";

export const ModalUser = ({ isOpen, isClosed, user }) => {
  if (!isOpen) return null;

  const [selectedRole, setSelectedRole] = useState(user.role);

  const valueSelect = [
    { key: '0', value: '', label: 'Seleccione una opción' },
    { key: '1', value: 'admin', label: 'ADMIN' },
    { key: '2', value: 'user', label: 'USER' }
  ];

  const handleSave = async () => {
    try {
      const updateUser = await changeRole(user.id, selectedRole);
      toast.success("Usuario actualizado con éxito");
    } catch (error) {
      toast.error("Error al actualizar el usuario", error);
    } finally {
      isClosed();
    }
  }

  const changeRoleInput = (e) => {
    console.log(e.target.value);
    setSelectedRole(e.target.value);
  }

  return (
    <div
      className="fixed inset-0 bg-gray-400/30 backdrop-blur-sm flex items-center justify-center"
      onClick={isClosed}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl mb-4">Editar usuario</h3>
        <section className="flex flex-col p-2 gap-1">
          <InputLabel name="Nombre" value={user.name} className="w-full" disabled={true} />
          <InputLabel name="Email" value={user.email} className="w-full" disabled={true} />
          <InputBox name="Rol" value={selectedRole} className="w-full" disabled={false} valueSelect={valueSelect} onChange={changeRoleInput} />
          <div className="mt-4 flex justify-end">
            <ButtonDefault className="bg-red-600 p-2 rounded hover:bg-red-500 text-white" onClick={isClosed} name="Cancelar" />
            <ButtonDefault className="bg-blue-600 rounded hover:bg-blue-500 p-2 text-white" onClick={handleSave} name="Guardar" />
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

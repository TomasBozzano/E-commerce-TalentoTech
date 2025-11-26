
import { useState } from "react";
import { InputBox } from "../../../../components/InputBox";
import { InputLabel } from "../../../../components/InputLabel";
import { toast } from "react-toastify";
import { changeRole } from "../../../../services/auth.service";
import { ButtonDefault } from "../../../../components/ButtonDefault";
import { Modal } from "../../../../components/Modal";
import { valueSelect } from "../../../../utils/utils";

export const ModalUser = ({ isOpen, isClosed, user, onSaved}) => {
  if (!isOpen) return null;

  const [selectedRole, setSelectedRole] = useState(user.role);

  const handleSave = async () => {
    if (selectedRole === "") {
      toast.error("Error: debe seleccionar un rol");
      return;
    }
    
    try {
      await changeRole(user.id, selectedRole);
      toast.success("Usuario actualizado con éxito");
    } catch (error) {
      toast.error("Error al actualizar el usuario", error);
    } finally {
      setTimeout(() => {
        onSaved();
        isClosed();
      }, 2500);
    }
  }

  const changeRoleInput = (e) => {
    setSelectedRole(e.target.value);
  }

  return (
    <Modal isClosed={isClosed}>
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
    </Modal>
  );
};

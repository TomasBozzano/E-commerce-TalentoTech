import { useState } from "react";
import { Button } from "../../../../components/Button"
import { InputGeneric } from "../../../../components/InputGeneric"
import { Modal } from "../../../../components/Modal"
import { registerUser } from "../../../../services/auth.service";
import { FormLayout } from "../../../../components/FormLayout";
import { ButtonDefault } from "../../../../components/ButtonDefault";
import { InputBox } from "../../../../components/InputBox";
import { valueSelect } from '../../../../utils/utils';
import { toast, ToastContainer } from "react-toastify";

export const ModalUserCreate = ({ isClosed, onSaved}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("");

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }

    const changeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }


    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const changeRoleInput = (e) => {
    setSelectedRole(e.target.value);
  }

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            toast.error("Error: las contraseñas no coinciden");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Error: formato de email inválido");
            return;
        }

        if(selectedRole === "") {
            toast.error("Error: debe seleccionar un rol");
            return;
        }

        try {
            await registerUser(username, email, password, selectedRole);
            toast.success("Registro exitoso");
        } catch (error) {
            toast.error("302 Found: " + error);
        } finally {
            setTimeout(() => {
                onSaved();
                isClosed();
            }, 2500);
        }
    }

    return (
        <Modal isClosed={isClosed}>
            <h3 className="text-xl mb-4 text-center">Crear usuario</h3>
            <section className="flex flex-col p-2 gap-1">
                <InputGeneric type="text" placeholder="Username" value={username} onChange={changeUsername} />
                <InputGeneric type="email" placeholder="Email" value={email} onChange={changeEmail} />
                <InputGeneric type="password" placeholder="Password" value={password} onChange={changePassword} />
                <InputGeneric type="password" placeholder="Confirm Password" value={confirmPassword} onChange={changeConfirmPassword} />
                <InputBox label="Role" valueSelect={valueSelect} onChange={changeRoleInput} />
                <div className="flex justify-end space-x-4 mt-4">
                    <ButtonDefault className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-400" onClick={isClosed} name="Cancelar" />
                    <ButtonDefault className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleRegister} name="Crear" />
                </div>
            <ToastContainer />
            </section>
        </Modal>
    )
}

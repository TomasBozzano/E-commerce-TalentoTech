import { useState } from "react";
import { Button } from "../../../components/Button"
import { FormLayout } from "../../../components/FormLayout"
import { InputGeneric } from "../../../components/InputGeneric"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const nav = useNavigate();

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }

    const changeEmail = (e) => {
        const value = e.target.value;
        if (validateEmail(value)) {
            setEmail(value);
        }else{
            toast.error("Error: formato de email inválido")
        }
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

    const handleRegister = () => {
        // Lógica de registro aquí
    }

    const handleBackToLogin = () => {
        nav("/login");
    }


    return (
        <>
            <FormLayout title="Register">
                <InputGeneric type="text" placeholder="Username" value={username} onChange={changeUsername} />
                <InputGeneric type="email" placeholder="Email" value={email} onChange={changeEmail} />
                <InputGeneric type="password" placeholder="Password" value={password} onChange={changePassword} />
                <InputGeneric type="password" placeholder="Confirm Password" value={confirmPassword} onChange={changeConfirmPassword} />
                <Button nameButton="Register" onClick={handleRegister} className="mt-4 w-full" />
                <Button nameButton="Back to Login" onClick={handleBackToLogin} className="mt-2 w-full bg-gray-500 hover:bg-gray-600" />
            </FormLayout>
        </>
    )
}

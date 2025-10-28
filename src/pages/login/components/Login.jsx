import { FormLayout } from "../../../components/FormLayout"
import { InputGeneric } from "../../../components/InputGeneric"
import { Button } from "../../../components/Button"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { useState } from "react"
import { validateUserSession } from "../../../services/auth.service"
import { StoredAuth } from "../../../store/StoredAuth"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const nav = useNavigate();
  const authStore = StoredAuth();

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    if (placeholder === "Username") {
      setEmail(value);
    } else if (placeholder === "Password") {
      setPassword(value);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const isValid = await validateUserSession(email, password)

    if (isValid) {
      authStore.login();
      authStore.setEmail(email);
      authStore.setPassword(password);
      toast.success("¡Inicio de sesión exitoso!")
      nav("/products")
    } else {
      toast.error("Error de autenticación. Por favor, verifica tus credenciales.")
    }
  }

  const registerUser = () => {
    nav("/register");
  }

  return (
    <>
        <FormLayout title="Login">
          <InputGeneric type="text" placeholder="Username" value={email} onChange={handleChange} />
          <InputGeneric type="password" placeholder="Password" value={password} onChange={handleChange} />
          <p className="text-center text-sm flex justify-center gap-1 mt-2">
            Forgot Password? <p className="underline text-gray-400 hover:underline hover:text-gray-600 cursor-pointer">Click here</p>
          </p>
          <Button nameButton="Login" onClick={handleSubmit} className="mt-4 w-full" />
          <Button nameButton="Register" onClick={registerUser} className="mt-2 w-full bg-gray-500 hover:bg-gray-600" />
        </FormLayout>
        <ToastContainer />
    </>
  )
}

import { toast, ToastContainer } from "react-toastify";
import { Template } from "../../components/Template";
import { StoredAuth } from "../../store/StoredAuth";
import { Home } from "../home/components/Home";
import { useEffect } from "react";

export const LogoutPage = () => {
    const authStore = StoredAuth();
    
    useEffect(() => {
        authStore.reset();
        authStore.logout();
        toast.success("¡Cierre de sesión exitoso!");
    }, []);

    return <>
        <Template>
            <Home />
        </Template>
        <ToastContainer />
    </>
}

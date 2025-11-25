import { toast, ToastContainer } from "react-toastify";
import { Template } from "../../components/Template";
import { StoredAuth } from "../../store/StoredAuth";
import { Home } from "../home/components/Home";
import { useEffect } from "react";
import { useStore } from "../../store/StoredProduct";
import { useNavigate } from "react-router-dom";

export const LogoutPage = () => {
    const authStore = StoredAuth(state => state);
    const cartStore = useStore(state => state);
    const nav = useNavigate();
    
    useEffect(() => {
        cartStore.clearCart();
        authStore.reset();
        authStore.logout();
        sessionStorage.removeItem("auth");
        sessionStorage.removeItem("product");
        sessionStorage.clear();
        toast.success("¡Cierre de sesión exitoso!");
        nav('/');
    }, []);

    return <>
        <Template>
            <Home />
        </Template>
        <ToastContainer />
    </>
}

import { toast, ToastContainer } from "react-toastify";
import { Template } from "../../components/Template";
import { StoredAuth } from "../../store/StoredAuth";
import { Home } from "../home/components/Home";
import { useEffect } from "react";
import { useStore } from "../../store/StoredProduct";

export const LogoutPage = () => {
    const authStore = StoredAuth(state => state);
    const cartStore = useStore(state => state);
    
    useEffect(() => {
        cartStore.clearCart();
        authStore.reset();
        authStore.logout();
        sessionStorage.removeItem("auth");
        sessionStorage.removeItem("product");
        sessionStorage.clear();
        toast.success("¡Cierre de sesión exitoso!");
    }, []);

    return <>
        <Template>
            <Home />
        </Template>
        <ToastContainer />
    </>
}

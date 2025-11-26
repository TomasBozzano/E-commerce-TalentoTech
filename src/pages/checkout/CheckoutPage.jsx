import { useEffect, useState } from "react";
import { LinkButton } from "../../components/LinkButton";
import { Template } from "../../components/Template"
import { StoredAuth } from "../../store/StoredAuth"
import { useStore } from "../../store/StoredProduct";
import { Checkout } from "./components/Checkout"
import { getUserByMail } from "../../services/auth.service";

export const CheckuotPage = () => {
  const userAuth = sessionStorage.getItem("auth") ? JSON.parse(sessionStorage.getItem("auth")) : {};
  const products = useStore((state) => state.products);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    try {
      const user = await getUserByMail(userAuth.email);
      setUserData(user);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getUser();
    }, 500);
  }, [])

  return (
    <Template>
      <h2 className="text-center text-2xl font-bold p-2"> Checkout Page </h2>
      <header className="flex flex-col items-start p-4 mx-auto w-4/6 max-md:flex-row max-md:justify-center max-md:w-full">
        <LinkButton path="/cart" nameButton="Volver al carrito" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-fit justify-content-end" />
      </header>
      <Checkout user={userData} products={products} loading={loading}/>
    </Template>
  )
}

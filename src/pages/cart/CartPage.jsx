import { Template } from "../../components/Template"
import { Cart } from "./components/Cart"

export const CartPage = () => {
  return (
    <>
        <Template>
            <h1 className="text-2xl font-bold text-center p-4">Carrito de Compras</h1>
            <Cart />
        </Template>
    </>
  )
}

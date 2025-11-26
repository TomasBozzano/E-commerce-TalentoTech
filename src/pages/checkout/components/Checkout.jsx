import { useEffect, useState } from "react"
import { Button } from "../../../components/Button"
import { InputBox } from "../../../components/InputBox"
import { InputGeneric } from "../../../components/InputGeneric"
import { loadProvince } from "../../../utils/utils"
import { ModalCheckout } from "./modal/ModalCheckout"
import { toast, ToastContainer } from "react-toastify"
import { formatNumber } from "../../../utils/utils"

export const Checkout = ({ user, products, loading}) => {

    const [selectedProvince, setSelectedProvince] = useState("")
    const [isModal, setIsModal] = useState(false)
    const [error, setError] = useState({})
    const [city, setCity] = useState("")
    const [direction, setDirection] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [productList, setProducts] = useState([])

    useEffect(() => {
        const uniqueProducts = Object.values(
            products.reduce((acc, product) => {
                if (!acc[product.id]) {
                    acc[product.id] = { ...product, cantidad: 1 };
                } else {
                    acc[product.id].cantidad += 1;
                }
                return acc;
            }, {})
        );
        setProducts(uniqueProducts);
    }, [products]);

    const calculateTotal = () => {
        let total = 0;
        productList.forEach((product) => {
            const changedPrice = String(product.precio).replace(".", "");
            total += parseFloat(changedPrice) * product.cantidad;
        });

        return formatNumber(total);
    }

    const changeModal = () => {
        if (!validateFields()) return;
        setIsModal(!isModal)
    }

    const changeProvince = (e) => {
        setSelectedProvince(e.target.value)
    }

    const changeCity = (e) => {
        setCity(e.target.value)
    }

    const changeDirection = (e) => {
        setDirection(e.target.value)
    }

    const changePostalCode = (e) => {
        setPostalCode(e.target.value);
    }

    const validCodePostal = (code) => {
        const postalCodePattern = /^[0-9]{4,5}$/;
        return postalCodePattern.test(code);
    }

    const validateFields = () => {
        const newErrors = {};
        if (selectedProvince.trim() === "") newErrors.province = "Provincia requerida";
        if (city.trim() === "") newErrors.city = "Ciudad requerida";
        if (direction.trim() === "") newErrors.direction = "Dirección requerida";
        if (postalCode.trim() === "") newErrors.codePostal = "Código postal requerido";
        if (!validCodePostal(postalCode)) newErrors.codePostal = "Código postal inválido. Debe contener entre 4 y 5 dígitos numéricos.";
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    return (
        <>
            {loading ? <p className="text-center font-medium text-xl">Cargando...</p> : (
                <div className="flex flex-col justify-center items-center w-full p-2 gap-2 max-md:grid max-md:grid-cols-1 max-md:gap-4 max-md:w-full max-md:mx-0 max-md:justify-center">
                    <div className="w-1/2 bg-white shadow-sm border border-slate-200 rounded-lg p-4 max-md:w-full">
                        <h3 className="text-lg font-medium mb-4">Información de envío</h3>
                        <section className="flex flex-col gap-4">
                            <InputGeneric type="text" placeholder="Nombre completo" configClassName={"bg-gray-100 border-slate-300 px-3 py-2"} value={user.name} />
                            <InputGeneric type="email" placeholder="Email" configClassName={"bg-gray-100 border-slate-300 px-3 py-2"} disabled={true} value={user.email} />
                            <InputBox value={selectedProvince} name={"Provincia"} valueSelect={loadProvince} className="w-full" disabled={false} onChange={changeProvince} />
                            {error?.province && <p className="text-red-500 text-sm">{error.province}</p>}
                            <InputGeneric type="text" value={city} placeholder="Ciudad" onChange={changeCity} disabled={false} error={error?.city} />
                            {error?.city && <p className="text-red-500 text-sm">{error.city}</p>}
                            <InputGeneric type="text" value={direction} placeholder="Dirección" onChange={changeDirection} disabled={false} error={error?.direction} />
                            {error?.direction && <p className="text-red-500 text-sm">{error.direction}</p>}
                            <InputGeneric type="text" value={postalCode} placeholder="Código postal" onChange={changePostalCode} disabled={false} error={error?.codePostal} />
                            {error?.codePostal && <p className="text-red-500 text-sm">{error.codePostal}</p>}
                        </section>
                    </div>
                    {/* <div className="w-1/2 bg-white shadow-sm border border-slate-200 rounded-lg p-4 max-md:w-full">
                    <h3 className="text-lg font-medium mb-4">Método de pago</h3>
                    <section className="flex flex-col gap-4">
                        <input type="text" placeholder="Número de tarjeta" className="border border-slate-300 rounded px-3 py-2" />
                        <input type="text" placeholder="Nombre en la tarjeta" className="border border-slate-300 rounded px-3 py-2" />
                        <input type="text" placeholder="Fecha de expiración" className="border border-slate-300 rounded px-3 py-2" />
                        <input type="text" placeholder="Código CVV" className="border border-slate-300 rounded px-3 py-2" />
                    </section>
                </div> */}
                    <div className="w-1/2 bg-white shadow-sm border border-slate-200 rounded-lg p-4 max-md:w-full">
                        <h3 className="text-lg font-medium mb-4">Resumen de la compra</h3>
                        <section className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <span>Total a pagar:</span>
                                <span className="font-bold">${calculateTotal()}</span>
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-center items-center w-full p-4">
                        <Button className="bg-green-500 hover:bg-green-400" onClick={changeModal} nameButton={"Abonar compra"} />
                    </div>
                </div>
            )}

            {
                isModal ? <ModalCheckout isClosed={changeModal} loading={loading} /> : null
            }
            <ToastContainer />
        </>
    )
}

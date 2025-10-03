import { LinkButton } from "../../../components/LinkButton"

export const Home = () => {
    return (
        <>
            <header className="flex justify-center">
                <h1 className="text-2xl font-bold text-center p-4">Bienvenidos a nuestra tienda</h1>
            </header>
            <main className="flex justify-center flex-col items-center p-8">
                <p className="mt-2 text-gray-600 text-center p-4">Aqui encontraras los mejores productos</p>
                <LinkButton path="/products" nameButton="Ir a Productos" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" />
                <p className="mt-2 text-center">Visita nuestra seccion de productos para ver todo lo que tenemos para ofrecerte</p>
            </main>
            {/* <img src="https://via.placeholder.com/150" alt="Productos" className="mt-4" /> */}
        </>
    )
}

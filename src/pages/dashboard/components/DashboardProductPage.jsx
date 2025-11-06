import { LinkButton } from "../../../components/LinkButton"
import { Template } from "../../../components/Template"

export const DashboardProductPage = () => {
  return (
    <Template>
      <header className="p-4">
        <LinkButton path='/dashboard' className={"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"} nameButton={"Volver al Dashboard"} />
      </header>
      <main>
        <h2 className='text-center text-2xl font-bold p-2 '> Dashboard Products </h2>
        <p className='text-center'>Aquí puedes gestionar los productos.</p>
        <section className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Precio</th>
                <th className="border px-4 py-2">Stock</th>
                <th className="border px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí irán las filas de productos */}
            </tbody>
          </table>
        </section>
      </main>
    </Template>
  )
}

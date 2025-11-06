import { LinkButton } from "../../../components/LinkButton"
import { Template } from "../../../components/Template"

export const DashboardUserPage = () => {
    return (
        <Template>
            <header className="p-4">
                <LinkButton path='/dashboard' className={"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"} nameButton={"Volver al Dashboard"} />
            </header>
            <main>
                <h2 className='text-center text-2xl font-bold p-2 '> Dashboard Users </h2>
                <p className='text-center'>Aquí puedes gestionar los usuarios.</p>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2">Nombre</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Rol</th>
                                <th className="border px-4 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Aquí irán las filas de usuarios */}
                        </tbody>
                    </table>
                </section>
            </main>
        </Template>
    )
}

import { useEffect, useState } from "react"
import { Template } from "../../components/Template"
import data from '../../utils/data.json'
import { getUsers } from "../../services/auth.service"
import { LinkButton } from "../../components/LinkButton"

export const UserPage = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const response = await getUsers();
            setUsers(response);
            setLoading(false);
        }
        fetchUsers();
    }, [])

    return (
        <Template>
            <h2 className="text-center text-2xl font-bold p-2"> User Page </h2>
            <header className="flex flex-col items-start p-4 mx-auto w-5/6">
                <LinkButton path="/login" nameButton="Volver" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-fit justify-content-end" />
            </header>
            <div className="p-4 w-5/6 mx-auto">
                {loading && <p className="text-center font-medium text-xl">Cargando usuarios...</p>}
                {users.map((user) => (
                    <div key={user.id} className="py-2">
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                            {JSON.stringify(user, null, 2)}
                        </pre>
                    </div>
                ))}
            </div>
        </Template>
    )
}

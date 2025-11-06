import { Template } from "../../components/Template"
import data from '../../utils/data.json'

export const UserPage = () => {
  return (
    <Template>
        <h2 className="text-center text-2xl font-bold p-2"> User Page </h2>
        <div className="p-4 w-5/6 mx-auto">
            {data.map((user) => (
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

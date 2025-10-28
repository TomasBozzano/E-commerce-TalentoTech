import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="text-center mt-20 flex flex-col gap-4 items-center">
        <h2 className="text-bold text-2xl p-2">404 - Not Found</h2>
        <p className="">The page you are looking for does not exist.</p>
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">Go to Home</Link>
    </div>
  )
}

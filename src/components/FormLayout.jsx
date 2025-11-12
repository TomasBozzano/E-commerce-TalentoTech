export const FormLayout = ({title, children}) => {
  return (
    <div className="border rounded shadow-md p-6 max-w-md mx-auto mt-10 flex flex-col gap-4 max-md:w-3/4">
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        {children}
    </div>
  )
}

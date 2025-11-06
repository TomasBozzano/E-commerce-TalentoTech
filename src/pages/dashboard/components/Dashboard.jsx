import { LinkButton } from '../../../components/LinkButton'

export const Dashboard = () => {
  return (
    <>
      <h2 className='text-center text-2xl font-bold p-2 '> Dashboard </h2>
      <section className='flex justify-center gap-4 mb-4 p-4'>
        <LinkButton path='/dashboard/users' className={"bg-yellow-300 text-white px-4 py-2 rounded hover:bg-yellow-400"} nameButton={"Ver Usuarios"} />
        <LinkButton path='/dashboard/products' className={"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"} nameButton={"Ver Productos"} />
      </section>
    </>
  )
}

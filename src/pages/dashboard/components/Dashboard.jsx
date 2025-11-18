import { LinkButton } from '../../../components/LinkButton'
import { formatEmail } from '../../../utils/utils'

export const Dashboard = () => {

  const userStored = sessionStorage.getItem("auth");
  const user = userStored ? JSON.parse(userStored) : null;

  return (
    <main className='p-4'>
      <h2 className='text-center text-2xl font-bold p-2 '> Dashboard </h2>
      <h3 className='text-center flex justify-center items-center gap-1 max-md:flex-col max-md:gap-0'>Bienvenido al panel de control <p className='font-bold'>{formatEmail(user.email)}</p>. Desde aquí puedes gestionar usuarios y productos.</h3>
      <hr className='my-4' />
      <section className='flex justify-center mb-4 p-4'>
        <p className='text-center'>Usuario Administrador Logueado: {user.email}</p>
      </section>
      <section className='flex justify-center gap-4 mb-4 p-4'>
        <LinkButton path='/dashboard/users' className={"bg-yellow-300 text-white px-4 py-2 rounded hover:bg-yellow-400"} nameButton={"Ver Usuarios"} />
        <LinkButton path='/products' className={"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"} nameButton={"Ver Productos"} />
      </section>
    </main>
  )
}

import { NavBar } from '../components/NavBar'

export const Template = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className='p-4 max-md:flex-col max-md:flex max-md:justify-center max-md:items-center'>
                {children}
            </div>
        </>
    )
}

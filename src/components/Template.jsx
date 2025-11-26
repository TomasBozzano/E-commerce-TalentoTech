import { NavBar } from '../components/NavBar'
import { Footer } from './Footer'

export const Template = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1 overflow-auto">
                <div className='p-4 max-md:flex-col max-md:flex max-md:justify-center max-md:items-center'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

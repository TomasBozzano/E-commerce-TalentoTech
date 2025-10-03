import {NavBar} from '../components/NavBar'

export const Template = ({children}) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

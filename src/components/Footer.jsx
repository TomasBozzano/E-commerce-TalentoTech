import { GitHub } from "../assets/GitHub"
import { LinkedIn } from "../assets/LinkedIn"
import { ButtonFooter } from "./ButtonFooter"

export const Footer = () => {

    const goToGitHub = () => {
        window.open("https://github.com/TomasBozzano")
    }

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/tomasbozzano/")
    }

    return (
        <footer className="bg-gray-800 text-white p-4 text-center flex-row items-center">
            <p className="flex items-center justify-center">&copy; Created By Tomás Bozzano.
                <ButtonFooter onClick={goToGitHub} className={"py-2 px-2 rounded-full hover:bg-gray-700 flex items-center gap-2"}>
                    {<GitHub className={"w-6 h-6"} />}
                </ButtonFooter>
                <ButtonFooter onClick={goToLinkedIn} className={"py-2 px-2 rounded hover:bg-gray-700 flex items-center gap-2"}>
                    <LinkedIn className={"w-6 h-6"} />
                </ButtonFooter>
            </p>
        </footer>
    )
}

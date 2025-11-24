import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";

export const InputSearch = ({ onChange }) => {
    const inputRef = useRef(null);

    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        onChange({ target: { value: "" } });
    }

    return (
        <div className="flex justify-center items-center w-2/5 border border-gray-300 rounded-md px-2">
            <input ref={inputRef} type="text" placeholder="Buscar producto..." className="appearance-none p-2 w-full focus:outline-none" onChange={onChange} />
            <button onClick={clearInput} className="p-2 hover:bg-gray-200 rounded">
                <RxCross2 className="w-4 h-4" />
            </button>
        </div>
    )
}

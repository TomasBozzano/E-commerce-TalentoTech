export const InputLabel = ({ name, type, placeholder, value, onChange, disabled }) => {
    return (
        <>
            <label className="block mb-1 font-medium">{name}</label>
            <input type={type}
            className={`border rounded p-2 ${disabled ? "bg-gray-200" : "bg-white"}`}
            placeholder={placeholder}
            value={value} 
            onChange={onChange} 
            disabled={disabled} />
        </>
    )
}

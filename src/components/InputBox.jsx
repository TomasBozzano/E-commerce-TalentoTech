export const InputBox = ({ name, value, onChange, disabled, valueSelect}) => {
    return (
        <>
            <label className="block mb-1 font-medium">{name}</label>
            <select className="border rounded p-2 bg-white w-full" value={value} onChange={onChange} disabled={disabled}>
                {valueSelect.map((option) => (
                    <option key={option.key} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

        </>
    )
}

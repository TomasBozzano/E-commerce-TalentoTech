export const InputTextarea = ({ maxLength, value, onChange, name }) => {
    return (
        <>
            <label className="block mb-1 font-medium">{name}</label>
            <textarea className="border rounded p-2" maxLength={maxLength} value={value} onChange={onChange} placeholder="Descripción">
            </textarea>
            <p>{value.length} / {maxLength}</p>
        </>
    )
}

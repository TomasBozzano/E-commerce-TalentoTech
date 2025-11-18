export const InputTextarea = ({ maxLength, value, onChange, name }) => {
    return (
        <>
            <label className="block mb-1 font-medium">{name}</label>
            <textarea className="w-full min-h-[120px] resize-vertical overflow-auto p-2 border rounded" maxLength={maxLength} value={value} onChange={onChange} placeholder="Descripción">
            </textarea>
            <p>{value.length} / {maxLength}</p>
        </>
    )
}

export const InputGeneric = ({ type, placeholder, value, onChange, onKeyDown, error }) => {
  return (
    <input
      type={type}
      className={`border rounded p-2 ${ error ? "border-red-500" : "" }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={onChange ? false : true}
    />
  )
}

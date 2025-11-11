export const InputGeneric = ({ type, placeholder, value, onChange, onKeyDown }) => {
  return (
    <input
      type={type}
      className="border rounded p-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={onChange ? false : true}
    />
  )
}

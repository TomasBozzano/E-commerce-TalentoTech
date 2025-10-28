export const InputGeneric = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="border rounded p-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

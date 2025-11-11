export const ButtonDefault = ({name, onClick, className }) => {
  return (
    <button onClick={onClick} className={`text-white px-2 py-2 rounded ml-2 ${className}`}>{name}</button>
  )
}

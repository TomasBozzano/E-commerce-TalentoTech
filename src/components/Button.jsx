export const Button = ({ onClick, nameButton, className }) => {
  return (
    <button className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer ${className}`} onClick={onClick}>
        {nameButton}
    </button>
  )
}

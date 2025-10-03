export const Button = ({ onClick, nameButton, className }) => {
  return (
    <button className={` w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`} onClick={onClick}>
        {nameButton}
    </button>
  )
}

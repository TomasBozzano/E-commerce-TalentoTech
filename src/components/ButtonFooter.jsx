export const ButtonFooter = ({ children, className, onClick }) => {

  

  return (
    <button className={className} onClick={onClick}>
        {children}
    </button>
  )
}

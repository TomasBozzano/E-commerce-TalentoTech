import { Link } from "react-router-dom"

export const LinkButton = ({path, nameButton, className}) => {
  return (
    <Link to={path} className={className}>
      {nameButton}
    </Link>
  )
}

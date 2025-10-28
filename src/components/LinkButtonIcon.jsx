import { Link } from "react-router-dom"

export const LinkButtonIcon = ({ path, nameSvg, nameButton, count }) => {
  return (
    <Link to={path} className={`flex items-center`}>
      {nameSvg}
      {nameButton != "Cart" ? `${nameButton}`
        : <div>
          {nameButton}
          {count > 0 && <span className="ml-1 text-sm">({count})</span>}
        </div>
      }
    </Link>
  )
}

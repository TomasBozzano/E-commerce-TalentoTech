import { Link } from "react-router-dom"

export const LinkButtonIcon = ({ path, nameSvg, nameButton, count }) => {
  return (
    <Link to={path} className={`flex items-center`}>
      <img src={nameSvg} alt="" className="inline-block h-6 w-6 mr-1" />
      {nameButton != "Cart" ? `${nameButton}`
        : <div>
          {nameButton}
          {count > 0 && <span className="ml-1 text-sm">({count})</span>}
        </div>
      }
    </Link>
  )
}

import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, to }) => {
	return (
		<Link
			to={to}
			className="flex items-center justify-center h-7 w-24 rounded-sm text-light-text bg-white shadow-sm font-semibold text-xs">
			{children}
		</Link>
	)
}

export default Button

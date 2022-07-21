import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon as darkMoon } from "@fortawesome/free-solid-svg-icons"
import { faMoon as lightMoon } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"

const Title = ({ children }) => {
	return (
		<header className="flex items-center justify-between h-20 px-[clamp(1rem,6.01vw-0.41rem,5rem)] bg-white text-light-text">
			<Link to="/countries">
				<h1 className="text-[clamp(0.88rem,0.94vw+0.65rem,1.5rem)] font-extrabold">
					{children}
				</h1>
			</Link>
			<div className="flex items-stretch gap-2">
				<FontAwesomeIcon
					icon={lightMoon}
					className="h-[clamp(1rem,0.56vw+0.87rem,1.38rem)]"
				/>
				<p className="text-[clamp(0.75rem,0.38vw+0.66rem,1rem)] font-semibold">
					Dark Mode
				</p>
			</div>
		</header>
	)
}

export default Title

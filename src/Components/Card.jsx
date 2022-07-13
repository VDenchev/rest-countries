import React from "react"
import { Link } from "react-router-dom"

const Card = ({ flag, name, population, region, capital }) => {
	return (
		<section className="bg-white shadow-sm w-[264px] h-[336px] rounded-md overflow-hidden">
			<Link to={`./${name}`}>
				<img src={flag} alt="" className="max-h-40 w-full shadow-sm" />
			</Link>
			<div className="p-6 text-light-text">
				<h2 className="font-extrabold text-lg pb-4">{name}</h2>
				<p className="text-sm font-semibold pb-2">
					Population: <span className="font-light">{population}</span>
				</p>
				<p className="text-sm font-semibold pb-2">
					Region: <span className="font-light">{region}</span>
				</p>
				<p className="text-sm font-semibold pb-2">
					Capital: <span className="font-light">{capital}</span>
				</p>
			</div>
		</section>
	)
}

export default Card

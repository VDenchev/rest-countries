import React from "react"

const Card = () => {
	return (
		<section className="bg-white shadow-sm w-[264px] h-[336px] rounded-md overflow-hidden">
			<img src="https://via.placeholder.com/264x160" alt="" />
			<div className="p-6 text-light-text">
				<h2 className="font-extrabold text-lg pb-4">Germany</h2>
				<p className="text-sm font-semibold pb-2">
					Population: <span className="font-light">81,770,900</span>
				</p>
				<p className="text-sm font-semibold pb-2">
					Region: <span className="font-light">Europe</span>
				</p>
				<p className="text-sm font-semibold pb-2">
					Capital: <span className="font-light">Berlin</span>
				</p>
			</div>
		</section>
	)
}

export default Card

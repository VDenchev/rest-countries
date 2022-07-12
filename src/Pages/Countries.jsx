import React from "react"
import Card from "../Components/Card.jsx"
import SearchBar from "../Components/SearchBar.jsx"

const Countries = () => {
	return (
		<>
			<div className="flex flex-col justify-between items-center sm:flex-row gap-10 mb-[clamp(2rem,1.5vw+1.65rem,3rem)]">
				<SearchBar />
			</div>
			<div className="flex flex-wrap justify-center sm:justify-start gap-10 md:gap-16">
				<Card />
				<Card />
				<Card />
			</div>
		</>
	)
}

export default Countries

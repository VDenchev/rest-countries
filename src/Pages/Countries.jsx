import React, { useEffect, useState } from "react"
import Card from "../Components/Card.jsx"
import SearchBar from "../Components/SearchBar.jsx"

const Countries = () => {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		const fetchCountries = async () => {
			const data = await fetch("https://restcountries.com/v3.1/all")
			const json = await data.json()
			setCountries(json)
			console.log(json)
		}
		fetchCountries().catch(console.error)
	}, [])

	const mapCountries = (countries) => {
		return countries.map((country) => (
			<Card
				key={country.name.common}
				flag={country.flags.png}
				name={country.name.common}
				population={country.population}
				region={country.region}
				capital={country.capital}
			/>
		))
	}

	const cards = mapCountries(countries)
	return (
		<>
			<div className="flex flex-col justify-between items-center sm:flex-row gap-10 mb-[clamp(2rem,1.5vw+1.65rem,3rem)]">
				<SearchBar />
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-5 md:gap-10 place-items-center">
				{cards}
			</div>
		</>
	)
}

export default Countries

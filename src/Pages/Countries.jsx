import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Card from "../Components/Card.jsx"
import SearchBar from "../Components/SearchBar.jsx"
import Spinner from "../Components/Spinner.jsx"
import { useDebounce } from "../Hooks/useDebounce.js"

const Countries = () => {
	const [countries, setCountries] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get("search"))
	let debounce = useDebounce(search, 500)
	useEffect(() => {
		setSearchParams(debounce ? { search: debounce } : {})
	}, [debounce])

	useEffect(() => {
		const fetchCountries = async () => {
			const data = await fetch(
				searchParams.get("search")
					? `https://restcountries.com/v3.1/name/${searchParams.get("search")}`
					: "https://restcountries.com/v3.1/all"
			)
			const json = await data.json()
			setCountries(json)
			setIsLoading(false)
			console.log(json)
		}
		fetchCountries().catch(console.error)
	}, [searchParams])

	const mapCountries = (countries) => {
		return countries.map((country) => (
			<Card
				key={country.name.common}
				flag={
					country.name.common === "Nepal"
						? country.flags.svg
						: country.flags.png
				}
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
				<SearchBar
					handleChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-5 md:gap-10 place-items-center">
				{isLoading ? <Spinner width={70} /> : cards}
			</div>
		</>
	)
}

export default Countries

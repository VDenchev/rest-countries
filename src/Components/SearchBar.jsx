import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
const SearchBar = ({ handleChange, value }) => {
	return (
		<div className="px-9 h-12 sm:h-14 flex w-full sm:w-[33.3vw] gap-6 items-center bg-white rounded-md shadow-sm">
			<FontAwesomeIcon icon={faMagnifyingGlass} className="text-light-input" />
			<input
				type="text"
				onChange={handleChange}
				value={value}
				name=""
				id=""
				className="text-xl font-semibold text-light-input bg-transparent text-[clamp(0.75rem,0.19vw+0.71rem,0.88rem)] h-full focus:outline-none w-full"
				placeholder="Search for a country... "
			/>
		</div>
	)
}

export default SearchBar

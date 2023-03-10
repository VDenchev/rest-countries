import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
const Back = ({ children, handleClick }) => {
	return (
		<button
			onClick={handleClick}
			className="flex gap-3 items-center justify-center w-[clamp(6.5rem,3vw+5.8rem,8.5rem)] p-2 rounded-sm sm:rounded-md text-light-text bg-white shadow-md font-semibold text-[clamp(0.88rem,0.19vw+0.83rem,1rem)]">
			<FontAwesomeIcon icon={faArrowLeftLong} />
			{children}
		</button>
	)
}

export default Back

import React from "react"

const Detail = ({ name, value }) => {
	return (
		<>
			<p className="mb-3 text-inherit font-semibold text-[clamp(0.88rem,0.19vw+0.83rem,1rem)]">
				{name}:{" "}
				<span className="text-inherit font-light text-[clamp(0.88rem,0.19vw+0.83rem,1rem)]">
					{value}
				</span>
			</p>
		</>
	)
}

export default Detail

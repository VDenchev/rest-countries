import React from "react"
import Back from "../Components/Back.jsx"
import Button from "../Components/Button.jsx"
import Detail from "../Components/Detail.jsx"

const Country = () => {
	return (
		<div className="pt-[clamp(1rem,1.5vw+0.65rem,2rem)]">
			<Back to="/">Back</Back>
			<div className="sm:flex sm:gap-[10%] sm:items-center mt-[clamp(4rem,1.5vw+3.65rem,5rem)]">
				<img
					src="https://via.placeholder.com/500"
					alt=""
					className="w-full sm:w-[40vw]"
				/>
				<div className="text-light-text mt-11 lg:flex-1">
					<h2 className="text-[clamp(1.38rem,0.94vw+1.15rem,2rem)] mb-6 font-extrabold">
						Belgium
					</h2>
					<div className="lg:flex lg:justify-between">
						<div className="mb-11">
							<Detail name="Native Name" value="Belgie"></Detail>
							<Detail name="Population" value="11,319,511"></Detail>
							<Detail name="Region" value="Europe"></Detail>
							<Detail name="Sub Region" value="Western Europe"></Detail>
							<Detail name="Capital" value="Brussels"></Detail>
						</div>
						<div>
							<Detail name="Top Level Domain" value=".be"></Detail>
							<Detail name="Currencies" value="Euro"></Detail>
							<Detail name="Languages" value="Dutch, French, German"></Detail>
						</div>
					</div>
					<div>
						<Detail
							name="Border Countries"
							value={
								<div className="flex flex-wrap lg:inline-flex mt-6 lg:ml-2 gap-3">
									<Button to="/">qedsd</Button>
									<Button to="/">qedsd</Button>
									<Button to="/">qedsd</Button>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Country

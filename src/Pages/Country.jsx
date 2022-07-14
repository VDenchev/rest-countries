import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Back from "../Components/Back.jsx"
import Button from "../Components/Button.jsx"
import Detail from "../Components/Detail.jsx"

const Country = () => {
	const [countryData, setCountryData] = useState()

	const params = useParams()
	useEffect(() => {
		const getCountryData = async () => {
			const data = await fetch(
				`https://restcountries.com/v3.1/name/${params.countryName}?fullText=true`
			)
			console.log(data)
			const json = await data.json()
			const obj = await json.at(0)
			setCountryData(obj)
		}
		getCountryData().catch(console.error)
	}, [])

	console.log(countryData)
	return (
		<div className="pt-[clamp(1rem,1.5vw+0.65rem,2rem)]">
			<Back to="/">Back</Back>
			<div className="sm:flex sm:gap-[10%] sm:items-center mt-[clamp(4rem,1.5vw+3.65rem,5rem)]">
				<img
					src={countryData?.flags?.svg}
					alt=""
					className="w-full sm:w-[40vw]"
				/>
				<div className="text-light-text mt-11 lg:flex-1">
					<h2 className="text-[clamp(1.38rem,0.94vw+1.15rem,2rem)] mb-6 font-extrabold">
						{countryData?.name?.common}
					</h2>
					<div className="lg:flex lg:justify-between">
						<div className="mb-11">
							<Detail
								name="Native Name"
								value={
									countryData &&
									Object.values(countryData?.name?.nativeName)
										.map((name) => name.common)
										.join(", ")
								}
							/>
							<Detail name="Population" value={countryData?.population} />
							<Detail name="Region" value={countryData?.region} />
							<Detail name="Sub Region" value={countryData?.subregion} />
							<Detail name="Capital" value={countryData?.capital} />
						</div>
						<div>
							<Detail
								name="Top Level Domain"
								value={countryData?.tld.join(", ")}
							/>
							<Detail
								name="Currencies"
								value={
									countryData &&
									Object.values(countryData?.currencies)
										.map((cur) => cur.name)
										.join(", ")
								}
							/>
							<Detail
								name="Languages"
								value={
									countryData &&
									Object.values(countryData?.languages).join(", ")
								}
							/>
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

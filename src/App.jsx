import React from "react"
import Title from "./Components/Title.jsx"
import Countries from "./Pages/Countries.jsx"

function App() {
	return (
		<div className="bg-light-bg min-h-screen max-h-fit w-full">
			<Title>Where in the world?</Title>
			<main className="px-[clamp(1rem,6.01vw-0.41rem,5rem)] py-[clamp(1.5rem,2.25vw+0.97rem,3rem)]">
				<Countries />
			</main>
		</div>
	)
}

export default App

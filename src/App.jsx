import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Countries from "./Pages/Countries.jsx"
import Country from "./Pages/Country.jsx"
import Home from "./Pages/Home.jsx"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="countries" element={<Home />}>
					<Route index element={<Countries />} />
					<Route path=":countryName" element={<Country />} />
				</Route>
				<Route path="/" element={<Navigate to="/countries" replace={true} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

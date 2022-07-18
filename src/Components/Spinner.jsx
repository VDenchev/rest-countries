import React from "react"

const Spinner = ({ width }) => {
	return (
		<div
			style={{ width: width, height: width }}
			className="flex items-center justify-center relative overflow-hidden">
			<div
				style={{ borderWidth: width / 8 }}
				className="mix-blend-multiply w-full h-full absolute rounded-[50%] border-transparent border-l-zinc-900 animate-[spin_1.8s_ease-in_infinite]"></div>
			<div
				style={{ borderWidth: width / 8 }}
				className="mix-blend-multiply w-full h-full absolute rounded-[50%] border-transparent border-t-zinc-700 animate-[spin_1.5s_ease-in-out_infinite]"></div>
			<div
				style={{ borderWidth: width / 8 }}
				className="mix-blend-multiply w-full h-full absolute rounded-[50%] border-transparent border-r-zinc-400 animate-[spin_2.2s_ease-out_infinite]"></div>
		</div>
	)
}
export default Spinner

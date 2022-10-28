import React from "react"

const Sell = () => {
	return (
		<div className="bg-white w-3/4 m-auto p-2 min-h-screen">
			<h2 className="text-center text-3xl mt-10">Sell Product </h2>

			<div className="flex flex-col w-3/4 m-auto p-5 space-y-10 rounded-sm">
				<input
					type="text"
					className="p-6 bg-slate-100 focus:border-none focus:outline-none"
					placeholder="Enter product name"
				/>
				<select className="p-6 bg-slate-100 focus:border-none focus:outline-none selection:w-[100px]">
					<option value="" disabled selected>
						Select product category
					</option>
					<option value="volvo">volvo</option>
					<option value="volvo">kilimal</option>
					<option value="volvo">ok</option>
				</select>
				<div className="flex flex-row justify-between space-x-2">
					<div className="w-1/2">
						<select className="p-6 w-full bg-slate-100 focus:border-none focus:outline-none">
							<option value="" disabled selected>
								Select county
							</option>
							<option value="volvo">volvo</option>
							<option value="volvo">kilimal</option>
							<option value="volvo">ok</option>
						</select>
					</div>
					<div className="w-1/2 ">
						<select className="p-6 w-full bg-slate-100 focus:border-none focus:outline-none">
							<option value="" disabled selected>
								Select City
							</option>
							<option value="volvo">volvo</option>
							<option value="volvo">kilimal</option>
							<option value="volvo">ok</option>
						</select>
					</div>
				</div>
				<div>
					<label className="block">
						<span className="sr-only">Choose File</span>
						<input
							type="file"
							// multiple={true}
							className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
						/>
					</label>
				</div>
				<button className="bg-green-400 p-5 text-white">Submit</button>
			</div>
		</div>
	)
}

export default Sell

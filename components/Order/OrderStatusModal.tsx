import React from "react"

const OrderStatusModal = () => {
	const toggleButton = () => {}
	return (
		<div className="z-30 w-full h-full fixed bg-modal backdrop-blur-sm">
			<div className=" w-[1000px] h-[500px] mx-56 rounded-sm bg-white p-10">
				<select
					className="h-16 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 
                bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
      m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-mono"
					aria-label="Default select example"
				>
					<option selected>Status</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<button className="bg-green-400 w-full p-3 text-white">
					Change
				</button>
			</div>
		</div>
	)
}

export default OrderStatusModal

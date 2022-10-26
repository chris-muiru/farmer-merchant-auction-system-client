import React from "react"

const SendReview = () => {
	return (
		<div className=" mb-6 rounded-xl ">
			<div className="flex flex-col space-y-10">
				<textarea
					className="bg-slate-200 w-full h-[150px] placeholder:text-4xl placeholder:text-center focus:outline-none resize-none p-2 opacity-70"
					placeholder="enter your review here ..."
				></textarea>
				<button className="bg-green-700 m-10 text-white p-4 rounded-sm">
					Submit
				</button>
			</div>
		</div>
	)
}

export default SendReview

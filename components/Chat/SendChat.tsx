import React from "react"

const SendChat = () => {
	return (
		<div className="mt-20 rounded-xl">
			<div className="flex flex-col space-y-10 bottom-0 ">
				<textarea
					className="bg-slate-100 w-full h-[150px] placeholder:text-4xl placeholder:text-center focus:outline-none resize-none p-2 opacity-70"
					placeholder="enter your message here ..."
				></textarea>
				<button className="bg-green-700 text-white p-4 rounded-sm">
					Send
				</button>
			</div>
		</div>
	)
}

export default SendChat

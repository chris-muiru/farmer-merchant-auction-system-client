import React, { FC } from "react"
interface MessageProps {
	user: String
	message: String
	rating: JSX.Element[]
}

const Message: FC<MessageProps> = ({ user, message, rating }) => {
	return (
		<div className="bg-slate-200 space-y-5 rounded-md p-3 m-3">
			<div className="text-xl flex flex-row justify-between">
				{user}
				<div>{rating}</div>
			</div>
			<div className="">{message}</div>
		</div>
	)
}

export default Message

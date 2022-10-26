import React, { FC } from "react"
interface ChatMessageProps {
	bg: String
	side: "left" | "right"
}

const ChatMessage: FC<ChatMessageProps> = ({ bg, side }) => {
	return (
		<div
			className={`${bg} rounded-md p-3 m-3 w-1/2 ${
				side == "left" ? "self-start" : "self-end"
			}`}
		>
			<div>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, nemo
				facere amet distinctio enim fugit assumenda, aliquam sit id
				voluptate fugiat? Consequuntur a fugiat saepe laboriosam deleniti
				eum? Blanditiis, voluptates.
			</div>
		</div>
	)
}

export default ChatMessage

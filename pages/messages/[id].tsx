import ChatMessage from "components/Chat/ChatMessage"
import SendChat from "components/Chat/SendChat"
import React from "react"

const MessageDash = () => {
	return (
		<div className="w-[90%] bg-white m-auto rounded-md p-3 space-y-2 relative">
			<div className="">
				<p className="text-xl text-center ">Chats</p>
				<hr />
				<div className="flex flex-col">
					<ChatMessage side="left" bg="bg-slate-200" />
					<ChatMessage side="right" bg="bg-green-400" />
					<ChatMessage side="left" bg="bg-slate-200" />
					<ChatMessage side="right" bg="bg-green-400" />
				</div>
				<SendChat />
			</div>
		</div>
	)
}

export default MessageDash

import User from "components/Chat/User"
import React from "react"

const Chat = () => {
	return (
		<div className="w-[90%] bg-white m-auto rounded-md p-3 space-y-2">
			<div className="">
				<p className="text-xl text-center ">Chats</p>
				<hr />
				<User />
				<User />
				<User />
			</div>
		</div>
	)
}

export default Chat

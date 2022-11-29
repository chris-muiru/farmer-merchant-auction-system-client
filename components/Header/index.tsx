import { useAuthContext } from "context/AuthContextProvider"
import React from "react"
import { MdLogout } from "react-icons/md"

const Header = () => {
	const { logOut } = useAuthContext()
	return (
		<div className="m-auto box-border   min-h-[157px] flex justify-center items-center mb-10 w-full relative">
			<h2 className="text-3xl">Kilimo Mash</h2>
			<button
				className="hover:text-green-500 text-2xl absolute right-[200px] bottom-15 border-4 p-1 rounded-md w-20 flex justify-center items-center"
				onClick={logOut}
			>
				<MdLogout />
			</button>
		</div>
	)
}

export default Header

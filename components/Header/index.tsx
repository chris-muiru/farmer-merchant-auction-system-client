import { useAuthContext } from "context/AuthContextProvider"
import React from "react"
import { MdLogout } from "react-icons/md"

const Header = () => {
	const { logOut } = useAuthContext()
	return (
		<div className="m-auto text-5xl box-border min-h-[157px] flex justify-center items-center mb-10 w-3/4 relative">
			<h2 className="">Kilimo Mash</h2>
			<button className="hover:text-green-500" onClick={logOut}>
				<MdLogout className="absolute right-20 top-12" />
			</button>
		</div>
	)
}

export default Header

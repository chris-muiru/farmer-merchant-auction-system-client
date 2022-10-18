import React, { FC } from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
interface Iprop {
	children: JSX.Element
}
const Layout: FC<Iprop> = ({ children }) => {
	return (
		<div className="flex flex-row w-full">
			<NavBar />
			<div className="w-full">{children}</div>
		</div>
	)
}

export default Layout

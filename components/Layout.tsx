import React, { FC } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
interface Iprop {
	children: JSX.Element
}
const Layout: FC<Iprop> = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	)
}

export default Layout

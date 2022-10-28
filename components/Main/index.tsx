import React from "react"
import CreateProduct from "../NavBar/CreateProduct"
import Product from "./Product"

const Main = () => {
	return (
		<div className="min-h-screen flex flex-col w-[90%] m-auto p-10 space-y-3">
			<Product />
			<Product />
			<Product />
		</div>
	)
}

export default Main

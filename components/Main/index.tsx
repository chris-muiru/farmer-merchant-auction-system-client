import ProductGroup from "components/Product/ProductGroup"
import React from "react"
import Product from "../Product/Product"

const Main = () => {
	return (
		<div className="min-h-screen flex flex-col w-[90%] m-auto p-10 space-y-3">
			<h2 className="text-2xl p-2">{"My products"}</h2>
			<ProductGroup />
			{/* <Product /> */}
			{/* <Product /> */}
		</div>
	)
}

export default Main

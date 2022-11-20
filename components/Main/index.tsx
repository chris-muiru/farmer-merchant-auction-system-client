import ProductGroup from "components/Product/ProductGroup"
import { useAuthContext } from "context/AuthContextProvider"
import React from "react"
import Product from "../Product/Product"

const Main = () => {
	const { role } = useAuthContext()
	return (
		<div className="min-h-screen flex flex-col w-[90%] m-auto p-10 space-y-3">
			{role == "merchant" && <h2 className="text-2xl p-2">{"Products"}</h2>}
			{role == "farmer" && <h2 className="text-2xl p-2">{"My Products"}</h2>}
			<ProductGroup />
		</div>
	)
}

export default Main

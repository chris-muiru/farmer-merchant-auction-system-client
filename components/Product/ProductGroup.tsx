import React, { useEffect, useState } from "react"
import { useAuthContext } from "context/AuthContextProvider"
import { LOCALHOST } from "components/Urls"
import Product from "./Product"
interface productData {
	product_id: number
	product_name: string
	product_price: number
	product_location: string
	product_date: string
	product_description: string
	product_farmer_name: string
	product_created_at: string
	product_product_file_data: { product_file_image: string }
}
const ProductGroup = () => {
	const { getAuthToken, role} = useAuthContext()
	const [products, setProducts] = useState((): productData[] | null => {
		return null
	})
	const productUrl = `${LOCALHOST}/products/`
	const fetchAllProducts = async () => {
		let response = await fetch(productUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let dataJson = await response.json()
		setProducts(dataJson)
	}
	const fetchFarmerSpecificProducts = async () => {
		const productUrl = `${LOCALHOST}/products/farmer/`
		const response = await fetch(productUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		const data = await response.json()
		setProducts(data)
	}
	useEffect(() => {
		if (role == "farmer") {
			fetchFarmerSpecificProducts()
		} else if (role == "merchant") {
			fetchAllProducts()
		}
	}, [role])
	return (
		<>
			{products &&
				products.map(
					({
						product_id,
						product_price,
						product_name,
						product_location,
						product_date,
						product_farmer_name,
						product_created_at,
						product_description,
						product_product_file_data: { product_file_image },
					}: {
						product_id: number
						product_name: string
						product_price: number
						product_location: string
						product_date: string
						product_description: string
						product_farmer_name: string
						product_created_at: string
						product_product_file_data: { product_file_image: string }
					}) => {
						return (
							<Product
								key={product_id}
								product_id={product_id}
								product_name={product_name}
								product_price={product_price}
								product_location={product_location}
								product_farmer_name={product_farmer_name}
								product_description={product_description}
								product_file_image={product_file_image}
								product_created_at={product_created_at}
							/>
						)
					}
				)}
		</>
	)
}

export default ProductGroup

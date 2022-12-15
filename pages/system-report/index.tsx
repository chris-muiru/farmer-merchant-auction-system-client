import React, { useEffect, useState } from "react"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import { LOCALHOST } from "components/Urls"
import { useAuthContext } from "context/AuthContextProvider"
// TODO: view system report on the page
const SystemReport = () => {
	const { getAuthToken } = useAuthContext()
	const [orders, setOrders] = useState<
		{
			order_name: string
			order_merchant_name: string
			order_merchant_phone: string
			order_expiration_date: string
			order_creation_date: string
			order_status: string
			order_total_price: number
			order_price: number
			order_quantity: number
			order_id: number
		}[]
	>()
	const fetchOrders = async () => {
		const orderUrl = `${LOCALHOST}/orders/`
		let response = await fetch(orderUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let dataJson = await response.json()
		setOrders(dataJson)
	}
	const tableBody = () => {
		if (orders) {
			const body = orders.map(
				({
					order_name,
					order_merchant_name,
					order_merchant_phone,
					order_expiration_date,
					order_creation_date,
					order_status,
					order_total_price,
					order_price,
					order_quantity,
					order_id,
				}: {
					order_name: string
					order_merchant_name: string
					order_merchant_phone: string
					order_expiration_date: string
					order_creation_date: string
					order_status: string
					order_total_price: number
					order_price: number
					order_quantity: number
					order_id: number
				}) => [
					order_id,
					order_creation_date,
					order_merchant_name,
					order_merchant_phone,
					order_name,
					order_price,
					order_quantity,
					order_expiration_date,
					order_status,
					order_total_price,
				]
			)
			return body
		}
	}
	console.log(tableBody())

	const createSystemReport = () => {
		const doc = new jsPDF({
			orientation: "landscape",
		})
		const width = doc.internal.pageSize.getWidth()
		doc.text("System Report", width / 2, 10, { align: "center" })
		doc.text("Orders", width / 2, 20, { align: "center" })
		autoTable(doc, {
			theme: "striped",
			margin: { top: 25 },
			head: [
				[
					"ref",
					"created",
					"merchant",
					"phone",
					"product",
					"price",
					"quantity",
					"expires",
					"status",
					"total price",
				],
			],
			body: tableBody(),
		})
		doc.save("System Report")
	}
	// createSystemReport()
	useEffect(() => {
		fetchOrders()
	}, [])
	return (
		<div className="bg-green-500 w-[200px] p-4 text-white m-auto rounded-sm">
			<button onClick={createSystemReport}>Print System report</button>
		</div>
	)
}

export default SystemReport
function getAuthToken() {
	throw new Error("Function not implemented.")
}

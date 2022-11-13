import { LOCALHOST } from "components/Urls"
import { useAuthContext } from "context/AuthContextProvider"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { MdOutlinePending } from "react-icons/md"
import { TiTick } from "react-icons/ti"
const orderUrl = `${LOCALHOST}/orders/`

const Order = () => {
	const { getAuthToken } = useAuthContext()
	const [orders, setOrders]: any = useState()
	const fetchOrders = async () => {
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
	const resolveStatus = (status: string): JSX.Element => {
		if (status == "declined") {
			return (
				<>
					<AiOutlineExclamationCircle className="inline mr-1" />
					declined
				</>
			)
		} else if (status == "success") {
			return (
				<>
					<TiTick className="inline" />
					success
				</>
			)
		} else if (status == "pending") {
			return (
				<>
					<MdOutlinePending className="inline" />
					pending
				</>
			)
		}
		return <></>
	}
	useEffect(() => {
		fetchOrders()
	}, [])
	return (
		<div className="w-[96%] m-auto  p-5 rounded-sm border min-h-screen">
			<table className="w-full bg-white">
				<thead className="border">
					<tr>
						<th>Ref</th>
						<th>Created</th>
						<th>Farmer</th>
						<th>Phone</th>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Expires</th>
						<th>Status</th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{orders &&
						orders.map(
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
							}) => {
								return (
									<tr id={`tr-${order_status}`} className="">
										<td className="">{order_id}</td>
										<td>{order_creation_date}</td>
										<td>{order_merchant_name}</td>
										<td>{order_merchant_phone}</td>
										<td>{order_name}</td>
										<td>{order_price}</td>
										<td>{order_quantity}</td>
										<td>{order_expiration_date}</td>
										<td id={order_status} className="">
											{resolveStatus(order_status)}
										</td>
										<td>{order_total_price}</td>
									</tr>
								)
							}
						)}
				</tbody>
			</table>
		</div>
	)
}

export default Order

import OrderStatusModal from "components/Order/OrderStatusModal"
import { LOCALHOST } from "components/Urls"
import { useAuthContext } from "context/AuthContextProvider"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { BsPencilSquare } from "react-icons/bs"
import { MdOutlinePending } from "react-icons/md"
import { TiTick } from "react-icons/ti"
import SwalStatus from "utils/swalStatus"
import { MdClose } from "react-icons/md"
const Order = () => {
	const { getAuthToken, role } = useAuthContext()
	const [orders, setOrders]: any = useState()
	const [selectionValue, setSelectionValue] = useState<string>()
	const [orderId, setOrderId] = useState<number>()
	const modalRef = useRef<HTMLDivElement>(null)
	const fetchMerchantSentOrders = async () => {
		const orderUrl = `${LOCALHOST}/orders/merchant/`
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
	const fetchReceivedFarmerOrders = async () => {
		const orderUrl = `${LOCALHOST}/orders/farmer/`
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
	const toggleModal = () => {
		if (modalRef.current) {
			if (modalRef.current.style.display == "block") {
				modalRef.current.style.display = "none"
			} else {
				modalRef.current.style.display = "block"
				console.log("ok")
			}
		}
	}
	const getSelectionValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const status = event.target.value
		setSelectionValue(status)
	}
	const getOrderId = (orderId: number) => {
		toggleModal()
		setOrderId(orderId)
	}
	const postSelectionValue = async () => {
		toggleModal()
		const orderUpdateUrl = `${LOCALHOST}/orders/${orderId}/farmer/update`
		const response = await fetch(orderUpdateUrl, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			body: JSON.stringify({ status: selectionValue }),
		})
		const status = response.status
		SwalStatus(status, "Order updated successfully")
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
		if (role == "merchant") {
			fetchMerchantSentOrders()
		} else if (role == "farmer") {
			fetchReceivedFarmerOrders()
		}
	}, [role])
	return (
		<div className="w-[96%] m-auto  p-5 rounded-sm border min-h-screen relative">
			<div
				ref={modalRef}
				className="z-30 hidden w-full h-full absolute bg-modal backdrop-blur-sm"
			>
				<div className=" w-[1000px] h-[500px] mx-56 rounded-sm bg-white p-10 relative">
					<button
						className="absolute right-7 top-3 hover:text-green-400"
						onClick={toggleModal}
					>
						<MdClose className="text-4xl" />
					</button>

					<div className="space-y-10 mt-5">
						<select
							name="status"
							onChange={getSelectionValue}
							className="h-16 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 
                bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
      m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-mono"
							aria-label="Default select example"
						>
							<option selected>Status</option>
							<option value="success">Appove</option>
							<option value="declined">Reject</option>
						</select>
						<button
							className="bg-green-400 w-full p-3 text-white"
							onClick={postSelectionValue}
						>
							Change
						</button>
					</div>
				</div>
			</div>
			<table className="w-full bg-white z-10">
				<thead className="border">
					<tr>
						{role == "farmer" && (
							<th>
								Change <br />
								order status
							</th>
						)}

						<th>Ref</th>
						<th>Created</th>
						<th>Merchant</th>
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
								order_product_id,
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
								order_product_id: number
								order_price: number
								order_quantity: number
								order_id: number
							}) => {
								return (
									<tr
										id={`tr-${order_status}`}
										className=""
										key={order_id}
									>
										{role == "farmer" && (
											<td
												onClick={() => {
													getOrderId(order_id)
												}}
											>
												<BsPencilSquare className="text-sm inline hover:text-green-700 text-green-500" />
											</td>
										)}
										<Link href={`product/${order_product_id}`}>
											<a>
												<td className="underline">{order_id}</td>
											</a>
										</Link>
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

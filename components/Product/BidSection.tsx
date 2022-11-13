import React, { FC, useEffect, useState } from "react"
import Image from "next/image"
import { HiChat } from "react-icons/hi"
import starConverter from "utils/starConverter"
import isOnline from "utils/isOnline"
import Link from "next/link"
import { BiBeenHere } from "react-icons/bi"
import { useAuthContext } from "../../context/AuthContextProvider"
import { LOCALHOST } from "../Urls"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import { useRouter } from "next/router"
import swalStatus from "utils/swalStatus"
import { AiFillStar } from "react-icons/ai"
import Rating from "react-rating"
interface bidSectionProps {
	farmer_name: string
	product_price: number
	product_id: number
}
const BidSection: FC<bidSectionProps> = ({
	farmer_name,
	product_price,
	product_id,
}) => {
	const MySwal = withReactContent(Swal)
	const router = useRouter()
	const { getAuthToken } = useAuthContext()
	const [farmerRating, setFarmerRating] = useState({ rating: "" })
	const [quantity, setQuantity] = useState(1)
	const [newOrder, setNewOrder] = useState({
		order_quantity: 1,
		order_price: 0,
		order_product_id: 1,
	})
	const ratingUrl = `${LOCALHOST}/reviews/rating/`
	const orderUrl = `${LOCALHOST}/orders/`

	const fetchFarmerRating = async () => {
		let response = await fetch(ratingUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let dataJson = await response.json()
		setFarmerRating(dataJson)
	}
	let { rating } = farmerRating
	const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
		const quantity = parseInt(event.target.value)
		setQuantity(quantity)
	}

	const createNewOrder = async () => {
		let response = await fetch(orderUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			body: JSON.stringify(newOrder),
		})
		const status = response.status
		if (status == 200) {
			MySwal.fire({
				title: <strong>success!!!</strong>,
				html: <i>Order created</i>,
				icon: "success",
			})
		} else {
			MySwal.fire({
				title: <strong>error!!!</strong>,
				html: <i>an error occurred</i>,
				icon: "error",
			})
		}
		setTimeout(() => {
			// @ts-ignore
			window.location = "/"
		}, 3000)
	}
	const createNewOrderHandler = () => {
		createNewOrder()
	}
	useEffect(() => {
		setNewOrder({
			order_quantity: quantity,
			order_product_id: product_id,
			order_price: product_price,
		})
		fetchFarmerRating()
	}, [quantity])
	return (
		<div className="flex flex-col w-[500px]  sticky top-20 h-[500px] bg-white p-4 rounded-xl space-y-7">
			<button
				onClick={createNewOrderHandler}
				className="bg-green-600 text-white p-4 rounded-md self-center w-full hover:bg-green-500"
			>
				<div className=" w-1/2 m-auto">
					<BiBeenHere className="inline text-xl" />
					<span>bid</span>
				</div>
			</button>
			<table id="quantity-table" className="w-full">
				<tbody>
					<tr>
						<td></td>
						<td className="w-[700px]">
							<input
								onChange={handleQuantity}
								type="number"
								className=" outline-none w-full h-full text-3xl box-border"
								placeholder="Quantity"
								name={"quantity"}
							/>
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			{/* bid section */}
			<div className="">
				<div className="text-3xl p-4 rounded-sm">
					<p className="mt-2">Ksh {product_price}</p>
				</div>
				<div className="relative ml-4">
					<Image
						className="rounded-full"
						width={60}
						height={60}
						alt="add fruits"
						src="/fruits.jpg"
					/>
					<div className="inline ml-4 top-2 text-xl absolute">
						<p className="capitalize">{farmer_name}</p>
						{/* @ts-ignore */}
						<Rating
							fullSymbol={
								<AiFillStar className="inline text-yellow-400" />
							}
							emptySymbol={<AiFillStar className="inline" />}
							quiet={true}
							initialRating={parseInt(rating)}
						/>
					</div>
				</div>
				<div className="bg-green-500 mt-4 flex justify-center items-center text-white m-auto rounded-md h-[40px] w-full">
					0746646464
				</div>
				{/* TODO: message feature to be added in future */}
				{/* <Link href="/messages/1">
					<button className="border border-green-500 mt-4 flex relative justify-center items-center m-auto rounded-md h-[40px] w-full">
						<span className="text-xl font-medium">Chat</span>
						<HiChat className="text-green-600 text-2xl absolute top-[4px] right-[116px]" />
					</button>
				</Link> */}
			</div>
		</div>
	)
}

export default BidSection

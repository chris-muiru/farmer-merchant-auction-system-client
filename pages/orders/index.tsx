import Link from "next/link"
import React from "react"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { MdOutlinePending } from "react-icons/md"
import { TiTick } from "react-icons/ti"
const Order = () => {
	return (
		<div className="w-[96%] m-auto  p-5 rounded-sm border min-h-screen">
			<table className="w-full bg-white">
				<thead className="border">
					<tr>
						<th>
							<div className="inline">Ref</div>
						</th>
						<th>Created</th>
						<th>Farmer</th>
						<th>Phone</th>
						<th>Product</th>
						<th>Quantity</th>
						<th>Expires</th>
						<th>Status</th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody className="text-center">
					<tr className="">
						<td className="">1110</td>
						<td>22/10/22</td>
						<td>James Kamau N</td>
						<td>07555888</td>
						<Link href="/orders">
							<td className="text-blue-800 hover:underline hover:decoration-blue-800 hover:cursor-pointer">
								Two Hp computers
							</td>
						</Link>
						<td>2</td>
						<td>24/6/22</td>
						<td id="declined" className="">
							<AiOutlineExclamationCircle className="inline mr-1" />
							declined
						</td>
						<td>100000</td>
					</tr>
					<tr className="bg-white">
						<td className="">1110</td>
						<td>22/10/22</td>
						<td>James Kamau N</td>
						<td>07555888</td>
						<td>Two Hp computers</td>
						<td>2</td>
						<td>24/6/22</td>
						<td id="pending" className="text-yellow-500 mr-1">
							<MdOutlinePending className="inline" />
							pending
						</td>
						<td>100000</td>
					</tr>
					<tr className=" bg-green-100">
						<td className="">1110</td>
						<td>22/10/22</td>
						<td>James Kamau N</td>
						<td>07555888</td>
						<td>Two Hp computers</td>
						<td>2</td>
						<td>24/6/22</td>
						<td id="pending" className="text-green-500 mr-1">
							<TiTick className="inline" />
							success
						</td>
						<td>100000</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Order

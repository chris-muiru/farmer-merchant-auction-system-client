import React from "react"
const Order = () => {
	return (
		<div className="w-[96%] m-auto bg-white">
			<table className="w-full">
				<thead className="border">
					<tr>
						<th>
							<div className="inline">Ref</div>
						</th>
						<th>Created</th>
						<th>Farmer</th>
						<th>Phone</th>
						<th>Product</th>
						<th>Expires</th>
						<th>Status</th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody className="text-center">
					<tr className="bg-red-200">
						<td className="">111</td>
						<td>22</td>
						<td>hello</td>
						<td>dehf</td>
						<td>fefe</td>
						<td>feefe</td>
						<td id="done">dd</td>
						<td>fefefe</td>
					</tr>
					<tr>
						<td className="">111</td>
						<td>22</td>
						<td>hello</td>
						<td>dehf</td>
						<td>fefe</td>
						<td>feefe</td>
						<td id="done">ddd</td>
						<td>fefefe</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Order

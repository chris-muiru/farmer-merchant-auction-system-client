import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"
import { useAuthContext } from "context/AuthContextProvider"

const Product: FC<ProductProps> = ({
	product_name,
	product_price,
	product_location,
	product_id,
	product_description,
	product_farmer_name,
	product_file_image,
	product_created_at,
}) => {
	let { getAuthToken } = useAuthContext()
	return (
		<Link href={`/product/${product_id}`}>
			<div className="flex flex-row space-x-5 rounded-xl border bg-white p-4  min-h-[300px] hover:cursor-pointer">
				<div className="w-60 min-h-[200px] bg-slate-500 my-auto relative rounded-lg">
					{product_file_image && (
						<Image
							loader={() => product_file_image}
							alt="add fruits"
							src={product_file_image}
							layout="fill"
							objectFit="cover"
							className="rounded-3xl"
						/>
					)}
				</div>
				<div className="w-full relative ">
					<h2 className="text-2xl font-bold my-3 capitalize">
						{product_name}
						<p className="float-right text-xl text-green-600">
							{product_created_at}
						</p>
					</h2>
					<p className="w-[85%] leading-loose text-justify">
						{product_description.toLowerCase().substring(0, 470)}...
					</p>
					<p className="text-green-600 font-serif font-bold absolute bottom-0 text-xl">
						ksh {product_price}
					</p>
					<p className="text-green-600 absolute bottom-1 right-0 font-bold font-serif text-xl">
						{product_location.toLowerCase()}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default Product

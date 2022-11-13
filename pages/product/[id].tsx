import BidSection from "components/Product/BidSection"
import SelectionStars from "components/Reviews/SelectionStars"
import SendReview from "components/Reviews/SendReview"
import { LOCALHOST } from "components/Urls"
import Image from "next/image"
import React, { FC, useEffect, useState } from "react"
import { MdDelete } from "react-icons/md"
import { useAuthContext } from "context/AuthContextProvider"
import { useRouter } from "next/router"
import Rating from "react-rating"
import { AiFillStar } from "react-icons/ai"

const ProductDetail: FC<ProductProps> = () => {
	const { getAuthToken } = useAuthContext()
	const router = useRouter()
	const { id } = router.query
	const productUrl = `${LOCALHOST}/products/${id}`
	const [product, setProduct]: any = useState()
	const [rating, setRating] = useState(0)
	const fetchProductById = async () => {
		let response = await fetch(productUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let dataJson: JSON = await response.json()
		setProduct([dataJson])
	}

	useEffect(() => {
		if (id) {
			fetchProductById()
		}
	}, [id])
	return (
		<div className="flex flex-row w-4/5 m-auto space-x-5 relative">
			{product &&
				product.map(
					({
						product_id,
						product_price,
						product_name,
						product_location,
						product_date,
						product_farmer_name,
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
						product_product_file_data: { product_file_image: string }
					}) => {
						return (
							<>
								<div className="flex flex-col w-full m-auto space-y-4 bg-white rounded-lg relative min-h-auto">
									<div className="relative h-20 mt-3">
										<h2 className="text-green-500 text-2xl text-center mt-4">
											{product_name}
											<MdDelete className="text-2xl inline absolute right-3 top-4 " />
										</h2>
									</div>

									<div className="m-auto flex flex-row">
										<div className="h-[500px] rounded-lg w-[600px] relative">
											<Image
												loader={() => product_file_image}
												alt="add fruits"
												src={product_file_image}
												layout="fill"
												className="rounded-3xl"
											/>
										</div>
									</div>
									<div className="p-20">
										<h2 className="text-green-500 text-2xl text-center m-3">
											Description
										</h2>
										<div className=" m-2 leading-loose text-justify">
											{product_description}
										</div>
										<h2 className="text-green-500 text-2xl text-center m-3">
											Review
										</h2>
										<div className="w-3/4 m-auto  text-4xl mb-5 gap-4 flex justify-center">
											{/* @ts-ignore */}
											<Rating
												className="gap-4"
												emptySymbol={
													<AiFillStar className="inline" />
												}
												fullSymbol={
													<AiFillStar className="inline text-yellow-300" />
												}
												onClick={(selectedRating) => {
													setRating(selectedRating)
												}}
											/>
										</div>

										<SendReview
											rating={rating}
											review_product_id={product_id}
										/>
									</div>
								</div>
								<BidSection
									product_price={product_price}
									farmer_name={product_farmer_name}
									product_id={product_id}
								/>
							</>
						)
					}
				)}
		</div>
	)
}

export default ProductDetail

import React, { useEffect, useState } from "react"
import ReviewMessage from "components/Reviews/ReviewMessage"
import { AiFillStar } from "react-icons/ai"
import SendReview from "components/Reviews/SendReview"
import { LOCALHOST } from "components/Urls"
import { useAuthContext } from "context/AuthContextProvider"
const Reviews = () => {
	const reviewURL = `${LOCALHOST}/reviews`
	const { getAuthToken, role } = useAuthContext()
	const [rating, setRating]: any = useState()
	const fetchRatings = async () => {
		const response = await fetch(reviewURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		setRating(await response.json())
	}
	const fetchFarmerReceivedRatings = async () => {
		const reviewURL = `${LOCALHOST}/reviews/farmer/`
		const response = await fetch(reviewURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		setRating(await response.json())
	}
	useEffect(() => {
		if (role == "farmer") {
			fetchFarmerReceivedRatings()
		} else if (role == "merchant") {
			fetchRatings()
		}
	}, [role])
	return (
		<div className="w-[90%] bg-white m-auto rounded-md p-3 space-y-2">
			<div className="">
				<p className="text-xl text-center ">Reviews</p>
				<hr />
			</div>
			{rating &&
				rating.map(
					({
						review_message,
						review_sender,
						review_receiver,
						review_rating,
						review_product_id,
						review_created_at,
					}: {
						review_message: string
						review_sender: string
						review_receiver: string
						review_rating: number
						review_product_id: number
						review_created_at: string
					}) => {
						return (
							<ReviewMessage
								user={review_sender}
								rating={review_rating}
								message={review_message}
								product_id={review_product_id}
								review_created_at={review_created_at}
							/>
						)
					}
				)}
		</div>
	)
}

export default Reviews

import React, { useEffect, useState } from "react"
import starConverter from "utils/starConverter"
import { useAuthContext } from "context/AuthContextProvider"
import useRating from "components/hooks/useRating"
import { LOCALHOST } from "components/Urls"
import Rating from "react-rating"
import { AiFillStar } from "react-icons/ai"
const ratingUrl = `${LOCALHOST}/reviews/rating/`
interface Iprop {
	count?: number
}

const Reputation = () => {
	const { getAuthToken, user } = useAuthContext()
	const [farmerRating, setFarmerRating]: any = useState()
	const fetchFarmerRating = async () => {
		let response = await fetch(ratingUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let { rating } = await response.json()
		setFarmerRating(rating)
	}
	useEffect(() => {
		fetchFarmerRating()
	}, [])
	return (
		<div className="mt-10">
			<span className="text-yellow-400 font-bold">{user}</span>
			&lt;&lt;&nbsp;
			{/* @ts-ignore */}
			<Rating
				fullSymbol={<AiFillStar className="inline text-yellow-400" />}
				emptySymbol={<AiFillStar className="inline" />}
				quiet={true}
				initialRating={parseInt(farmerRating)}
			/>
			&nbsp;&gt;&gt;
		</div>
	)
}

export default Reputation

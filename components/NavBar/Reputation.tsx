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
	const { getAuthToken, getUser } = useAuthContext()
	const [farmerRating, setFarmerRating]: any = useState()
	const [user, setUser] = useState<string | null>()

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
		setUser(getUser())
	}, [])
	return (
		<div className="mt-10 space-x-2">
			<span className="text-yellow-400 font-bold capitalize">{user}</span>
			{/* @ts-ignore */}
			<Rating
				fullSymbol={<AiFillStar className="inline text-yellow-400" />}
				emptySymbol={<AiFillStar className="inline" />}
				quiet={true}
				initialRating={parseInt(farmerRating)}
				readonly={true}
			/>
		</div>
	)
}

export default Reputation

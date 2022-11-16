import React, { FC } from "react"
import SwalStatus from "utils/swalStatus"
import { useAuthContext } from "../../context/AuthContextProvider"
import { LOCALHOST } from "../Urls"
interface reviewProp {
	rating: number
	review_product_id: number
}

const SendReview: FC<reviewProp> = ({ rating, review_product_id }) => {
	const { getAuthToken } = useAuthContext()
	const ReviewUrl: string = `${LOCALHOST}/reviews/`
	const sendReview = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const { reviewMessage } = event.target as typeof event.target & {
			reviewMessage: { value: string }
		}
		const response = await fetch(ReviewUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			body: JSON.stringify({
				review_message: reviewMessage.value,
				review_rating: rating,
				review_product_id: review_product_id,
			}),
		})
		const data = await response.status
		{
			SwalStatus(data, "review created successfully")
		}
		console.log(data)
	}
	return (
		<form action="" method={"POST"} onSubmit={sendReview}>
			<div className=" mb-6 rounded-xl ">
				<div className="flex flex-col space-y-10">
					<textarea
						name={"reviewMessage"}
						className="bg-slate-200 w-full h-[150px] placeholder:text-4xl placeholder:text-center focus:outline-none resize-none p-2 opacity-70"
						placeholder="enter your review here ..."
					></textarea>
					<button
						className="bg-green-700 m-10 text-white p-4 rounded-sm"
						type={"submit"}
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	)
}

export default SendReview

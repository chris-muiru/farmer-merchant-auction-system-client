import Link from "next/link"
import React, { FC } from "react"
import { AiFillStar } from "react-icons/ai"
import Rating from "react-rating"
interface MessageProps {
	user: string
	message: string
	rating: number
	review_created_at: string
	product_id: number
}

const Message: FC<MessageProps> = ({
	user,
	message,
	rating,
	review_created_at,
	product_id,
}) => {
	return (
		<div className="bg-slate-200 space-y-5 rounded-md p-3 m-3">
			<div className="text-xl flex flex-row justify-between">
				<p className="capitalize text-green-500">{user}</p>
				<div>
					{/* @ts-ignore */}
					<Rating
						fullSymbol={<AiFillStar className="inline text-yellow-400" />}
						emptySymbol={<AiFillStar className="inline" />}
						initialRating={rating}
						readonly={true}
					/>
				</div>
			</div>
			<div className="">{message}</div>
			<div className="flex justify-between text-green-600">
				<p className="">
					<Link href={`product/${product_id}`}> &larr; Go to product</Link>
				</p>
				<p className="text-right font-semibold">{review_created_at}</p>
			</div>
		</div>
	)
}

export default Message

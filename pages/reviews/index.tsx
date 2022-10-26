import React from "react"
import ReviewMessage from "components/Reviews/ReviewMessage"
import { AiFillStar } from "react-icons/ai"
import SendReview from "components/Reviews/SendReview"
const Reviews = () => {
	return (
		<div className="w-[90%] bg-white m-auto rounded-md p-3 space-y-2">
			<div className="">
				<p className="text-xl text-center ">Reviews for kris</p>
				<hr />
			</div>
			<div>
				<ReviewMessage
					user={"Chris Muiru"}
					rating={[
						<AiFillStar className="text-yellow-500 inline" />,
						<AiFillStar className="text-yellow-500 inline" />,
						<AiFillStar className="text-yellow-500 inline" />,
					]}
					message={
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam odit quia vitae consequatur molestiae explicabo, excepturi accusantium dolor recusandae! Eius modi tempora ducimus accusamus aliquam nesciunt maxime, molestiae commodi reiciendis"
					}
				/>
				<ReviewMessage
					user={"Chris Muiru"}
					rating={[]}
					message={
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam odit quia vitae consequatur molestiae explicabo, excepturi accusantium dolor recusandae! Eius modi tempora ducimus accusamus aliquam nesciunt maxime, molestiae commodi reiciendis"
					}
				/>
				<ReviewMessage
					user={"Chris Muiru"}
					rating={[]}
					message={
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam odit quia vitae consequatur molestiae explicabo, excepturi accusantium dolor recusandae! Eius modi tempora ducimus accusamus aliquam nesciunt maxime, molestiae commodi reiciendis"
					}
				/>
				{/* <SendReview /> */}
			</div>
		</div>
	)
}

export default Reviews

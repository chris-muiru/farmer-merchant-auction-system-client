import React from "react"
import { AiFillStar } from "react-icons/ai"

const SelectionStars = () => {
	const stars: JSX.Element[] = [
		<AiFillStar className="inline" />,
		<AiFillStar className="inline" />,
		<AiFillStar className=" inline" />,
		<AiFillStar className=" inline" />,
		<AiFillStar className=" inline" />,
	]
	return (
		<div className="w-3/4 m-auto  text-4xl mb-5 gap-4 flex justify-center">
            {stars}
        </div>
	)
}
export default SelectionStars

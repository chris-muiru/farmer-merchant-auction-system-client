import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

const starConverter = (total: 1 | 2 | 3 | 4 | 5): JSX.Element[] => {
	const arr = []
	for (let i: number = 0; i < total; i++) {
		arr.push(<AiFillStar className="text-yellow-500 inline" />)
	}
	let counter: number = 5 - arr.length
	for (let i: number = 0; i < counter; i++) {
		arr.push(<AiFillStar className="text-slate-400 inline" />)
	}
	return arr
}
export default starConverter

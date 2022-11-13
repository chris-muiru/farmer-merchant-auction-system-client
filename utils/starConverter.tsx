import { AiFillStar } from "react-icons/ai"

const starConverter = (total:number): JSX.Element[] => {
	const arr = []
	for (let i: number = 0; i < total; i++) {
		arr.push(<AiFillStar className="text-yellow-500 inline" />)
	}
	let counter: number = 5 - arr.length
	for (let i: number = 0; i < counter; i++) {
		arr.push(<AiFillStar className="inline text-slate-200" />)
	}
	return arr
}
export default starConverter

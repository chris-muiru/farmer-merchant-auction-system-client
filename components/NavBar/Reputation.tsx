import React from "react"
import Image from "next/image"
import starConverter from "utils/starConverter"
const count = 5
interface Iprop {
	count?: number
}
const stars = (counter: number) => {
	while (true) {
		if (counter < 5) {
		}
	}
}
const Reputation = () => {
	return (
		<div className="mt-10">
			<span className="text-yellow-400 font-bold">Kris</span> &lt;&lt;&nbsp;
			{starConverter(count)}
			&nbsp;&gt;&gt;
		</div>
	)
}

export default Reputation

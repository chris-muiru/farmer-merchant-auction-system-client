import React from "react"
import Image from "next/image"
import Link from "next/link"
const User = () => {
	return (
		<Link href="/messages/1">
			<div className="relative flex flex-row m-3 p-3 border hover:bg-green-200 duration-200 rounded-xl ">
				<Image
					src="/fruits.jpg"
					alt="matunda"
					width={100}
					height={100}
					className="rounded-xl"
				/>
				<p className="absolute left-32 top-12 text-2xl">Chris Muiru</p>
				<div className="absolute right-10 text-2xl top-12">10</div>
			</div>
		</Link>
	)
}

export default User

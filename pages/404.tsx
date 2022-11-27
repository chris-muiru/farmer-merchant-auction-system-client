import React from "react"
import Image from "next/image"
import Link from "next/link"
const Custom404 = () => {
	return (
		<div className="flex h-screen">
			<div className="w-1/2  flex flex-col space-y-7 justify-center items-center">
				<div className="space-y-2">
					<p className="text-6xl text-red-600">404 page</p>
					<p className="text-center">not found</p>
				</div>
				<Link href={"/"}>
					<button className="bg-blue-600 text-white p-2 w-20 rounded-md">
						Home
					</button>
				</Link>
			</div>
			<div className="w-full relative">
				<Image src={"/omega.svg"} layout="fill" />
			</div>
		</div>
	)
}

export default Custom404

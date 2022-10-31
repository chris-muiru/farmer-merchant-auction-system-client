import Link from "next/link"
import React from "react"
import Image from "next/image"
import { NextPage } from "next/types"
interface Props {
	children: JSX.Element
}
const Auth: NextPage<Props> = ({ children }) => {
	return (
		<div>
			<div className="flex flex-row min-h-screen">
				<div className="w-full">
					<div className="m-auto w-1/2 mt-40 space-y-10 ">{children}</div>
				</div>
				<div className="w-full relative min-h-screen">
					<Image alt="slinger fruits" src="/fruits.jpg" layout="fill" />
				</div>
			</div>
		</div>
	)
}

export default Auth

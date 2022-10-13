import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import Auth from "../../components/Auth/Auth"

import { NextPageWithLayout } from "pages/_app"
import { ReactElement } from "react"
import Layout from "components/Home/Layout"
const SignIn: NextPageWithLayout = () => {
	return (
		<Auth>
			<>
				<div className="text-center space-y-1">
					<h2 className="text-3xl">Welcome back</h2>
					<p className="">please enter your details</p>
				</div>

				<form action="" className="flex flex-col">
					<div className="flex flex-col space-y-5">
						<label htmlFor="" id="email">
							Email
						</label>
						<input
							type="text"
							placeholder="Enter your email"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							id="email"
						/>
						<label htmlFor="" id="password">
							Password
						</label>
						<input
							type="password"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							placeholder="Enter your password"
							id="password"
						/>
						<div className="flex flex-row justify-between">
							<label htmlFor="">
								<input type="checkbox" />
								<Link href="/">
									<a className="text-blue-900">
										&nbsp; terms and conditions
									</a>
								</Link>
							</label>
							<Link href="">
								<a className="underline"> forgot password</a>
							</Link>
						</div>
					</div>
					<button
						type="submit"
						className="bg-green-700 rounded-sm p-3 mt-20 text-white"
					>
						Sign In
					</button>
				</form>
			</>
		</Auth>
	)
}
SignIn.getLayout = (page: ReactElement) => {
	return <>{page}</>
}
export default SignIn

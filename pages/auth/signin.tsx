import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import Auth from "../../components/Auth/Auth"

import { NextPageWithLayout } from "pages/_app"
import { ReactElement, useState } from "react"
import { LOCALHOST } from "components/Urls"
import jwtDecode from "jwt-decode"

const SignIn: NextPageWithLayout = () => {
	const [authTokens, setAuthTokens] = useState(() =>
		//  TODO: understand mounting in nextjs
		typeof window !== "undefined"
			? localStorage.getItem("auctionSystemToken")
				? JSON.parse(localStorage.getItem("auctionSystemToken") || "")
				: null
			: null
	)
	const [user, setUser] = useState(() =>
		typeof window !== "undefined"
			? localStorage.getItem("auctionSystemToken")
				? JSON.parse(localStorage.getItem("auctionSystemToken") || "")
						.access
				: null
			: null
	)
	let loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const { email, password } = event.target as typeof event.target & {
			email: { value: string }
			password: { value: string }
		}
		const response = await fetch(`${LOCALHOST}/auth/token/`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email.value,
				password: password.value,
			}),
		})
		const dataJson = await response.json()
		if (response.status === 200) {
			setUser(jwtDecode(dataJson.access))
			setAuthTokens(dataJson)

			if (typeof window !== "undefined") {
				localStorage.setItem("auctionSystemToken", JSON.stringify(dataJson))
			}
			// there is a major bug in ts window.location. thats why i ignored ts-here
			// @ts-ignore
			window.location = "/"
		} else {
			alert("something went wrong")
		}
	}
	return (
		<Auth>
			<>
				<div className="text-center space-y-1">
					<h2 className="text-3xl">Welcome back</h2>
					<p className="">please enter your details</p>
				</div>

				<form action="" className="flex flex-col" onSubmit={loginUser}>
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

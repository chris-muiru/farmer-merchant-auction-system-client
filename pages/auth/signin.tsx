import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import Auth from "../../components/Auth/Auth"

import { NextPageWithLayout } from "pages/_app"
import { ReactElement, useState } from "react"
import { LOCALHOST } from "components/Urls"
import jwtDecode from "jwt-decode"
import { useAuthContext } from "context/AuthContextProvider"

const SignIn: NextPageWithLayout = () => {
	const { login } = useAuthContext()

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const { email, password } = event.target as typeof event.target & {
			email: { value: string }
			password: { value: string }
		}
		// console.log("email", email.value)
		await login(email.value, password.value)
	}

	return (
		<Auth>
			<>
				<div className="text-center space-y-1">
					<h2 className="text-3xl">Welcome back</h2>
					<p className="">please enter your details</p>
				</div>

				<form
					method="POST"
					className="flex flex-col"
					onSubmit={handleSubmit}
				>
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
							<Link href="/auth/signup">
								<a className="underline text-blue-500">Sign up</a>
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
function login(value: any, value1: any) {
	throw new Error("Function not implemented.")
}

function async(value: string, value1: string) {
	throw new Error("Function not implemented.")
}

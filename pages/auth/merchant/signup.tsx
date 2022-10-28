import Link from "next/link"
import { ReactElement } from "react"
import Auth from "components/Auth/Auth"
const SignUp = () => {
	return (
		<Auth>
			<>
				<div className="text-center space-y-1">
					<h2 className="text-3xl">Hello</h2>
					<p className="">please enter your details</p>
				</div>
				<form className="flex flex-col">
					<div className="flex flex-col space-y-5">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							placeholder="Enter your email"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							id="email"
						/>
						<label htmlFor="phone">Phone</label>
						<input
							type="text"
							placeholder="Enter your Phone number"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							id="phone"
						/>
						<label htmlFor="id">National id</label>
						<input
							type="text"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							placeholder="Enter your National id"
							id="id"
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							placeholder="Enter your password"
							id="password"
						/>
						<div className="flex flex-row justify-between  text-white">
							<button className="bg-blue-700 w-60 text-center p-3 rounded-sm">
								Merchant
							</button>
							<button
								onClick={() => {}}
								className="bg-green-700 w-60 text-center p-3 rounded-sm"
							>
								Farmer
							</button>
						</div>
					</div>
					<button
						type="submit"
						className="bg-green-700 rounded-sm p-3 mt-16 text-white"
					>
						Sign Up
					</button>
				</form>
			</>
		</Auth>
	)
}
SignUp.getLayout = (page: ReactElement) => {
	return <>{page}</>
}

export default SignUp

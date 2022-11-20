import { LOCALHOST } from "components/Urls"
import Link from "next/link"
import { ReactElement } from "react"
import Rating from "react-rating"
import withReactContent from "sweetalert2-react-content"
import Auth from "../../components/Auth/Auth"
import Swal from "sweetalert2"
import { useRouter } from "next/router"
const SignUp = () => {
	const MySwal = withReactContent(Swal)
	const router = useRouter()
	const createCustomUser = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const {
			user_email,
			user_password,
			user_name,
			user_national_id,
			user_phone,
			user_role,
		} = event.target as typeof event.target & {
			user_email: { value: string }
			user_password: { value: string }
			user_national_id: { value: string }
			user_phone: { value: string }
			user_role: { value: string }
			user_name: { value: string }
		}
		let payload = {
			user_name: user_name.value,
			user_email: user_email.value,
			user_national_id: user_national_id.value,
			user_role: user_role.value,
			user_phone: user_phone.value,
			user_password: user_password.value,
		}
		const userUrl = `${LOCALHOST}/users/`
		const response = await fetch(userUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
		const status = response.status
		if (status == 200) {
			MySwal.fire({
				title: <strong>Successfully created user</strong>,
				html: <i>user created</i>,
				icon: "success",
			})
			setTimeout(() => {
				router.push("/auth/signin")
			}, 5000)
		} else {
			MySwal.fire({
				title: <strong>an error occured!! check your values</strong>,
				html: <i>error occured</i>,
				icon: "success",
			})
		}
	}
	return (
		<Auth>
			<>
				<div className="text-center space-y-1">
					<h2 className="text-3xl">Hello</h2>
					<p className="">please enter your details</p>
				</div>
				<form className="flex flex-col" onSubmit={createCustomUser}>
					<div className="flex flex-col space-y-5">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							placeholder="Enter your email"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							id="email"
							name="user_email"
						/>
						<label htmlFor="name">User name</label>
						<input
							type="text"
							placeholder="Enter your user name"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							id="name"
							name="user_name"
						/>
						<label htmlFor="phone">Phone</label>
						<input
							type="text"
							placeholder="Enter your Phone number"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							id="phone"
							name="user_phone"
						/>
						<label htmlFor="id">National id</label>
						<input
							type="text"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							placeholder="Enter your National id"
							name="user_national_id"
							id="id"
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="p-3 rounded-md border focus:border-black focus:outline-none"
							placeholder="Enter your password"
							id="password"
							name="user_password"
						/>

						<label htmlFor="role">User role</label>
						<select
							name="user_role"
							className="p-4 w-full bg-slate-100 focus:border-none focus:outline-none"
						>
							<option value="" disabled selected>
								Select role
							</option>
							<option value="merchant">Merchant</option>
							<option value="farmer">Farmer</option>
						</select>
						{/* <button className="bg-blue-700 w-60 text-center p-3 rounded-sm">
								Merchant
							</button>
							<button
								onClick={() => {}}
								className="bg-green-700 w-60 text-center p-3 rounded-sm"
							>
								Farmer
							</button> */}
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

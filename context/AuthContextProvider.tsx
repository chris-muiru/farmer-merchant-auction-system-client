import React, { FC } from "react"
import { useContext } from "react"
import { createContext } from "react"
import { useState } from "react"
import jwtDecode, { JwtPayload } from "jwt-decode"
import { useEffect } from "react"
import { LOCALHOST } from "components/Urls"
import { useRouter } from "next/router"

interface contextInterface {
	getUser: () => string | null
	logOut: () => void
	login: (email: string, password: string) => Promise<void>
	getAuthToken: () => string
}
interface myJwtPayload extends JwtPayload {
	name?: string
}
interface ProviderProps {
	children: JSX.Element
}

const AuthContext: React.Context<contextInterface> = createContext(
	{} as contextInterface
)

const BASE = "http://localhost:8000"

export function useAuthContext() {
	return useContext(AuthContext)
	// we will use this function to get access to context value in other components
}
const AuthContextProvider: FC<ProviderProps> = ({ children }) => {
	const router = useRouter()
	// stay logged in even after page refresh
	const [authTokens, setAuthTokens] = useState(() =>
		typeof window != "undefined"
			? localStorage.getItem("auctionSystemToken")
				? JSON.parse(localStorage.getItem("auctionSystemToken") || " ")
				: null
			: null
	)
	const [user, setUser] = useState((): myJwtPayload | null =>
		typeof window != "undefined"
			? localStorage.getItem("auctionSystemToken")
				? jwtDecode(
						JSON.parse(localStorage.getItem("auctionSystemToken") || " ")
							.access
				  )
				: null
			: null
	)

	let login = async (email: string, password: string) => {
		const response = await fetch(`${LOCALHOST}/auth/token/`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email,
				password,
			}),
		})
		const dataJson = await response.json()
		console.log(dataJson)
		if (response.status === 200) {
			setUser(jwtDecode(dataJson.access))
			setAuthTokens(dataJson)
			if (typeof window !== "undefined") {
				localStorage.setItem("auctionSystemToken", JSON.stringify(dataJson))
			}
			router.push("/")
		} else {
			alert("something went wrong")
		}
	}
	let logOut = () => {
		setAuthTokens(null)
		localStorage.removeItem("authTokens")
		router.push("/auth/signin")
	}

	let refreshToken = async (token: string) => {
		let response = await fetch(`${LOCALHOST}/auth/token/refresh/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				refresh: token,
			}),
		})
		let dataJson = await response.json()
		if (response.status === 200) {
			setAuthTokens(dataJson)
			localStorage.setItem("auctionSystemToken", JSON.stringify(dataJson))
		} else {
			router.push("/auth/signin")
		}
	}

	const getAuthToken = () => {
		if (!user) {
			router.push("/auth/signin")
			return
		}
		if (!authTokens || (user.exp as number) < Date.now() / 1000) {
			localStorage.clear()
			router.push("/auth/signin")
		}
		return authTokens.access
	}
	const getUser = () => {
		return user && (user.name as string)
	}
	let context = {
		getUser: getUser,
		logOut: logOut,
		login: login,
		getAuthToken: getAuthToken,
	}
	useEffect(() => {
		let interval = setInterval(() => {
			if (authTokens) {
				refreshToken(authTokens.refresh)
			}
		}, 240000)

		// cleanup
		return () => {
			clearInterval(interval)
		}
	}, [authTokens])

	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	)
}
export default AuthContextProvider

import React, { FC, ReactElement, useEffect } from "react"
import {
	FiChevronDown,
	FiClipboard,
	FiSmile,
	FiChevronUp,
} from "react-icons/fi"
import { FaSellcast, FaUserCircle } from "react-icons/fa"
import { BsFillHouseFill } from "react-icons/bs"
import Link from "next/link"
import { useState, useRef } from "react"
import { AiOutlineFilePdf } from "react-icons/ai"
import { useAuthContext } from "context/AuthContextProvider"
import Logo from "components/Logo"
const NavBar = () => {
	const [categoryDivIsBlock, setCategoryDivIsBlock] = useState(false)
	const categoryRef = useRef<HTMLDivElement>()
	const { role, user } = useAuthContext()
	const [loggedInUser, setLoggedInUser] = useState<string | null>()
	//toggle category menu
	const toggleCategory = (): void => {
		if (categoryRef.current) {
			if (categoryDivIsBlock) {
				categoryRef.current.style.display = "none"
				setCategoryDivIsBlock(false)
			} else {
				categoryRef.current.style.display = "block"
				setCategoryDivIsBlock(true)
			}
		}
	}

	// toggle fiChevron icon between up and down
	const toggleIcon = () => {
		if (categoryDivIsBlock) {
			return <FiChevronUp className="inline" />
		} else {
			return <FiChevronDown className="inline" />
		}
	}
	const displaySellIcon = () => {
		if (role == "farmer") {
			return (
				<div className="hover:text-green-500">
					<Link href="/sell">
						<a>
							<FaSellcast className="inline mr-2 text-2xl" />
							Sell
						</a>
					</Link>
				</div>
			)
		}
	}
	useEffect(() => {
		setLoggedInUser(user)
	}, [])

	return (
		<div className="bg-black w-[400px]  text-white min-h-screen sticky">
			<div className="sticky top-0 p-4">
				<div className="mt-3">
					<Logo />
				</div>
				<nav className="space-y-20 ml-10 mt-10">
					<div className="capitalize text-2xl text-yellow-500 relative">
						<FaUserCircle className="inline mr-2" />
						{loggedInUser} <span className="text-green-500">&rarr;</span>
						<span className="text-sm absolute m-2 ">{role}</span>
					</div>

					<div className="hover:text-green-500">
						<Link href="/">
							<a>
								<BsFillHouseFill className="inline mr-2 text-2xl " />
								Dashboard
							</a>
						</Link>
					</div>
					{displaySellIcon()}
					<div className="hover:text-green-500">
						<Link href="/orders">
							<a>
								<FiClipboard className="inline mr-2 text-2xl" />
								Orders
							</a>
						</Link>
					</div>

					{/* <div>
						<button
							onClick={() => {
								toggleCategory()
							}}
							className="mb-3 hover:text-green-500"
						>
							<FiMenu className="inline mr-2 text-2xl" />
							Categories &nbsp;
							{toggleIcon()}
						</button>

						<div
							ref={categoryRef}
							className=" min-h-[100px] pl-10 space-y-4 box-border hidden"
						>
							<p className="hover:text-green-500">Foodstaff</p>
							<p className="hover:text-green-500">Livestock</p>
							<p className="hover:text-green-500">Machinery</p>
						</div>
					</div> */}
					{/* TODO: message feature  in the future */}
					{/* <FiMail className="inline mr-2 text-2xl" /> */}
					<div className="hover:text-green-500">
						<Link href="/system-report">
							<a>
								<AiOutlineFilePdf className="inline mr-2 text-2xl" />
								System report
							</a>
						</Link>
					</div>
					<div className="hover:text-green-500">
						<Link href="/reviews">
							<a>
								<FiSmile className="inline mr-2 text-2xl" />
								Reviews
							</a>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default NavBar

import Image from "next/image"
import React, { FC, ReactElement, useEffect } from "react"
import {
	FiChevronDown,
	FiChevronRight,
	FiMail,
	FiMenu,
	FiClipboard,
	FiSmile,
	FiChevronUp,
} from "react-icons/fi"
import { FaSellcast } from "react-icons/fa"
import { BsFillHouseFill } from "react-icons/bs"
import Link from "next/link"
import { useState, useRef } from "react"
import Reputation from "./Reputation"
import { AiOutlineFilePdf } from "react-icons/ai"
const NavBar = () => {
	const [categoryDivIsBlock, setCategoryDivIsBlock] = useState(false)
	const categoryRef = useRef<HTMLDivElement>(null)

	useEffect(() => {}, [])
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

	return (
		<div className=" bg-black w-[400px]  text-white min-h-screen sticky ">
			<div className="sticky top-0">
				<div className="">
					<Image
						alt="add slinger photo"
						src="/slinger.png"
						width={150}
						height={150}
						className="rounded-md"
					/>
				</div>
				<nav className="space-y-20 ml-10">
					<Reputation />
					<div className="hover:text-green-500">
						<Link href="/">
							<a>
								<BsFillHouseFill className="inline mr-2 text-2xl " />
								Dashboard
							</a>
						</Link>
					</div>
					<div className="hover:text-green-500">
						<Link href="/sell">
							<a>
								<FaSellcast className="inline mr-2 text-2xl" />
								Sell
							</a>
						</Link>
					</div>
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
					<div className="hover:text-green-500">
						{/* TODO: message feature to be added in future */}
						{/* <FiMail className="inline mr-2 text-2xl" /> */}
						<button>
							<AiOutlineFilePdf className="inline mr-2 text-2xl" />
							System report
						</button>
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

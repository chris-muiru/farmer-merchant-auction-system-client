import Image from "next/image"
import React, { ReactElement } from "react"
import {
	FiChevronDown,
	FiChevronRight,
	FiMail,
	FiMenu,
	FiHome,
	FiClipboard,
	FiSmile,
	FiChevronUp,
} from "react-icons/fi"
import { BsFillHouseFill } from "react-icons/bs"
import Link from "next/link"
import { useState, useRef } from "react"
import Reputation from "../Main/Reputation"
import { AiFillStar } from "react-icons/ai"
const NavBar = (): JSX.Element => {
	const [categoryDivIsBlock, setCategoryDivIsBlock] = useState(false)
	const categoryRef = useRef<HTMLDivElement>(null)

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
				<div className="bg-slate-400 ">
					<Image
						src="/slinger.png"
						width={150}
						height={150}
						className="rounded-md"
					/>
				</div>
				<nav className="space-y-14 ml-10">
					<Reputation />
					<div className="hover:text-green-500">
						<Link href="/">
							<a>
								<BsFillHouseFill className="inline mr-2 text-2xl" />
								Dashboard
							</a>
						</Link>
					</div>
					<div className="hover:text-green-500">
						<Link href="/">
							<a>
								<FiClipboard className="inline mr-2 text-2xl " />
								Orders
							</a>
						</Link>
					</div>

					<div>
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
							<p className="hover:text-green-500">hello</p>
							<p className="hover:text-green-500">hello</p>
							<p className="hover:text-green-500">hello</p>
							<p className="hover:text-green-500">hello</p>
						</div>
					</div>
					<div className="hover:text-green-500">
						<Link href="/">
							<a>
								<FiMail className="inline mr-2 text-2xl" />
								Messages
							</a>
						</Link>
					</div>
					<div className="hover:text-green-500">
						<Link href="/">
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
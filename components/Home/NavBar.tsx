import Image from "next/image"
import React, { ReactElement } from "react"
import {
	FiChevronDown,
	FiChevronUp,
	FiMail,
	FiMenu,
	FiHome,
	FiClipboard,
	FiSmile,
} from "react-icons/fi"
import { BsFillHouseFill } from "react-icons/bs"
import Link from "next/link"
const NavBar = (): JSX.Element => {
	return (
		<div className="flex flex-col bg-black w-60  text-white min-h-screen">
			<div className="bg-slate-800">
				<Image
					src="/slinger.png"
					width={150}
					height={150}
					className="rounded-md"
				/>
			</div>
			<nav className="space-y-10">
				<div className="mt-10">
					Reputation &lt;&lt;&nbsp;
					<Image src="/star.png" width={12} height={12} />
					<Image src="/star.png" width={12} height={12} />
					<Image src="/star.png" width={12} height={12} />
					<Image src="/star.png" width={12} height={12} />
					<Image src="/star.png" width={12} height={12} />
					&nbsp;&gt;&gt;
				</div>
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
					<div className="mb-3 hover:text-green-500">
						<FiMenu className="inline mr-2 text-2xl" />
						Categories &nbsp;
						<FiChevronDown className="inline" />
					</div>
					<div className=" min-h-[100px] pl-10 space-y-4 box-border block">
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
	)
}

export default NavBar

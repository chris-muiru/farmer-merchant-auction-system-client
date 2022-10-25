import Image from "next/image"
import Link from "next/link"
import React from "react"

const Product = () => {
	return (
		<Link href="/product/1">
			<div className="flex flex-row w-[92%] ml-10  space-x-5 rounded-xl border bg-white p-4  min-h-[300px] hover:cursor-pointer">
				<div className="w-60 min-h-[200px] bg-slate-500 my-auto relative rounded-lg">
					<Image src="/fruits.jpg" layout="fill" className="rounded-3xl" />
				</div>
				<div className="w-full relative ">
					<h2 className="text-2xl font-bold my-3">
						This is the product am selling
						<p className="float-right text-xl text-green-600">12/4/12</p>
					</h2>
					<p className="w-3/4 leading-loose">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Eaque qui itaque hic officia minima. Magnam, voluptate alias
						consequatur vitae modi expedita totam ea numquam, quibusdam
						veritatis aut dolorum laborum culpa! Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Blanditiis alias iure
						ducimus, dignissimos suscipit eaque necessitatibus vero autem.
						Nostrum iste atque natus, ab earum ut. Porro ipsa labore velit
						nemo.
					</p>
					<p className="text-green-600 font-serif font-bold absolute bottom-0 text-xl">
						Price: 450000
					</p>
					<p className="text-green-600 absolute bottom-1 right-0 font-bold font-serif text-xl">
						kikuyu,Kiambu
					</p>
				</div>
			</div>
		</Link>
	)
}

export default Product

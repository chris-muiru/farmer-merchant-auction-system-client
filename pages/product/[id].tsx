import SelectionStars from "components/Reviews/SelectionStars"
import SendReview from "components/Reviews/SendReview"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BiBeenHere } from "react-icons/bi"
import { HiChat } from "react-icons/hi"
import starConverter from "utils/starConverter"
const isOnline = (status: boolean): JSX.Element => {
	if (status) {
		return (
			<span className="bottom-0 left-10 top-12 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
		)
	}
	return (
		<span className="bottom-0 left-10 top-12 absolute  w-3.5 h-3.5 bg-gray-100 border-2 border-white dark:border-gray-800 rounded-full"></span>
	)
}
const ProductDetail = () => {
	return (
		<div className="flex flex-row w-4/5 m-auto space-x-5 relative">
			<div className="flex flex-col w-full m-auto space-y-4 bg-white rounded-lg relative min-h-auto">
				<div className="relative h-20 mt-3">
					<h2 className="text-green-500 text-2xl text-center mt-4">
						This is the product being sold
					</h2>
				</div>

				<div className="m-auto flex flex-row">
					<div className="h-[500px] rounded-lg w-[600px] relative">
						<Image
							src="/fruits.jpg"
							layout="fill"
							className="rounded-xl"
						/>
					</div>
				</div>
				<div className="p-20">
					<h2 className="text-green-500 text-2xl text-center m-3">
						Description
					</h2>
					<div className=" m-2 leading-loose text-justify">
						ducimus quibusdam, laboriosam natus atque reprehenderit
						suscipit voluptatibus delectus reiciendis incidunt dolorum ex
						iusto ut facilis. Veritatis quae at rem? Lorem ipsum dolor
						sit, amet consectetur adipisicing elit. Quibusdam cumque quod
						itaque. Quod odio quidem mollitia illum et distinctio odit!
						Excepturi animi quidem repudiandae. Fuga consequatur
						cupiditate velit beatae illum! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Molestiae impedit dolorem
						molestias, et quisquam praesentium explicabo velit quaerat
						minima quidem, unde, quo eum vitae sequi similique
						voluptatibus odit officia dignissimos.Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Esse, odio ducimus
						quibusdam, laboriosam natus atque reprehenderit suscipit
						voluptatibus delectus reiciendis incidunt dolorum ex iusto ut
						facilis. Veritatis quae at rem? Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Quibusdam cumque quod itaque.
						Quod odio quidem mollitia illum et distinctio odit! Excepturi
						animi quidem repudiandae. Fuga consequatur cupiditate velit
						beatae illum! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Molestiae impedit dolorem molestias, et
						quisquam praesentium explicabo velit quaerat minima quidem,
						unde, quo eum vitae sequi similique voluptatibus odit officia
						dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Esse, odio ducimus quibusdam, laboriosam natus atque
						reprehenderit suscipit voluptatibus delectus reiciendis
						incidunt dolorum ex iusto ut facilis. Veritatis quae at rem?
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Quibusdam cumque quod itaque. Quod odio quidem mollitia illum
						et distinctio odit! Excepturi animi quidem repudiandae. Fuga
						consequatur cupiditate velit beatae d
					</div>
					<h2 className="text-green-500 text-2xl text-center m-3">
						Review
					</h2>
					<SelectionStars />
					<SendReview />
				</div>
			</div>

			{/* bid section */}
			<div className="flex flex-col w-[500px]  sticky top-20 h-[500px] bg-white p-4 rounded-xl space-y-7">
				<button className="bg-green-600 text-white p-4 rounded-md self-center w-full">
					<div className=" w-1/2 m-auto">
						<BiBeenHere className="inline text-xl" />
						<span>bid</span>
					</div>
				</button>
				<table id="quantity-table" className="w-full">
					<tbody>
						<tr>
							<td></td>
							<td className="w-[700px]">
								<input
									type="number"
									className=" outline-none w-full h-full text-3xl box-border"
									placeholder="Quantity"
								/>
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				{/* bid section */}
				<div className="">
					<div className="text-3xl p-4 rounded-sm">
						<p className="mt-2">Ksh 40,000</p>
					</div>
					<div className="relative ml-4">
						<Image
							className="rounded-full"
							width={60}
							height={60}
							src="/fruits.jpg"
						/>
						{isOnline(true)}
						<div className="inline ml-4 top-3 text-xl absolute">
							<p>Chris Muiru</p>
							<p className="absolute top-5">{starConverter(2)}</p>
						</div>
					</div>
					<div className="bg-green-500 mt-4 flex justify-center items-center text-white m-auto rounded-md h-[40px] w-full">
						0746646464
					</div>
					<Link href="/messages/1">
						<button className="border border-green-500 mt-4 flex relative justify-center items-center m-auto rounded-md h-[40px] w-full">
							<span className="text-xl font-medium">Chat</span>
							<HiChat className="text-green-600 text-2xl absolute top-[4px] right-[116px]" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail

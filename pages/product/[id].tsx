import Image from "next/image"
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
		<div className="flex flex-row w-3/4 m-auto space-x-5 relative">
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

					{/* user details */}
				</div>
				<h2 className="text-green-500 text-2xl text-center m-3">
					Description
				</h2>
				<div className="p-2 m-2 leading-loose text-justify">
					
					ducimus quibusdam, laboriosam natus atque reprehenderit suscipit
					voluptatibus delectus reiciendis incidunt dolorum ex iusto ut
					facilis. Veritatis quae at rem? Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Quibusdam cumque quod itaque. Quod
					odio quidem mollitia illum et distinctio odit! Excepturi animi
					quidem repudiandae. Fuga consequatur cupiditate velit beatae
					illum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestiae impedit dolorem molestias, et quisquam praesentium
					explicabo velit quaerat minima quidem, unde, quo eum vitae sequi
					similique voluptatibus odit officia dignissimos.Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Esse, odio ducimus
					quibusdam, laboriosam natus atque reprehenderit suscipit
					voluptatibus delectus reiciendis incidunt dolorum ex iusto ut
					facilis. Veritatis quae at rem? Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Quibusdam cumque quod itaque. Quod
					odio quidem mollitia illum et distinctio odit! Excepturi animi
					quidem repudiandae. Fuga consequatur cupiditate velit beatae
					illum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestiae impedit dolorem molestias, et quisquam praesentium
					explicabo velit quaerat minima quidem, unde, quo eum vitae sequi
					similique voluptatibus odit officia dignissimos.Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Esse, odio ducimus
					quibusdam, laboriosam natus atque reprehenderit suscipit
					voluptatibus delectus reiciendis incidunt dolorum ex iusto ut
					facilis. Veritatis quae at rem? Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Quibusdam cumque quod itaque. Quod
					odio quidem mollitia illum et distinctio odit! Excepturi animi
					quidem repudiandae. Fuga consequatur cupiditate velit beatae
				d
				</div>
				<h2 className="text-green-500 text-2xl text-center m-3">Contact</h2>
			</div>

			{/* bid section */}
			<div className="flex flex-col w-[400px] mt-[100px] sticky top-20 h-[400px] bg-white p-4 rounded-xl" >
				<button className="bg-green-600 text-white h-14 rounded-md self-center w-full">
					<div className=" w-1/2 m-auto">
						<BiBeenHere className="inline text-xl" />
						<span>bid</span>
					</div>
				</button>
				<div className="text-3xl p-4 rounded-sm">
					<p className="mt-2">Ksh 40,000</p>
				</div>
				<div className="">
					<div className="relative">
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
					<button className="border border-green-500 mt-4 flex relative justify-center items-center m-auto rounded-md h-[40px] w-full">
						<span className="text-xl font-medium">Chat</span>
						<HiChat className="text-green-600 text-2xl absolute top-[4px] right-[89px]" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail

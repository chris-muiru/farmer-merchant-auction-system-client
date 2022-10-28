import BidSection from "components/Product/BidSection"
import SelectionStars from "components/Reviews/SelectionStars"
import SendReview from "components/Reviews/SendReview"
import Image from "next/image"
import React from "react"
import { MdDelete } from "react-icons/md"
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
						<MdDelete className="text-2xl inline absolute right-3 top-4 " />

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
			<BidSection />
		</div>
	)
}

export default ProductDetail

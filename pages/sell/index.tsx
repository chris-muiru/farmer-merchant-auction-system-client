import React, { ChangeEvent, ReactElement, useEffect, useState } from "react"
import { LOCALHOST } from "../../components/Urls"
import { useAuthContext } from "../../context/AuthContextProvider"
import { event } from "next/dist/build/output/log"
import SwalStatus from "utils/swalStatus"
import { useRouter } from "next/router"
import Layout from "components/Layout/Layout"
const Sell = () => {
	const router = useRouter()

	const { getAuthToken, role } = useAuthContext()

	const [image, setImage]: any = useState()
	console.log(image)
	const setImageData = (e: ChangeEvent) => {
		let reader = new FileReader()
		const target = e.target as HTMLInputElement
		const file: File = (target.files as FileList)[0]
		reader.readAsDataURL(file)

		reader.onload = () => {
			setImage({
				queryImage: reader.result,
			})
		}
	}
	const createNewProduct = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const productUrl = `${LOCALHOST}/products/`
		const {
			productName,
			productPrice,
			productLocation,
			productDescription,
			productCategoryName,
			productCategoryDescription,
			productFileName,
			productFileImage,
		} = event.target as typeof event.target & {
			productName: { value: string }
			productPrice: { value: number }
			productLocation: { value: string }
			productDescription: { value: string }
			productCategoryName: { value: string }
			productCategoryDescription: { value: string }
			productFileName: { value: string }
			productFileImage: any
		}
		const payload = {
			product_name: productName.value,
			product_price: productPrice.value,
			product_location: productLocation.value,
			product_description: productDescription.value,
			product_category_data: {
				product_category_name: productCategoryName.value,
				product_category_description: productCategoryDescription.value,
			},
			product_product_file_data: {
				product_file_name: productFileName.value,
				product_file_image: image.queryImage,
			},
		}

		const response = await fetch(productUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},

			body: JSON.stringify(payload),
		})
		const status = response.status
		SwalStatus(status, "product successfully created")
	}
	useEffect(() => {
		if (role !== "farmer") {
			router.push("/auth/signin")
		}
	}, [])
	return (
		<div className="bg-white w-3/4 m-auto p-2 min-h-screen">
			<h2 className="text-center text-3xl mt-10">Sell Product </h2>

			<form method={"POST"} onSubmit={createNewProduct}>
				<div className="flex flex-col w-3/4 m-auto p-5 space-y-10 rounded-sm">
					<input
						type="text"
						name="productName"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter product name"
					/>
					<select
						name="productCategoryName"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none selection:w-[100px]"
					>
						<option value="" disabled selected>
							Select product category
						</option>
						<option value="livestock">livestock</option>
						<option value="machinery">machinery</option>
						<option value="foodstuff">foodstuff</option>
					</select>
					<input
						name="productCategoryDescription"
						type="text"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter category description"
					/>
					<input
						name="productLocation"
						type="text"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter Location"
					/>
					<input
						name="productPrice"
						type="number"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter product price"
					/>
					<textarea
						name={"productDescription"}
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter product description"
						rows={20}
					/>
					{/*TODO: use a selection later on for city and town*/}
					{/*<div className="flex flex-row justify-between space-x-2">*/}
					{/*	<div className="w-1/2">*/}
					{/*		<select className="p-6 w-full bg-slate-100 focus:border-none focus:outline-none">*/}
					{/*			<option value="" disabled selected>*/}
					{/*				Select county*/}
					{/*			</option>*/}
					{/*			<option value="volvo">volvo</option>*/}
					{/*			<option value="volvo">kilimal</option>*/}
					{/*			<option value="volvo">ok</option>*/}
					{/*		</select>*/}
					{/*	</div>*/}
					{/*	<div className="w-1/2 ">*/}
					{/*		<select className="p-6 w-full bg-slate-100 focus:border-none focus:outline-none">*/}
					{/*			<option value="" disabled selected>*/}
					{/*				Select City*/}
					{/*			</option>*/}
					{/*			<option value="volvo">volvo</option>*/}
					{/*			<option value="volvo">kilimal</option>*/}
					{/*			<option value="volvo">ok</option>*/}
					{/*		</select>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<input
						name="productFileName"
						type="text"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter picture file name"
					/>

					<div>
						<label className="block">
							<span className="sr-only">Choose File</span>
							<input
								name={"productFileImage"}
								onChange={setImageData}
								type="file"
								accept=".png,.jpeg,.jpg"
								className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
							/>
						</label>
					</div>
					<button className="bg-green-400 p-5 text-white" type={"submit"}>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default Sell

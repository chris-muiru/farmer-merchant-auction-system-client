import { LOCALHOST } from "components/Urls"
import { useAuthContext } from "context/AuthContextProvider"
import { useRouter } from "next/router"
import React, { ChangeEvent, useEffect, useState } from "react"
import SwalStatus from "utils/swalStatus"
const Update = () => {
	const { getAuthToken } = useAuthContext()
	const [image, setImage]: any = useState()

	const router = useRouter()
	const { id } = router.query

	const productUrl = `${LOCALHOST}/products/${id}`
	const [product, setProduct] = useState<{
		product_name: string
		product_price: string
		product_location: string
		product_description: string
		product_category_data: {
			product_category_name: string
			product_category_description: string
		}
		product_product_file_data: {
			product_file_name: string
			product_file_image: string
		}
	}>()
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
	const fetchProductById = async () => {
		const response = await fetch(productUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		const data = await response.json()
		setProduct(data)
	}
	const updateProductById = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault()
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
			productFileImage: string
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
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},

			body: JSON.stringify(payload),
		})
		const status = response.status
		SwalStatus(status, "product successfully updated")
	}
	useEffect(() => {
		if (id) {
			fetchProductById()
		}
	}, [id])
	return (
		<div className="bg-white w-3/4 m-auto p-2 min-h-screen">
			<h2 className="text-center text-3xl mt-10">Sell Product </h2>

			<form method={"POST"} onSubmit={updateProductById}>
				<div className="flex flex-col w-3/4 m-auto p-5 space-y-10 rounded-sm">
					<input
						type="text"
						name="productName"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter product name"
						defaultValue={product?.product_name}
					/>
					<select
						name="productCategoryName"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none selection:w-[100px]"
					>
						<option selected disabled>
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
						defaultValue={
							product?.product_category_data.product_category_description
						}
					/>
					<input
						name="productLocation"
						type="text"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter Location"
						defaultValue={product && product?.product_location}
					/>
					<input
						name="productPrice"
						type="number"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter product price"
						defaultValue={product && product?.product_price}
					/>
					<textarea
						name={"productDescription"}
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter product description"
						rows={20}
						defaultValue={product && product?.product_description}
					/>
					<input
						name="productFileName"
						type="text"
						className="p-6 bg-slate-100 focus:border-none focus:outline-none"
						placeholder="Enter picture file name"
						defaultValue={
							product &&
							product?.product_product_file_data.product_file_name
						}
					/>

					<div>
						<label className="block">
							<span className="sr-only">Choose File</span>
							<input
								name={"productFileImage"}
								onChange={setImageData}
								type="file"
								// multiple={true}
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
export default Update

import { useRouter } from "next/router"
import React, { FC } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const SwalStatus = (status: number, message: string) => {
	const MySwal = withReactContent(Swal)
	if (status == 200) {
		MySwal.fire({
			title: <strong>success!!! </strong>,
			html: <i>{message}</i>,
			icon: "success",
		})
	} else if (status == 204) {
		MySwal.fire({
			title: <strong>success!!! </strong>,
			html: <i>deleted successfully</i>,
			icon: "success",
		})
	} else if (status == 403) {
		MySwal.fire({
			title: <strong>error!!! </strong>,
			html: <i>you dont have permission to do this</i>,
			icon: "error",
		})
	} else if (status == 401) {
		MySwal.fire({
			title: <strong>unauthorised</strong>,
			html: <i>{message}</i>,
			icon: "info",
		})
	} else {
		MySwal.fire({
			title: <strong>error!!</strong>,
			html: <i>an error occured</i>,
			icon: "error",
		})
	}
	// setTimeout(() => {
	// 	// @ts-ignore
	// 	window.location = "/"
	// }, 3000)
	return <></>
}

export default SwalStatus

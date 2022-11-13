import React, { FC } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
// interface swalStatusProps {
//     status: number
// }
const swalStatus = (status: number, message: string) => {
	const MySwal = withReactContent(Swal)
	if (status == 200) {
		MySwal.fire({
			title: <strong>success!!! </strong>,
			html: <i>{message}</i>,
			icon: "success",
		})
	} else {
		MySwal.fire({
			title: <strong>error!!! </strong>,
			html: <i>an error occurred</i>,
			icon: "error",
		})
	}

	setTimeout(() => {
		// @ts-ignore
		window.location = "/"
	}, 3000)
}

export default swalStatus

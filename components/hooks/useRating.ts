import { LOCALHOST } from "components/Urls"
import { useAuthContext } from "context/AuthContextProvider"
const reviewURL = `${LOCALHOST}/reviews`
const useRating = async () => {
	const { getAuthToken } = useAuthContext()
	const response = await fetch(reviewURL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${getAuthToken()}`,
		},
	})
	return await response.json()
}
export default useRating
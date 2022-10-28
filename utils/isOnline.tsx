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
export default isOnline

import Header from "components/Header"
import Layout from "components/Layout/Layout"
import AuthContextProvider from "context/AuthContextProvider"
import type { AppProps } from "next/app"
import { NextPage } from "next/types"
import { ReactElement, ReactNode } from "react"
import "../styles/globals.css"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout =
		Component.getLayout ??
		((page) => (
			<Layout>
				<>
					<Header />
					{page}
				</>
			</Layout>
		))
	return (
		<AuthContextProvider>
			<>{getLayout(<Component {...pageProps} />)}</>
		</AuthContextProvider>
	)
}

export default MyApp

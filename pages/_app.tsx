import Layout from "components/Layout"
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
	const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
	return getLayout(<Component {...pageProps} />)
}

export default MyApp

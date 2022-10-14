import Header from "components/Header"
import Product from "components/Home/Product"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/Home/NavBar"
const Home: NextPage = () => {
	return (
		<div className="min-w-full min-h-screen">
			<Header />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	)
}

export default Home

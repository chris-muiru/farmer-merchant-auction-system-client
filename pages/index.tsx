import Header from "components/Header"
import Product from "components/Main/Product"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/NavBar/NavBar"
const Home: NextPage = () => {
	return (
		<div className="min-w-full min-h-screen">
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	)
}

export default Home

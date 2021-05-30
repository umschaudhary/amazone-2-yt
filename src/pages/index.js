import Head from "next/head";
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'
import axios from 'axios';

export default function Home({products}) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

			<Header />

		<main className="max-w-screen-2xl mx-auto">

		{/* Banner */}
			<Banner />
		{/* Banner */}

		{/* Product */}
		<ProductFeed products={products} />
		{/* product */}
		</main>

    </div>
  );
}
export async function getServerSideProps(context) {
	const products = await fetch("https://fakestoreapi.com/products").then(
		(response) => response.json()
	)
  return {
		props : {
			products,
		}
  }
}

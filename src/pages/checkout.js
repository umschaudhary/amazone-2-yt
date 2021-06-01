import  Header from '../components/Header'
import Image from 'next/image'
import {useSelector} from 'react-redux'
import {selectItems} from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'

export default function checkout() {
	const items = useSelector(selectItems)

	return (
	<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
			{/* left */}
			<div className="flex-grow m-5 shadow-sm">
		<Image 
			src="https://links.papareact.com/ikj"
			width={1020}
			height={250}
			objectFit="contain"
		/>

		<div className="flex flex-col p-5 space-y-10 bg-white">
		<h1 className="text-3xl border-b pb-4"> { items.length === 0 ? 'Your Amazon basket is empty' : 'shopping basket' }</h1>
		{
			items.map((item, i) => (
				<CheckoutProduct 
				key={i}
				id={item.id}
				title={item.title}
				price={item.price}
				description={item.description}
				rating={item.rating}
				image={item.image}
				hasPrime={item.hasPrime}
				/>
			))
		}

		</div>


	</div>

			{/* right */}
			<div></div>
			</main>
		</div>
	);

}

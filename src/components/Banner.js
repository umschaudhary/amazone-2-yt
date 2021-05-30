import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner(){
	return (
		<div className="relative">
		<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-trasparent bottom-0 z-20" /> 
			<Carousel
				autoplay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={500}
			>
			<div>
				<img loading="lazy" src="https://links.papareact.com/gi1" alt="image1" />
			</div>
			<div>
				<img loading="lazy" src="https://links.papareact.com/6ff" alt="image1" />
			</div>
			<div>
				<img loading="lazy" src="https://links.papareact.com/7ma" alt="image1" />
			</div>
			</Carousel>
		</div>
	)

}

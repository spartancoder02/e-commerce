"use client";



import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import EmblaCarousel from "./utils/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
	return (
		<div className="">
			
			<div className="flex items-center justify-center overscroll-x-contain">
				{/* <h1 className="absolute z-20 text-white text-5xl">E-commerce</h1> */}
				<div className="brightness-75">
					{/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
				</div>
			</div>
			<Footer />
		</div>
	);
}

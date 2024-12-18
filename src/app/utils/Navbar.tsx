"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, ChevronRight } from "lucide-react";
import { useContext } from "react";
import ItemCountContext from "@/itemCountContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "motion/react";
const ShoppingBag02Icon = (props: React.SVGProps<SVGSVGElement>) => (
	// hey
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width={24}
		height={24}
		color={"#000000"}
		fill={"none"}
		{...props}
	>
		<path
			d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
		<path
			d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
		<path
			d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
	</svg>
);

const Navbar = () => {
	const { itemCount, open, setOpen } = useContext(ItemCountContext);
	const [burgerMenuIsOpen, setBurgerMenuOpen] = useState(false);
	const burgerLine = `bg-black w-5 h-[0.5px] my-0.5 rounded transition ease transform duration-300`;
	const toggleSheet = () => {
		setOpen(!open);
	};

	const toggleBurgerMenu = () => {
		setBurgerMenuOpen(!burgerMenuIsOpen);
	};

	const navLinks = [
		{ title: "T-Shirts", href: "" },
		{ title: "Sweaters & Hoodies", href: "" },
		{ title: "Jackets & Outerwear", href: "" },
		{ title: "Accessories", href: "" },
		{ title: "Bottoms", href: "" },
		// { title: "Kids", href: "" },
		{ title: "Shop", href: "/shop" },
	];
	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 1],
			},
		},
	};

	const ulVariant = {
		opened: {
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.18,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.06,
				staggerDirection: -1,
			},
		},
	};

	const liVariant = {
		opened: {
			opacity: 1,
			y: "0%",
			transition: {
				duration: 0.85,
				ease: "easeOut",
			},
		},
		closed: {
			opacity: 0,
			y: "100%",
			transition: {
				duration: 0.65,
				ease: "easeInOut",
			},
		},
	};

	useEffect(() => {
		console.log("burgerState: ", burgerMenuIsOpen);
	}, [burgerMenuIsOpen]);

	return (
		<div className="flex flex-col bg-white sticky top-0 z-50">
			<div className="flex flex-row items-center h-14 sticky overscroll-x-contain">
				<button
					className="group cursor-pointer ml-6"
					onClick={() => toggleBurgerMenu()}
				>
					<div className="grid justify-items-center">
						<div
							className={`${burgerLine}
							${burgerMenuIsOpen ? "rotate-45 translate-y-[4.2px]" : ""}`}
						></div>
						<div
							className={`${burgerLine} ${burgerMenuIsOpen ? "opacity-0" : ""}`}
						></div>
						<div
							className={`${burgerLine}
							${burgerMenuIsOpen ? "-rotate-45 -translate-y-[4.2px]" : ""}`}
						></div>
					</div>
				</button>
				<h1 className="text-lg mx-auto">Second Bloom</h1>
				<SignedOut>
					<SignInButton>
						<User className="size-5 mr-1 cursor-pointer" />
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>

				<div className="flex flex-row gap-3 cursor-pointer mr-8">
					<ShoppingBag02Icon
						className="absolute size-5"
						onClick={() => toggleSheet()}
					/>
					<div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-black left-5 bottom-2">
						<div className="text-xs text-white">{itemCount}</div>
					</div>
				</div>

				<hr></hr>
			</div>
			<AnimatePresence>
				{burgerMenuIsOpen && (
					<div className="relative">
						<motion.div
							variants={menuVars}
							initial="initial"
							animate="animate"
							className="bg-white absolute w-screen h-screen scroll-smooth origin-top"
							exit="closed"
						>
							<div className="mt-5 ml-4 text-3xl">
								<motion.ul
									variants={ulVariant}
									className="mb-7 cursor-pointer"
									initial="closed"
									animate={burgerMenuIsOpen ? "opened" : "closed"}
									exit="closed"
								>
									{navLinks.map((link, index) => {
										return (
											<motion.li
												variants={liVariant}
												key={index}
												className="mb-4"
												
											>
												<div className="flex flex-row items-center">
													<motion.div whileTap={{ scale: 0.95 }}>
														<Link href={link.href}>
															<h1>{link.title}</h1>
														</Link>
													</motion.div>

													<ChevronRight className="size-7 ml-auto mr-3" />
												</div>
											</motion.li>
										);
									})}
								</motion.ul>
							</div>

							<hr></hr>
							<div className="mt-4 ml-4 text-lg">
								<ul>
									<li className="mb-4">Sustainability</li>
									<li className="mb-4">Wishlist</li>
									<li className="mb-4">Can we help you?</li>
									<li className="mb-4">+ 1.866.BLOOM</li>
								</ul>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			<input
				type="text"
				placeholder="Search for Second Hand Clothing"
				className="border border-gray-700 rounded-2xl px-3 py-2 mb-3 w-11/12 mx-auto"
			></input>
		</div>
	);
};

export default Navbar;

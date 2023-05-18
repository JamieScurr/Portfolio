"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

type Props = {};

const Header = (props: Props) => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className="flex flex-row justify-between p-5  sm:text-xl max-w-7xl mx-auto  overflow-hidden">
			<div>
				<h1 className="font-bold text-lg sm:text-2xl">
					<img
						className="absolute top-1 sm:w-14 w-14 sm:top-3"
						src="images/JS.svg"
						alt="Logo"
					/>
				</h1>
			</div>

			<div className="flex sm:hidden text-xl" onClick={toggleMenu}>
				{!menu ? <FaBars /> : <FaTimes />}{" "}
			</div>
			{menu && (
				<ul className="uppercase absolute right-0 mt-8 mr-5 w-fit text-right cursor-pointer space-y-2 sm:hidden">
					<li>
						<a href="images/Resume.png" target="_blank">
							<span className="text-[--green] font-bold">{"<"}</span>Resume
							<span className="text-[--green] font-bold">{"/> "}</span>
						</a>
					</li>
					<li>
						<Link to="Experience" duration={500} smooth={true}>
							{" "}
							<span className="text-[--green] font-bold">{"<"}</span>
							Experience
							<span className="text-[--green] font-bold">{"/> "}</span>
						</Link>
					</li>

					<li>
						<Link to="Contact" duration={500} smooth={true}>
							{" "}
							<span className="text-[--green] font-bold">{"<"}</span>
							Contact
							<span className="text-[--green] font-bold">{"/> "}</span>
						</Link>
					</li>
				</ul>
			)}

			<div className="hidden sm:flex cursor-pointer">
				<ul className="uppercase flex flex-row gap-10">
					<li>
						<a className="flex" href="images/Resume.png" target="_blank">
							<span className="text-[--green] font-bold">{"<"}</span>
							<p className="opacity-70 hover:opacity-100">Resume</p>
							<span className="text-[--green] font-bold">{"/> "}</span>
						</a>
					</li>
					<li>
						<Link className="flex" to="Experience" duration={500} smooth={true}>
							<span className="text-[--green] font-bold">{"<"}</span>
							<p className="opacity-70 hover:opacity-100">Experience</p>
							<span className="text-[--green] font-bold">{"/> "}</span>
						</Link>
					</li>

					<Link className="flex" to="Contact" duration={500} smooth={true}>
						<span className="text-[--green] font-bold">{"<"}</span>
						<p className="opacity-70 hover:opacity-100">Resume</p>
						<span className="text-[--green] font-bold">{"/> "}</span>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Header;

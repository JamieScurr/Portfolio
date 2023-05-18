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
				<h1 className="font-bold text-lg sm:text-2xl">JS</h1>
			</div>

			<div className="flex sm:hidden text-xl" onClick={toggleMenu}>
				{!menu ? <FaBars /> : <FaTimes />}{" "}
			</div>
			{menu && (
				<ul className="uppercase absolute right-0 mt-8 mr-5 w-fit text-right cursor-pointer  sm:hidden">
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
						<span className="text-[--green] font-bold">{"<"}</span>Contact
						<span className="text-[--green] font-bold">{"/> "}</span>
					</li>
				</ul>
			)}

			<div className="hidden sm:flex cursor-pointer">
				<ul className="uppercase flex flex-row gap-10">
					<li>
						<a href="images/Resume.png" target="_blank">
							<span className="text-[--green] font-bold">{"<"}</span>Resume
							<span className="text-[--green] font-bold">{"/> "}</span>
						</a>
					</li>
					<Link to="Experience" duration={500} smooth={true}>
						{" "}
						<span className="text-[--green] font-bold">{"<"}</span>
						Experience
						<span className="text-[--green] font-bold">{"/> "}</span>
					</Link>

					<li>
						<span className="text-[--green] font-bold">{"<"}</span>Contact
						<span className="text-[--green] font-bold">{"/> "}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

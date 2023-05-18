import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="max-w-7xl mx-auto py-16">
			<div className="flex flex-col px-8 sm:px-0 sm:flex-row gap-10 sm:gap-16">
				<div className="flex flex-col">
					<div className="flex">
						<span className="text-[--green] font-bold">{"<"}</span>Portfolio
						<span className="text-[--green] font-bold">{"/> "}</span>
					</div>
					<h1 className="mt-2">Built by Jamie Scurr</h1>
				</div>
				<div className="flex flex-col">
					<div>
						<span className="text-[--green] font-bold">{"<"}</span>Contact
						<span className="text-[--green] font-bold">{"/> "}</span>
						<p className="mt-2">Jamiescurrcs@gmail.com</p>
						<p>United Kingdom - Leicester</p>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex">
						<span className="text-[--green] font-bold">{"<"}</span>Links
						<span className="text-[--green] font-bold">{"/> "}</span>
					</div>
					<a
						className="mt-2"
						href="https://github.com/JamieScurr"
						target="_blank">
						GitHub
					</a>
					<a href="https://www.linkedin.com/in/jamiescurr/" target="_blank">
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;

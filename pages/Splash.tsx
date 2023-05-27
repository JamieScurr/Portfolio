"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Splash = (props: Props) => {
	const [Splashtext] = useTypewriter({
		words: ["Software Engineer", "Lifelong Learner", "Tinkerer"],
		loop: true,
		delaySpeed: 4000,
	});
	return (
		<div className="h-screen w-full flex flex-col items-center justify-center text-left mx-auto pb-[5vh]  overflow-hidden">
			<div className="mb-28 absolute xl:left-96 ">
				<h1 className="flex flex-row">
					<span className="text-[--green] font-bold  sm:text-3xl">{"<"}</span>
					<p className="sm:text-3xl tracking-[2px]">Hello World</p>
					<span className="text-[--green] font-bold sm:text-3xl">{"/>"}</span>
				</h1>
				<h2 className="text-3xl sm:text-6xl uppercase tracking-[2px] py-1 sm:py-3 font-bold">
					I{"'"}m Jamie Scurr
				</h2>
				<h1 className="text-xl">
					<span className="text-xl sm:text-3xl tracking-[2px] ">
						{Splashtext}
					</span>
					<Cursor cursorColor="#5cbc62" />
				</h1>
			</div>
			<div className="absolute bottom-10">
				<div className="h-[2.55rem] w-[1.55rem] justify-center items-center flex border-2 rounded-full">
					<div className="h-[0.5rem] items-center flex justify-center w-[0.25rem] animate-pulse rounded-full mb-4 bg-[--green] "></div>
				</div>
			</div>
		</div>
	);
};

export default Splash;

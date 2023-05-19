"use client";
import React from "react";

type Props = {};

const Asmpt = (props: Props) => {
	return (
		<div className="relative py-10 px-8 min-h-screen w-screen justify-center mx-auto flex flex-col  overflow-hidden">
			<div className="max-w-screen-xl sm:grid sm:grid-cols-2 sm:mx-auto sm:gap-20">
				<div>
					<div className="flex flex-col">
						<div className="flex items-center justify-center h-fit w-fit ">
							<h1></h1>
							<span className="text-[--green] font-bold sm:text-3xl">
								{"<"}
							</span>
							<p className=" sm:text-3xl tracking-[2px] font-bold">ASMPT</p>
							<span className="text-[--green] font-bold sm:text-3xl">
								{"/>"}
							</span>
							<div className="h-[1.5rem] w-[2px] bg-white/10 mx-2"></div>
							<p className="tracking-[2px] text-sm sm:text-lg">July 2023</p>
						</div>
						<h2 className="tracking-[2px] sm:text-3xl">
							Junior Software Engineer
						</h2>
					</div>
					<div className="mt-8">
						<h2 className=" decoration-[--green] decoration-2 font-semibold sm:text-xl  mb-1">
							Responsibilities
							<span className="text-[--green] font-black">:</span>
						</h2>
						<p className="text-sm sm:text-lg font-light ">
							Built and sustained the DEK TQ Platform and developed software in
							WPF using XAML for the design and MVVM as the architectural
							pattern.
						</p>

						<div>
							<h2 className=" decoration-[--green] decoration-2 font-semibold mb-1 sm:text-xl  mt-8">
								Contributions
								<span className="text-[--green] font-black">:</span>
							</h2>
							<ul className="space-y-2  list-disc  text-green-500  pl-4 text-sm sm:text-lg font-light ">
								<li className="">
									<p className="text-[#c2c2c2]">
										Successfully implemented and tested software solutions in
										accordance with internal procedures, ensuring high-quality
										output within agreed-upon timelines.
									</p>
								</li>
								<li>
									<p className="text-[#c2c2c2]">
										Developed high-quality solutions with a strong emphasis on
										writing clean code for both front-end and back-end, ensuring
										timely resolution of defects while adhering to strict
										deadlines
									</p>
								</li>
								<li>
									<p className="text-[#c2c2c2]">
										Demonstrated my ability to understand the requirements for a
										new software feature and provide an appropriate design for
										its implementation.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="">
					<h2 className=" decoration-[--green] decoration-2 mb-1 mt-8 sm:mt-0 sm:text-xl sm:pt-0 font-semibold sm:pb-8 ">
						Technical Skills<span className="text-[--green] font-black">:</span>
					</h2>
					<div>
						<ul className="mt-8 max-w-screen-lg gap-x-12 gap-y-12 md:gap-y-20 md:gap-28 md:text-lg  text-center items-left justify-start  text-xs align-middle flex flex-wrap sm:justify-start ">
							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
									decoding="async"
									loading="lazy"
									alt="home"
								/>
								<p className="pt-2 text-[--green]">C#</p>
							</li>
							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg"
									decoding="async"
									loading="lazy"
								/>
								<p className="pt-2 text-[--green]">Confluence</p>
							</li>

							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="images/xaml.svg"
									decoding="async"
									loading="lazy"
									style={{
										filter:
											"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
									}}
								/>
								<p className="pt-2 text-[--green]">XAML</p>
							</li>
							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
									decoding="async"
									loading="lazy"
								/>
								<p className="pt-2 text-[--green]">.Net</p>
							</li>
							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
									decoding="async"
									loading="lazy"
								/>
								<p className="pt-2 text-[--green]">Git</p>
							</li>
							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg"
									decoding="async"
									loading="lazy"
								/>
								<p className="pt-2 text-[--green]">BitBucket</p>
							</li>
							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
									decoding="async"
									loading="lazy"
								/>
								<p className="pt-2 text-[--green]">Jira</p>
							</li>
							<li className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] flex flex-col justify-center items-center ">
								<img
									src="images/atlassian.svg"
									decoding="async"
									loading="lazy"
								/>
								<p className="pt-2 text-[--green]">Atlassian</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Asmpt;

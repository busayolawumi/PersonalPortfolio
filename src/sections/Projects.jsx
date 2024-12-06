import React from "react";
import { projectArray } from "../Scripts/projectArray";

const Projects = () => {
	return (
		<>
			<div id="projects">
				<section className="text-white bg-[#051923] h-auto flex items-center justify-center ml-0 pt-[100px] pb-[30px]">
					<div className="flex flex-col">
						<h2 className="text-[30px] font-bold pb-[30px]">
							<u>FEATURED PROJECTS</u>
						</h2>

						{projectArray.map(
							({
								imgLink,
								name,
								description,
								languages,
								website,
								isHr,
							}) => (
								<div key={name}>
									<div className="bg-[#003554] h-auto lg:h-screen lg:max-h-[50vh] w-screen max-w-[80vw] flex lg:flex-row flex-col m-auto">
										<div className="lg:w-screen lg:max-w-[30vw] w-full box-border">
											<img
												className="h-screen lg:max-h-[50vh]  max-h-[45vh] w-full"
												src={imgLink}
												alt=""
											/>
										</div>
										<div className="w-screen max-w-[70vw] flex flex-col ml-[30px] justify-center">
											<h2 className="lg:text-[38px] md:text-[34px] text-[30px] font-bold pt-[20px] lg:text-left text-center">
												{name}
											</h2>
											<br />
											<p className="mb-[10px] w-[90%]">
												{description}
												<br />
												<br />
												{languages}
												<br />
												<br />
											</p>
											<div className="text-center">
												<a
													href={website}
													target="_blank"
													className="inline-block w-[80px] h-[30px] border rounded-[20px] lg:ml-[20vw] text-center pt-[3px] transition ease-in-out duration-200 hover:bg-white hover:text-[#051923] lg:mb-0 mb-5"
												>
													Visit
												</a>
											</div>
										</div>
									</div>
									<br />
									{isHr ? <hr /> : null}
									<br />
								</div>
							)
						)}

						<div className="text-center pb-[7vh] m-auto">
							<a
								href="https://github.com/busayolawumi?tab=repositories"
								target="_blank"
								className="border rounded-[20px] inline-block py-[12px] px-[50px] transition ease-in-out duration-200 hover:bg-white hover:text-[#051923]"
							>
								Github for More
							</a>
						</div>
					</div>
					<br />
				</section>
			</div>
		</>
	);
};

export default Projects;

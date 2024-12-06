import React from "react";

const Hero = () => {
	return (
		<>
			<section className="bg-[#051923] text-white h-screen max-h-[50vh] flex items-end">
				<div className="ml-[7%] leading-[15px]">
					<h3 className="text-[#00a6fb] xl:text-[35px] lg:text-[30px] sm:text-[23px] text-[18px] xl:mb-10 lg:mb-7 md:mb-5 sm:mb-3 mb-2">
						Olawumi Oluwabusayo
					</h3>
					<h2 className="xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[23px] font-semibold xl:mb-7 lg:mb-5 md:mb-4 sm:mb-3 mb-1">
						Self-taught Web Developer
					</h2>
				</div>
			</section>
			<section className="bg-[#003554] text-white h-screen max-h-[50vh] flex">
				<div className="ml-[7%] leading-4">
					<h2 className="xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[23px] font-semibold xl:pt-7 lg:pt-4 md:pt-3 sm:pt-2 pt-1">
						School-taught Computer Scientist
					</h2>
					<h3 className="text-[#00a6fb] xl:text-[35px] lg:text-[30px] sm:text-[23px] text-[18px] xl:mt-10 lg:mt-7 md:mt-4 sm:mt-3 mt-1">
						Well...I build websites!
					</h3>
				</div>
			</section>
			<div id="about"></div>
		</>
	);
};

export default Hero;

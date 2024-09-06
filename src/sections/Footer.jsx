import React from "react";
import {
	FaGithubSquare,
	FaLinkedin,
	FaStackOverflow,
	FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div className="text-white bg-[#051923] flex sm:flex-row flex-col sm:justify-between items-center sm:pt-[10vh] pt-[30px] sm:gap-0 gap-10">
				<div className="h-screen max-h-[20vh] flex items-end sm:ml-[5%] pb-[30px] md:grow-[0.1] grow-[0.2] justify-between sm:w-auto w-[300px]">
					<a href="https://github.com/busayolawumi" target="_blank">
						<FaGithubSquare
							className="hover:text-[#00a6fb]"
							size={31}
						/>
					</a>
					<a href="https://twitter.com/busayocodes" target="_blank">
						<FaTwitterSquare
							className="hover:text-[#00a6fb]"
							size={31}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/busayolawumi"
						target="_blank"
					>
						<FaLinkedin
							className="hover:text-[#00a6fb]"
							size={31}
						/>
					</a>
					<a
						href="https://stackoverflow.com/users/19370667/busayolawumi?tab=profile"
						target="_blank"
					>
						<FaStackOverflow
							className="hover:text-[#00a6fb]"
							size={31}
						/>
					</a>
				</div>
				<div className="h-screen max-h-[20vh] flex items-end sm:mr-[5%] sm:text-right text-center pb-[30px]">
					<div>
						{/* <p>Would you like to support me?</p>
						<div>
							<a
								target="_blank"
								href="https://www.buymeacoffee.com/busayolawumi"
							>
								<img
									className="my-[10px] sm:ml-[35%] ml-[17%]"
									src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
									width="200"
								/>
							</a>
						</div> */}
						<p>
							Copyright &copy; 2020 - 2024{" "}
							<b className="text-[#00a6fb]">
								Olawumi Oluwabusayo.
							</b>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;

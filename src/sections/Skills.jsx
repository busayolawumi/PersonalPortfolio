import React from "react";
import { skillArray } from "../Scripts/skillArray";

const Skills = () => {
	return (
		<>
			<div
				className="text-white bg-[#003554] py-[30px] h-auto flex justify-center"
				id="skills"
			>
				<div className="w-screen max-w-[80vw]">
					<h2 className="text-center sm:text-left text-[25px] sm:text-[30px] font-bold pt-[40px]">
						<u>LANGUAGES I SPEAK</u>
					</h2>
					<br />
					<br />
					<div className="flex flex-wrap justify-center gap-3">
						{skillArray.map(({ imgSrc, altText, skill }) => (
							<div key={skill}>
								<figure>
									<img
										src={imgSrc}
										alt={altText}
										className="h-[200px] w-[200px]"
									/>
									<figcaption className="text-center font-bold">
										{skill}
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;

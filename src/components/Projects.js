import firstSection from '../images/first-section.png';

import Header from './Header.js';
import Footer from './Footer.js';

import { projectsList } from './Variables.js';

export default function Projects() {
	return(
		<div className="font-['Lexend_Deca']">
			<Header activeTab="projects" customStyle={"bg-[#CFEAFA]"} />
			<div className="bg-[#CFEAFA]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[#21739D] py-[50px]">
						<div className="flex justify-between items-start gap-[50px]">
							<div className="xl:max-w-[650px]">
								<div className="text-[40px]">Shaping the Future</div>
								<div className="text-[30px] text-[#73A729]">One Layout at a Time</div>
								<div className="my-[30px]">
									At VGD Developers, every project is more than just land—it’s a well-planned, legally approved, and high-growth opportunity for homebuyers and investors alike. Our DTCP-approved layouts are strategically located, infrastructure-ready, and designed for long-term value.
								</div>
								<a href="/formsubmit">
									<div className="w-fit text-center bg-[#21739D] py-[10px] px-[20px] rounded-[5px] cursor-pointer mt-[20px]">
										<span className="text-[#ffffff] font-medium">
											Book an Appointment
										</span>
									</div>
								</a>
							</div>
							<img src={firstSection} className="max-lg:hidden w-[40%]" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] pt-[100px] pb-[50px]">
					<div className="text-[32px] text-center text-[#21739D]">
						Our Projects
					</div>
					<div className="flex flex-col gap-[100px] mt-[50px] mb-[100px]">
						{projectsList.map((project, index) => (
							<div className="flex max-lg:flex-col items-center justify-center gap-[50px] mx-auto border-solid border-[#d8d8d8] max-lg:border-[2px] max-lg:p-[20px] rounded-[20px]">
								<div className="xl:w-[40%]">
									<div className="text-[24px] text-[#73A729] max-lg:text-center">{project.title}</div>
									<div className="text-[18px] text-[#21739D] my-[10px]">{project.subtitle}</div>
									<div>{project.description}</div>
									<div className="text-[18px] text-[#21739D] mt-[30px]">Highlights</div>
									<ul className="list-disc list-inside">
										{project.highlights.map((item, index) => (
											<li>{item}</li>
										))}
									</ul>
								</div>
								<img src={project.imageSource} className="lg:w-[40%] rounded-[15px]" />
							</div>
						))}
					</div>
					<div className="text-[24px] text-center text-[#21739D]">
						Ready to Book a Site Visit?
					</div>
					<div className="text-center my-[20px] text-[18px]">
						Join 100+ happy clients who’ve already secured their future with VGD Promoters Group. Whether you’re buying your first plot or expanding your investments—your ideal layout is waiting.
					</div>
					<a href="tel:+91 8807553748">
						<div className="bg-[#21739D] w-fit mx-auto h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer font-medium">
							<span className="text-[#ffffff]">
								Contact Us
							</span>
						</div>
					</a>
				</div>
			</div>
			<Footer />
		</div>
	)
}
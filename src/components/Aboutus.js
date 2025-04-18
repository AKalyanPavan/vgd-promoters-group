import firstSection from '../images/first-section.png';
import whyVGD from '../images/whyVGD.svg';
import check from '../images/check.svg';
import founder from '../images/aboutus-page/founder.png';

import Header from './Header.js';
import Footer from './Footer.js';

import { aboutUsHighlights, whyChooseVGDAboutUs } from './Variables.js';

export default function AboutUs() {
	return(
		<>
			<Header activeTab="aboutus" customStyle={"bg-[#FFFFFF]"} />
			<div className="font-['Lexend_Deca']">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="py-[50px]">
						<div className="flex justify-between items-start gap-[50px]">
							<div className="xl:max-w-[650px]">
								<div className="text-[#21739D] text-[40px]">VGD Promoters Group</div>
								<div className="text-[30px] text-[#73A729]">Where Every Plot Comes with a Promise</div>
								<div className="my-[20px] text-[18px]">
									At VGD Developers, real estate is not just a business—it's a promise of transparency, trust, and long-term growth. Founded by Er. R. Vijay, a civil engineer turned visionary entrepreneur, our journey began in 2013 with a mission to simplify and secure property ownership in Tamil Nadu.
								</div>
								<div className="text-[18px]">
									With over a decade of industry expertise and 100+ successful projects, VGD Developers has become a trusted name in land development, DTCP approvals, property consultation, and real estate investment solutions.
								</div>
								<div className="w-fit text-center bg-[#21739D] py-[10px] px-[20px] rounded-[5px] cursor-pointer mt-[20px]">
									<span className="text-[#ffffff] font-medium">
										Book an Appointment
									</span>
								</div>
							</div>
							<img src={firstSection} className="max-lg:hidden w-[40%]" />
						</div>
						<div className="my-[70px] text-[18px]">
							<div>
								<div className="text-[#21739D] text-[32px]">
									Our Story
								</div>
								<div className="pl-[20px] mt-[5px]">
									<ul className="list-disc flex flex-col gap-[10px]">
										<li>
											From humble beginnings to one of Tamil Nadu’s most respected real estate firms, our growth has been powered by a simple belief: Clients come first. Always.
										</li>
										<li>
											Whether you're an investor, builder, homebuyer, or developer, we offer a complete ecosystem—from land identification and legal liaisoning to plot sales and construction contracting. Every step is backed by expert insights, legal clarity, and seamless execution.
										</li>
									</ul>
								</div>
							</div>
							<div className="my-[30px]">
								<div className="text-[#21739D] text-[32px]">
									Our Vision
								</div>
								<div className="pl-[20px] mt-[5px]">
									<ul className="list-disc flex flex-col gap-[10px]">
										<li>
											To be Tamil Nadu’s most trusted real estate brand, delivering legally approved, high-quality properties with complete transparency.
										</li>
									</ul>
								</div>
							</div>
							<div>
								<div className="text-[#21739D] text-[32px]">
									Our Mission
								</div>
								<div className="pl-[20px] mt-[5px]">
									<ul className="list-disc flex flex-col gap-[10px]">
										<li>
											To offer single-window DTCP, RERA & Panchayat approvals for real estate developers and individuals.
										</li>
										<li>
											To promote strategically located residential and commercial projects with excellent resale and rental potential.
										</li>
										<li>
											To assist customers in making secure, profitable, and legally compliant investments.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#CFEAFA]">
					<div className="text-[#21739D] pt-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
						<div className="text-[32px] text-center font-medium">
							What We Stand For
						</div>
						<div className="grid min-[1100px]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[50px]">
							{aboutUsHighlights.map((item, index) => (
								<div className="flex items-center gap-[30px] bg-white p-[20px] border-solid border-[1.5px] border-[#21739D] rounded-[10px]">
									<img src={item.imageSource} className="mt-[4px] w-[50px]" />
									<div>
										<div className="font-medium mb-[5px] text-[#73A729]">{item.title} </div>
										<span className="text-black">{item.description}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="bg-[#CFEAFA]">
					<div className="text-[#21739D] pt-[100px] pb-[70px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
						<div className="text-[32px] text-center font-medium mb-[50px]">
							Why Choose VGD Promoters Group?
						</div>
						<div className="flex items-center justify-center gap-[40px]">
							<img src={whyVGD} className="w-[500px] max-xl:hidden" />
							<div className="w-fit flex flex-col xl:gap-[30px] gap-[20px] md:max-w-[500px]">
								{whyChooseVGDAboutUs.map((item, index) => (
									<div className="flex items-start gap-[10px]">
										<img src={check} />
										<span>{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#ffffff]">
					<div className="pt-[50px] pb-[70px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
						<div className="text-[#21739D] text-[32px] text-center font-medium mb-[50px]">
							Meet Our Founder
						</div>
						<div className="flex max-lg:flex-col items-center gap-[50px]">
							<div className="lg:w-[70%]">
								<div className="">
									<div className="text-[28px] highlightGreen w-fit">Er. R. Vijay</div>
									<div className="text-[18px] highlightGreen w-fit my-[10px] font-medium">Founder & CEO, VGD Developers</div>
									<div className="text-[18px] text-[#21739D]">Civil Engineer | Real Estate Strategist | DTCP Liaison Expert</div>
								</div>
								<div className="mt-[10px] mb-[50px]">
									With a strong foundation in civil engineering and a passion for ethical development, Er. R. Vijay has shaped VGD Developers into a symbol of trust and growth. His network spans government institutions, business communities (BNI, Rotary), and real estate forums—making VGD a name clients rely on.
								</div>
								<div className="text-[18px] text-[#21739D]">
									Let’s Build Your Future, Together
								</div>
								<div>
									Whether you’re searching for a secure plot, need help with approvals, or planning your next big investment
									<br />
									—VGD Developers is your dependable partner.
								</div>
							</div>
							<div className="md:w-[30%]">
								<img src={founder} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
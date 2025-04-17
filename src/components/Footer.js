import logoWhite from '../images/logo-white.svg';

import mail from '../images/mail.svg';
import location from '../images/location.svg';

export default function Footer() {
	return(
		<div className="bg-[#21739D] text-white text-left text-[14px]">
			<div className="py-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Lexend_Deca']">
				<div className="mb-[30px]">
					<img className="w-[114px] max-xl:mx-auto" src={logoWhite} />
				</div>
				<div className="flex xl:flex-row flex-col justify-between">
					<div className="">
						<div className="max-w-[350px] leading-[24px] mx-auto max-xl:text-center">
							Whether you're seeking DTCP-approved plots, end-to-end construction services, or expert property consultation —VGD Promoters Group delivers unmatched value with over a decade of industry leadership and 100+ successful projects.
						</div>
						<div className="flex gap-[20px] text-white mt-[30px] max-xl:justify-center">
							<span>Facebook</span>
							<span>Instagram</span>
							<span>Youtube</span>
							<span>Linkedin</span>
						</div>
					</div>
					<div className="flex gap-[100px] max-xl:my-[50px] max-xl:justify-center">
						<div className="flex flex-col gap-[24px]">
							<span>Home</span>
							<span>About Us</span>
							<span>Services</span>
						</div>
						<div className="flex flex-col gap-[24px]">
							<span>Projects</span>
							<span>Clients</span>
							<span>Contact Us</span>
						</div>
					</div>
					<div className="flex flex-col gap-[24px]">
						<a href="">
							<div className="flex gap-[20px] max-xl:justify-center">
								<img src={location} className="w-[30px]" />
								<span>
									510, Vijay Builders, Dharapuram Main Road, 
									<br />
									Perichipalayam, Tirupur - 641604
								</span>
							</div>
						</a>
						<a href="mailto:vgdpromoters@gmail.com">
							<div className="flex gap-[20px] ml-[2px] max-xl:justify-center">
								<img src={mail} className="w-[25px]" />
								<span>
									vgdpromoters@gmail.com
								</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
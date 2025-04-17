import logo from '../images/logo.svg';
import phone from '../images/phone.svg';

export default function Header({activeTab, customStyle}) {

	const underlineClass = 'underline underline-offset-8 decoration-2';

	return(
		<div className={`top-[0px] sticky z-[1] font-['Lexend_Deca'] text-[#21739D] ${customStyle}`}>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-[10px] flex justify-between items-center">
				<a href="/">
					<img src={logo} className="w-[100px]" />
				</a>
				<div className="flex lg:gap-[30px] gap-[20px] max-lg:hidden">
					<a href="/">
						<span className={`cursor-pointer ${activeTab == 'home' ? underlineClass : ''}`}>Home</span>
					</a>
					<span className={`cursor-pointer ${activeTab == 'aboutus' ? underlineClass : ''}`}>About Us</span>
					<a href="/services">
						<span className={`cursor-pointer ${activeTab == 'services' ? underlineClass : ''}`}>Services</span>
					</a>
					<span className={`cursor-pointer ${activeTab == 'projects' ? underlineClass : ''}`}>Projects</span>
					<a href="/contact-us">
						<span className={`cursor-pointer ${activeTab == 'contactus' ? underlineClass : ''}`}>Contact Us</span>
					</a>
				</div>
				<a href="tel:+91 8807553748">
					<div className="bg-[#21739D] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer font-medium">
						<img src={phone} />
						<span className="text-[#ffffff] ml-[10px]">
							Call Us Now
						</span>
					</div>
				</a>
			</div>
		</div>
	)
}
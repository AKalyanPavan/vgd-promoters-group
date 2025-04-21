import FormComponent from './FormComponent.js';

export default function FormSubmit() {
	return(
		<div className="bg-[#cfeafa] pb-[100px] font-['Lexend_Deca'] sm:px-[50px] px-[20px]">
			<div className="text-center text-[#21739D] sm:text-[48px] text-[36px] pb-[30px] pt-[50px]">VGD Promoters</div>
			<div className="bg-white max-w-[700px] mx-auto sm:px-[50px] px-[20px] border-solid border-[1.5px] border-[#21739D] pt-[50px] rounded-[20px] shadow-[1px_1px_50px_50px_rgba(0,0,0,0.05)]">
				<FormComponent />
			</div>
		</div>
	)
}
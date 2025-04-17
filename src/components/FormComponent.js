export default function FormComponent() {

	function onInputClicked(inputId, errorMessageId) {
	    let inputDiv = document.getElementById(inputId);
	    let inputLabel = inputDiv.getElementsByTagName("label")[0];
	    let inputText = inputDiv.getElementsByTagName("input")[0];
	    let errorMessage = document.getElementById(errorMessageId);;

	    inputLabel.style.animationName = "decreaseFontsize";
	    inputLabel.style.animationDuration = "0.2s";

	    if(!errorMessage.classList.contains("invisible")) {
            errorMessage.classList.add("invisible");
        }

	    setTimeout(function() {
	        inputLabel.classList.remove("text-[#677788]");
	        inputLabel.classList.add("text-[12px]");
	        inputLabel.classList.add("mb-[50px]");
	        inputLabel.classList.add("text-[#37405E]");
	    }, 100);

	    inputText.focus();
	}

	function onInputFocusOut(inputId) {
	    let inputDiv = document.getElementById(inputId);
	    let inputLabel = inputDiv.getElementsByTagName("label")[0];
	    let inputText = inputDiv.getElementsByTagName("input")[0];

	    if (!inputText.value.trim()) {
	      
	        inputLabel.style.animationName = "increaseFontsize";
	        inputLabel.style.animationDuration = "0.2s";

	        setTimeout(function() {
	            inputLabel.classList.add("text-[#677788]");
	            inputLabel.classList.remove("text-[12px]");
	            inputLabel.classList.remove("mb-[50px]");
	            inputLabel.classList.remove("text-[#37405E]");
	        }, 100);
	    }
	}

	return(
		<>
			<div className="text-center text-[20px]">We are Happy to help</div>
			<div className="pt-[50px] py-[30px] flex flex-col gap-[20px]">
				<div className="mb-[10px]">
					<div>Choose Property Requirement*</div>
					<div className="flex gap-[30px]">
						<div className="flex gap-[10px]">
							<input type="radio" id="buy" name="buyorsell" value="buy" />
							<label for="buy">Buy</label>
						</div>
						<div className="flex gap-[10px]">
							<input type="radio" id="sell" name="buyorsell" value="sell" />
							<label for="sell">Sell</label>
						</div>
					</div>
				</div>
				<div className="">
				    <div id="fullName" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("fullName", "errorName")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Full name</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("fullName")} placeholder="" type="text" id="fname" name="fname" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorName">Full name Cannot be Empty</div>
				</div>
				<div className="">
				    <div id="email" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("email", "errorEmail")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Email</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("email")} placeholder="" type="text" id="femail" name="femail" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorEmail">Please provide a valid email</div>
				</div>
				<div className="">
				    <div id="phoneNumber" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("phoneNumber", "errorPhonenumber")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Phone Number</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("phoneNumber")} placeholder="" type="text" id="fphonenumber" name="fphonenumber" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPhonenumber">Please provide valid phone number</div>
				</div>
				<div className="">
				    <div id="budget" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("budget", "errorBudget")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Budget (Rs.)</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("budget")} placeholder="" type="text" id="fbudget" name="fbudget" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorBudget">Please provide valid budget</div>
				</div>
				<div className="">
				    <div id="placeofInterest" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("placeofInterest", "errorPlaceofInterest")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Place of Interest</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("placeofInterest")} placeholder="" type="text" id="fplaceofinterest" name="fplaceofinterest" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPlaceofInterest">Please provide place of interest</div>
				</div>
				<div id="bookVisitNowButton" className="book-visit-button w-fit text-center bg-[#21739D] py-[10px] px-[30px] rounded-[5px] cursor-pointer mx-auto">
					<span className="text-[#ffffff] tracking-tight">
						Submit
					</span>
				</div>
			</div>
		</>
	)
}
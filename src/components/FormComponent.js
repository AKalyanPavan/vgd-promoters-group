export default function FormComponent() {

	let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let phoneregex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

	function onInputClicked(inputId, errorMessageId) {
	    let inputDiv = document.getElementById(inputId);
	    let inputLabel = inputDiv.getElementsByTagName("label")[0];
	    let inputText = inputDiv.getElementsByTagName("input")[0];
	    let errorMessage = document.getElementById(errorMessageId);

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

	function onSelectClicked(errorMessageId) {

		let errorMessage = document.getElementById(errorMessageId);

		if(!errorMessage.classList.contains("invisible")) {
            errorMessage.classList.add("invisible");
        }
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

	function validateInput() {
		let errorPropertyRequirement = document.getElementById("errorPropertyRequirement");
	    let errorName = document.getElementById("errorName");
	    let errorEmail = document.getElementById("errorEmail");
	    let errorPhonenumber = document.getElementById("errorPhonenumber");
	    let errorBudget = document.getElementById("errorBudget");

	    let fPropertyRequirement = document.getElementById("fpropertyrequirement");
	    let fname = document.getElementById("fname");
	    let femail = document.getElementById("femail");
	    let fphonenumber = document.getElementById("fphonenumber");
	    let fbudget = document.getElementById("fbudget");
	    let fPlaceofIntrest = document.getElementById("fplaceofinterest");

	    let isError = false;

	    if (fPropertyRequirement.value == "none") {
	    	errorPropertyRequirement.classList.remove("invisible");
	        isError = true;
	    }

	    if (!fname.value.trim()) {
	        errorName.classList.remove("invisible");
	        isError = true;
	    }

	    if (!emailregex.test(femail.value)) {
	        errorEmail.classList.remove("invisible");
	        isError = true;
	    }

	    if (!phoneregex.test(fphonenumber.value)) {
	        errorPhonenumber.classList.remove("invisible");
	        isError = true;
	    }

	    if (!fbudget.value || fbudget.value < 1) {
	    	errorBudget.classList.remove("invisible");
	        isError = true;
	    }

	    if (!isError) {

	    	makeRecordinCRM(
	    		fPropertyRequirement.value,
	    		fname.value,
	    		femail.value,
	    		fphonenumber.value,
	    		fbudget.value,
	    		fPlaceofIntrest.value
	    	);

	        // Making input values empty
	        fPropertyRequirement.value = 'none'
	        fname.value = "";
	        femail.value = "";
	        fphonenumber.value = "";
	        fbudget.value = "";
	        fPlaceofIntrest.value = "";

	        onInputFocusOut("fullName");
	        onInputFocusOut("email");
	        onInputFocusOut("phoneNumber");
	        onInputFocusOut("budget");
	        onInputFocusOut("placeofInterest");

	        // Opening thank-you modal
	        openThankYouModal();

	        // Closing thank-you modal
	        setTimeout(closeThankYouModal, 5000);
	    }   
	}

	function makeRecordinCRM(propertyRequirement, name, email, phonenumber, budget, placeofIntrest) {

		const zapikey = process.env.REACT_APP_ZAPIKEY;

		let paramsObject = {
			full_name: name,
			email: email,
			mobile: phonenumber,
			budget: budget,
			place_of_interest: placeofIntrest,
			property_requirement: propertyRequirement
		}

		// Convert to JSON string
		const jsonString = JSON.stringify(paramsObject);

		// Encode the string
		const encodedParams = encodeURIComponent(jsonString);

		// Construct the full URL
		const url = `https://www.zohoapis.in/crm/v7/functions/create_lead_api/actions/execute?auth_type=apikey&zapikey=${zapikey}&params=${encodedParams}`;

		fetch(url)
			.then((response) => {
				debugger
				if (response.ok) {
					console.log("✅ Success");
					return response.text();
				} else {
					console.error("❌ Failed with status:", response.status);
					throw new Error("Request failed");
				}
			})
			.then((result) => {
				debugger
				console.log("Result:", result);
			})
			.catch((error) => {
				debugger
				console.error("❌ Error occurred:", error.message);
				alert(`Network error or unexpected issue occurred. Please try again. \n ${error.message}`);
			});
	}

	function closeThankYouModal() {
	    let thankYouModal = document.getElementById("thankYouModal");
	    let modalOverlay = document.getElementById("modalOverlay");
	    if(!thankYouModal.classList.contains("hidden")){
	        thankYouModal.classList.add("hidden");
	        modalOverlay.classList.add("hidden");
	    }
	}

	function openThankYouModal() {
	    let thankYouModal = document.getElementById("thankYouModal");
	    let modalOverlay = document.getElementById("modalOverlay");
	    if (thankYouModal.classList.contains("hidden")) {
	        thankYouModal.classList.remove("hidden");
	        modalOverlay.classList.remove("hidden");
	    }
	}

	return(
		<>
			<div className="text-center text-[24px] text-[#21739D]">We are Happy to help</div>
			<div className="pt-[50px] py-[30px] flex flex-col gap-[20px]">
				<div className="mb-[10px]">
					<div className="mb-[10px]">Choose Property Requirement*</div>
					<select className="border-solid border-[1.5px] border-[#37405E] p-[5px] rounded-[5px]" name="fpropertyrequirement" id="fpropertyrequirement" onClick={() => onSelectClicked("errorPropertyRequirement")}>
					    <option value="none" selected>None</option>
					    <option value="buy">Buy</option>
					    <option value="sell">Sell</option>
					</select>
					<div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPropertyRequirement">Please select a property requirement</div>
				</div>
				<div className="">
				    <div id="fullName" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("fullName", "errorName")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Full name</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("fullName")} placeholder="" type="text" id="fname" name="fname" />
				    </div>
				    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorName">Full name Cannot be Empty</div>
				</div>
				<div className="">
				    <div id="email" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("email", "errorEmail")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Email</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("email")} placeholder="" type="text" id="femail" name="femail" />
				    </div>
				    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorEmail">Please provide a valid email</div>
				</div>
				<div className="">
				    <div id="phoneNumber" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("phoneNumber", "errorPhonenumber")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Phone Number</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("phoneNumber")} placeholder="" type="text" id="fphonenumber" name="fphonenumber" />
				    </div>
				    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPhonenumber">Please provide valid phone number</div>
				</div>
				<div className="">
				    <div id="budget" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("budget", "errorBudget")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Budget (Rs.)</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("budget")} placeholder="" type="number" id="fbudget" name="fbudget" />
				    </div>
				    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorBudget">Please provide valid budget</div>
				</div>
				<div className="">
				    <div id="placeofInterest" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("placeofInterest", "errorPlaceofInterest")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Place of Interest</label>
				        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("placeofInterest")} placeholder="" type="text" id="fplaceofinterest" name="fplaceofinterest" />
				    </div>
				    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPlaceofInterest">Please provide place of interest</div>
				</div>
				<div id="bookVisitNowButton" className="book-visit-button w-fit text-center bg-[#21739D] py-[10px] px-[30px] rounded-[5px] cursor-pointer mx-auto" onClick={() => validateInput()}>
					<span className="text-[#ffffff] tracking-tight">
						Submit
					</span>
				</div>
			</div>
			<div id="modalOverlay" className="w-[100%] bg-[#000000ab] fixed top-[0px] left-[0px] h-[100%] z-[5] hidden">
				<div id="thankYouModal" className="w-[100%] h-[100%] bg-[#7f808080] fixed z-[6] text-center hidden">
				    <div style={{
				        transform: "translate(-50%, -50%)"
				    }}
				        className="text-[#37405E] fixed bg-[#c2d9ff] top-[50%] left-[50%] py-[30px] px-[10px] sm:w-[400px] w-[90%] rounded-[10px] z-[5] leading-[35px] border-solid border-[2px] border-[#37405e]">
				        <div className="bg-[#37405E] w-max px-[15px] py-[18px] rounded-[50%] mx-auto">
				            <svg width="30" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				                <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
				            </svg>
				        </div>
				        <div className="text-[30px] font-semibold my-[20px]">Thank You!</div>
				        <div>We'll reach You Out Soon!</div>
				        <div className="bg-[#dc3737] text-[#FFFFFF] cursor-pointer rounded-[5px] my-[20px] w-max mx-auto px-[20px] font-medium" onClick={() => closeThankYouModal()}>Close</div>
				    </div>
				</div>
			</div>
		</>
	)
}
const kp1 = document.getElementById('kp1');
const kp2 = document.getElementById('kp2');
const message = document.getElementById('formMessage');

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.display = "inline";
		kp2.style.backgroundColor = "#fff0f3";
		kp1.value = "";
		kp2.value = "";
		kp1.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = `Your rate: ${range.value}`;
}
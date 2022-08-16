const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const countdown = () => {
	//Set the countdown Date
	const countdownDate = new Date("Jul 27, 2023 00:00:00").getTime();
	//Set the current date / time
	const now = new Date().getTime();
	//Calculate the gap between the countdown date and now
	const gap = countdownDate - now;

	// Calculate time

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	//Calculate the countdown time
	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	//Update the HTML with the text created
	days.innerText = textDay;
	hours.innerText = textHour;
	minutes.innerText = textMinute;
	seconds.innerText = textSecond;

	if (gap < 0) {
		document.querySelector(".h1text").innerText = "Happy Birthday!!!!!";
	}
};
setInterval(countdown, 1000);

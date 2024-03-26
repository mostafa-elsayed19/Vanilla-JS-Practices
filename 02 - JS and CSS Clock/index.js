const hand = document.querySelectorAll(".hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
function setDate() {
	const date = new Date();

	const seconds = date.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = date.getMinutes();
	const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hours = date.getHours();
	const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	if (
		seconds !== 0 &&
		seconds !== 60 &&
		mins !== 0 &&
		mins !== 60 &&
		hours !== 0 &&
		hours !== 12
	) {
		// hand.forEach((hand) => {
		// 	hand.style.transition = "all 0.05";
		// 	hand.style.transitionTimingFunction =
		// 		"cubic-bezier(0.22, 3.33, 0.58, 1)";
		// });
	}
}
setInterval(setDate, 1000);

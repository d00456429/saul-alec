let flip = document.getElementById("flip");
let result = document.getElementById("result");

flip.onclick = () => {
	let choice = Math.floor(Math.random() * 2);
	if (choice === 0) {
		result.innerHTML = "Heads";
	} else {
		result.innerHTML = "Tails";
	}
};

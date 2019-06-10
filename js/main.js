var link = document.querySelector(".address-button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".close-cross");
var form = document.querySelector(".modal-form");
var myName = document.querySelector(".modal-name");
var email = document.querySelector(".modal-email");
var letter = document.querySelector(".modal-letter");
var storageName = localStorage.getItem("myName");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	myName.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
	if (!myName.value || !email.value || !letter.value) {
	evt.preventDefault();
	console.log("Введите имя");
	} 
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains ("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show")
		}
	}
});
































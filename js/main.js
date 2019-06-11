var link = document.querySelector(".address-button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".close-cross");
var form = document.querySelector(".modal-form");
var myName = document.querySelector(".modal-name");
var email = document.querySelector(".modal-email");
var letter = document.querySelector(".modal-letter");
var buttonEsc = 27;

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	myName.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!myName.value || !email.value || !letter.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === buttonEsc) {
		if (popup.classList.contains ("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
































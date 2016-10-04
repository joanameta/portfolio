// Hamburger Menu
function hamburgerMenu() {
	var hamburger = document.getElementById('top-menu');

	if (hamburger.className === 'hide-menu') {
		hamburger.className = '';
	} else {
		hamburger.className = 'hide-menu';
	}
}

hamburger.onclick = hamburgerMenu;
// Hamburger Menu


// Mini slider
var slides = [];

	for (i = 1; i < 4; i++){
		var pobierz = document.querySelector("#slide" + i);
		slides.push(pobierz);
	}

var currentSlide = 0;
function changeSlide() {
		slides[currentSlide].className = 'inactive-slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'active-slide';
}

setInterval(changeSlide, 6000);
// Mini slider koniec



// Parallax
var parallaximg = document.querySelector("#about-me img");
var scrollheight = document.body.scrollHeight;
var windowheight = window.innerHeight;

function parallax(){
	if (window.innerWidth > 760) {
		var scrolltop = window.pageYOffset ;
 		var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100;
 		parallaximg.style.top = -scrolltop * .2 + 'px';
	}
}

window.addEventListener('scroll', function(){
 requestAnimationFrame(parallax);
}, false);
// Parallax


// Skill slider
var tab2 = [];

	for (a = 1; a < 4; a++){
		var sslider = document.querySelector("#sk" + a);
		tab2.push(sslider);
	}

var currentSlide2 = 0;
function nextSlide() {
    goToSlide(currentSlide2+1);
}

function previousSlide() {
    goToSlide(currentSlide2-1);
}

function goToSlide(n) {
    tab2[currentSlide2].className = 'inactive-slide';
    currentSlide2 = (n+tab2.length)%tab2.length;
    tab2[currentSlide2].className = 'active-slide';
}

var next = document.getElementById('next');
var previous = document.getElementById('prev');

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};
// Skill slider



// active tab
// nadawanie tych samych klas i id li'kom oraz divom z projektami
linki = document.querySelectorAll('.project-list li a');
projekty = document.querySelectorAll('.screens div');
for (i=0; i < linki.length; i++) {
	linki[i].classList.add("projectasa" + i);
	projekty[i].setAttribute('id', 'projectasa' + i);

	linki[i].onmouseover = function() {
		var aktywnylink = this.className.toString();
		aktywnylink = aktywnylink.charAt(aktywnylink.length - 1);
		var liczba = parseInt(aktywnylink);

		for (k=0; k < projekty.length; k++) {
			projekty[k].classList.remove("active-tab");
		}

		projekty[liczba].classList.add("active-tab");
	}
}
// active tab


// progress bar
var position = document.querySelector("#hamburger");
function progressbar(){
	if (window.innerWidth > 760) {
		var scrolltop = window.pageYOffset ;
 		var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100;
 		position.style.top = -scrolltop * .2 + 'px';
 		var calk = parseInt(scrollamount).toString();

 		var progres = document.querySelector('.scroll-progress-bar');

 		with (progres.style) {
	        width = calk + '%';
    	}
	}
}

window.addEventListener('scroll', function(){
 requestAnimationFrame(progressbar);
}, false);
// progress bar


// validate
document.querySelector('#submit').onclick = function () {
	var input = document.querySelectorAll('input');
  var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	var error = document.querySelector(".alert");
	var regName = /^[\D]{3,}\s+[\D]{3,}$/;
	var regMail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

	for (var i = 0; i < input.length; i++) {

		if (!regName.test(name.value)) {
				name.className = 'inValid';
				error.className = 'alert visible';
				error.innerHTML = "<p>Wprowadź poprawnie Imię i Nazwisko</p>";
				return false;
			} else {
				error.className = 'alert';
				name.className = '';
			}

		if (!regMail.test(email.value)) {
					email.className = 'inValid';
					error.className = 'alert visible';
					error.innerHTML = "<p>Wprowadź poprawnie adres e-mail</p>";
					return false;
			} else {
					error.className = 'alert';
					email.className = '';
				}

		if (message.value == "") {
					message.className = 'inValid';
					error.className = 'alert visible';
					error.innerHTML = "<p>Wprowadź wiadomość</p>";
					return false;
				} else {
					sprawdzFormularz();
					error.className = 'alert';
					message.className = '';
					error.className = 'alert visible';
					error.innerHTML = '<p class="succes"> Trwa wysyłanie ...</p>' + '<img src="img/reload.gif"/>';
					return true;
				}
	}
}
// validate


// number of characters
function messageValue() {
	var entry = document.getElementById('message').value.length;
	var limit = 300;
	var message = "Pozostało " + (limit - entry) + " znaków do wprowadzenia";
	var printMessage = document.querySelector("small").innerHTML = message;
}

window.addEventListener('input', function(){
 requestAnimationFrame(messageValue);
}, false);
// number of characters



// validate php
function sprawdzFormularz() {
	var zadanie = "";
	zadanie = new XMLHttpRequest();
	var poleName = document.getElementById('name').value;
	var poleMail = document.getElementById('email').value;
	var poleMsg = document.getElementById('message').value;
	var url = "form.php";

	zadanie.open("POST", url, true);
	zadanie.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	zadanie.onload = function(event){
		console.log(zadanie.response);
		var wynik = document.querySelector(".alert");
		wynik.className = 'alert visible';
		wynik.innerHTML = zadanie.responseText;
	};
	zadanie.onerror = function() {
  		console.log('There was an error!');
	};
	zadanie.send('&name=' + poleName + '&email=' + poleMail + poleMsg);
}
// validate php

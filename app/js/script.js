// Hamburger Menu
(function() {
var hamburgerMenu = function() {
	var hamburger = document.getElementById('top-menu');

	if (hamburger.className === 'hide-menu') {
		hamburger.className = '';
	} else {
		hamburger.className = 'hide-menu';
	}
}

hamburger.onclick = hamburgerMenu;
})();
// Hamburger Menu



// Mini slider
(function() {
var slides = [];

	for (i = 1; i < 4; i++){
		var slideTab = document.querySelector("#slide" + i);
		slides.push(slideTab);
	}

var currentSlide = 0;
var changeSlide = function() {
		slides[currentSlide].className = 'inactive-slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'active-slide';
}

setInterval(changeSlide, 6000);
})();
// Mini slider koniec



// Parallax
(function() {
var parallaximg = document.querySelector("#about-me img");
var scrollheight = document.body.scrollHeight;
var windowheight = window.innerHeight;

var parallax = function(){
	if (window.innerWidth > 760) {
		var scrolltop = window.pageYOffset ;
 		var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100;
 		parallaximg.style.top = -scrolltop * .2 + 'px';
	}
}

window.addEventListener('scroll', function(){
 requestAnimationFrame(parallax);
}, false);
})();
// Parallax



// Skill slider
(function() {
var skillTab = [];

for (a = 1; a < 4; a++){
	var sslider = document.querySelector("#sk" + a);
	skillTab.push(sslider);
}

var skillSlide = 0;
var nextSlide = function() {
    goToSlide(skillSlide+1);
}

var previousSlide = function() {
    goToSlide(skillSlide-1);
}

var goToSlide = function(n) {
    skillTab[skillSlide].className = 'inactive-slide';
    skillSlide = (n+skillTab.length)%skillTab.length;
    skillTab[skillSlide].className = 'active-slide';
}

var next = document.getElementById('next');
var previous = document.getElementById('prev');

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};
})();
// Skill slider



// active tab
(function() {
projectList = document.querySelectorAll('.project-list li a');
projects = document.querySelectorAll('.screens div');

for (i=0; i < projectList.length; i++) {
	projectList[i].classList.add("projectasa" + i);
	projects[i].setAttribute('id', 'projectasa' + i);

	projectList[i].onmouseover = function() {
		var activeLink = this.className.toString();
		activeLink = activeLink.charAt(activeLink.length - 1);
		var liczba = parseInt(activeLink);

		for (k=0; k < projects.length; k++) {
			projects[k].classList.remove("active-tab");
		}

		projects[liczba].classList.add("active-tab");
	}
}
})();
// active tab



// progress bar
(function() {
var position = document.querySelector("#hamburger");
var scrollheight = document.body.scrollHeight;
var windowheight = window.innerHeight;

var progressbar = function(){
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
})();
// progress bar



// validate
(function() {

	// ajax
	var checkForm = function(){
		var ajax = "";
		ajax = new XMLHttpRequest();
		var poleName = document.getElementById('name').value;
		var poleMail = document.getElementById('email').value;
		var poleMsg = document.getElementById('message').value;
		var url = "form.php";

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		ajax.onload = function(event){
			var result = document.querySelector(".alert");
			result.className = 'alert visible';
			result.innerHTML = ajax.responseText;
		};
		ajax.onerror = function() {
	  		console.log('There was an error!');
		};
		ajax.send('&name=' + poleName + '&email=' + poleMail + '&message=' + poleMsg + "&g-recaptcha-response=" + grecaptcha.getResponse());
	}
	// ajax

document.querySelector('#submit').onclick = function () {
	var input = document.querySelectorAll('input');
  var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	var error = document.querySelector(".alert");
	var regName = /^[\D]{3,}\s+[\D]{3,}$/;
	var regMail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

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
					checkForm();
					error.className = 'alert';
					message.className = '';
					error.className = 'alert visible';
					error.innerHTML = '<p class="succes"> Trwa wysyłanie ...</p>' + '<img src="images/reload.gif"/>';
					return true;
				}
	}
})();
// validate



// limit of characters
(function() {
function messageValue() {
	var entry = document.getElementById('message').value.length;
	var limit = 300;
	var message = "Pozostało " + (limit - entry) + " znaków do wprowadzenia";
	var printMessage = document.querySelector("small").innerHTML = message;
}

window.addEventListener('input', function(){
 requestAnimationFrame(messageValue);
}, false);
})();
// limit of characters

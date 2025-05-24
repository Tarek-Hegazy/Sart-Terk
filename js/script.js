// Start Local Storage
  // Start Color on loacl
  // first define it in var
const localColor = localStorage.getItem("color-option");
  // check if it not === null make a choice
if (localColor !== null) {
	document.documentElement.style.setProperty("--main-color", localColor);
	// Remove class active from all li 
	document.querySelectorAll(".colors-list li").forEach(list => {
		list.classList.remove("active");
		// add class active on local color
		if (list.dataset.color === localColor) {
			list.classList.add("active");
		}
	});

};


	// local bullet option
const localBulletOption = localStorage.getItem("bullets-option");
if (localBulletOption !== null) {
	if (localBulletOption == "yes") {
		document.querySelector(".nav-bullet").style.display= "block";
	}else {
		document.querySelector(".nav-bullet").style.display= "none";
	}
}
// toggleActive(document.querySelectorAll(".bullets-option span"));
document.querySelectorAll(".bullets-option span").forEach(span => {
	span.classList.remove("active");
	if (span.dataset.display === localBulletOption) {
		span.classList.add("active");
	}
})

// End Local Storage
let backgroundOption = true;
let backgroundInterval;

  // Start backgroundOption in Local
const localBackgroundOption = localStorage.getItem("background-option");
if (localBackgroundOption === "yes") {
	backgroundOption = true;
}else {
	backgroundOption = false;
};
document.querySelectorAll(".background-option span").forEach(span => {
		span.classList.remove("active");
		// add class active on local background option
		if (span.dataset.background === localBackgroundOption) {
			span.classList.add("active");
		}
	});
// Start settings
let gear = document.querySelector(".sett");
let settings = document.querySelector(".settings");
settings.onclick = function(e) {
	e.stopPropagation();
}
gear.onclick = function() {
	gear.classList.toggle("fa-spin");
	settings.classList.toggle("viewed");
}

  // Start Switch Colors 
    // get the array of colors
const colorsLi = document.querySelectorAll(".colors-list li");
    // looping colors array
colorsLi.forEach(li => {
	// Click on every color
	li.addEventListener("click", (e) => {
		// Set color in root
		document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
		// save color in local storage
		localStorage.setItem("color-option", e.target.dataset.color);
		// Remove class active from all li 
		colorsLi.forEach(list => {
			list.classList.remove("active");
		})
		// add class active on click
		e.target.classList.toggle("active");
	})
})
  // End Switch Colors 


  // Start Switch Backgrounds 
  // get the array of backgrounds
const backgroundElement = document.querySelectorAll(".background-option span");
  // looping spans array
backgroundElement.forEach(span => {
	// Click on every span
	span.addEventListener("click", (e) => {
		// toggleActive(e);
		// Remove class active from all spans 
		// e.target.parentElement.querySelectorAll(".active").forEach(span => {
			// span.classList.remove("active");
		// })
		// add class active on click
		// e.target.classList.add("active");
		toggleActive(e);
		if(e.target.dataset.background === "yes") {
			backgroundOption = true;
			RandomBackGround();
			// save Yes in local storage
			localStorage.setItem("background-option", e.target.dataset.background);
		} else {
			backgroundOption = false;
			clearInterval(backgroundInterval);
			// to set first background when no
			// document.querySelector(".landing").style.backgroundImage = 'url("imgs/1.jpg")';

			// save No in local storage
			localStorage.setItem("background-option", e.target.dataset.background);
		}
	})
})
  // End Switch Backgrounds 
  // Start Choose backgroundImage
let backgroundChoose = document.querySelectorAll(".backgrounds .img");
backgroundChoose.forEach(image => {
	image.addEventListener("click", () => {
		document.querySelector(".landing").style.backgroundImage = 'url("' +image.dataset.back+ '")';
	})
})
  // End Choose backgroundImage

	// Start Reset Option
document.querySelector(".reset-option").onclick = function() {
	// localStorage.clear(); // kda clear all local or clear one by one
	localStorage.removeItem("color-option");
	localStorage.removeItem("background-option");
	localStorage.removeItem("bullet-option");
	window.location.reload();
};

	// Close Settings box by click in document
document.addEventListener("click", (e)=> {
	// console.log(e.target.className);
	if(e.target !== settings) {
		document.querySelector(".settings").classList.remove("viewed");
		document.querySelector(".sett").classList.remove("fa-spin");
	}
})	

	// Start Fixed Navigation option
const fixedOption = document.querySelectorAll(".fixed-option span");
fixedOption.forEach(span => {
	span.addEventListener("click", (e) => {
		toggleActive(e);
		if(e.target.dataset.fixed == "yes") {
			document.querySelector(".header").classList.add("fixed");
		}else {
			document.querySelector(".header").classList.remove("fixed");
		}
	})
})
// End Settings
// Start Landing
let landPage = document.querySelector(".landing");
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg" ];
function RandomBackGround() {
	if (backgroundOption === true) {
		backgroundInterval = setInterval(() => {
			let randomNumber = Math.floor(Math.random() * imgsArray.length);
			landPage.style.backgroundImage = 'url("imgs/' +imgsArray[randomNumber]+ '")';
		}, 3000);
	}
}
RandomBackGround();

	// start responsive menu
const showMenuBtn = document.querySelector(".show-menu");
const links = document.querySelector(".links-container .links");
showMenuBtn.onclick = function(e) {
	e.stopPropagation();
	links.classList.toggle("open");
	showMenuBtn.classList.toggle("menu-active");
}

document.addEventListener("click" ,(e)=> {
	// console.log(e.target.className);
	if(e.target !== showMenuBtn && e.target !== links) {
		// e.target.className.remove("open");
		// console.log(e.target.className);
		links.classList.remove("open");
		showMenuBtn.classList.remove("menu-active");
	}
})
links.onclick = function (e) {
	e.stopPropagation();
}
// End Landing


// Start Skills animation

  // get our skill element
let ourSkills = document.querySelector(".our-skills");
 // n3ml function lell scroll
window.onscroll = function () {
  // get ourSkills offSetTop == el height bta3 el page kolha l7d a5er el skills
	let ourSkillsOffsetTop = ourSkills.offsetTop;
	  //get ourskillsoffset height == el hegiht bta3 div el skills kolo
	let ourSkillsOffsetHeight = ourSkills.offsetHeight;
  // get window offest Y == el height bta3 el window elle enta feha now
	let windowHeight = this.innerHeight;
  // get window scroll Y Offest == el height bta3 el scroll elle 3mltow fel page
	let windowScrollTop = this.pageYOffset;
	// console.log(ourSkillsOffsetTop);
	// console.log(ourSkillsOffsetHeight);
	// console.log(windowHeight);
	// console.log(windowScrollTop);
	if (windowScrollTop > (ourSkillsOffsetTop + ourSkillsOffsetHeight - windowHeight ) ) {
		// this.console.log(windowScrollTop)
		let allSKills = document.querySelectorAll(".skill-box .skill-progress span");
		allSKills.forEach(skill => {
			skill.style.width = skill.dataset.progress;
		});
	}
	
};
// End Skills animation
// STart Gallery 
  // get imgs array from galley
let ourGallery = document.querySelectorAll(".gallery .image-box img");
  // loop of img one by one
ourGallery.forEach(image => {
	// When click on image do somthing
	image.addEventListener("click" , (e) => {
		// Create overlay with transparent color
		let overlay = document.createElement("div");
		// add class to overlay to control in css
		overlay.className= "popup-overlay";
		// append overlay to the body and go to css too style overlay well
		document.body.appendChild(overlay);
		// create popu box which show the image
		let popupBox = document.createElement("div");
		// add class to popup box to style it in css 
		popupBox.className ="popup-box";
		// add alt text Up the image
		if(image.alt !== null) {
			// create h3 element
			let imageHeading = document.createElement("h3");
			// create image alt text 
			let imageText = document.createTextNode(image.alt);
			// add the text to the heading
			imageHeading.appendChild(imageText);
			// add the Heading to the popup box
			popupBox.appendChild(imageHeading);
		}
		// create the image
		let popupImage = document.createElement("img");
		// add src of clicked image to popupImage
		popupImage.src = image.src;
		// add popupImage to the popupBox and style the img in css
		popupBox.appendChild(popupImage);
		
		// add popup box to the body and go css style it
		document.body.appendChild(popupBox);
			// Adding close button to the popupBox
		// Create close button
		let closeButton = document.createElement("span");  // add X to span
		closeButton.appendChild(document.createTextNode("X"))
		// add class to close button to style it in css
		closeButton.className = "close-button";
		// append close button to popupBox
		popupBox.appendChild(closeButton);


	})
})
  	// Close the overlay and the popupBox by click on close.button
document.addEventListener("click", (e)=> {
	if (e.target.className == "close-button") {
		e.target.parentElement.remove();
		document.querySelector(".popup-overlay").remove();
	}
	if (e.target.className == "popup-overlay") {
		// if the click is not on the popup box then remove the popup box and the overlay
		document.querySelector(".popup-box").remove();
		document.querySelector(".popup-overlay").remove();
		console.log("Hello");
	}
})
// End Gallery

// Start Bullet 
	// get all bullets array
const allBullets = document.querySelectorAll(".nav-bullet .bullet");
	// looping on all bulltes by clicking
// allBullets.forEach(bullet => {
	// on click on bullet do something
	// bullet.addEventListener("click", (e)=> {
		// go to the secton which defined in data attr by DOM
		// document.querySelector(e.target.dataset.section).scrollIntoView()
	// })
// })
// Control bullet display in setting box
const displayBullet = document.querySelectorAll(".bullets-option span");
displayBullet.forEach(span => {
	span.addEventListener("click", (e)=> {
		toggleActive(e);
		if (e.target.dataset.display == "yes") {
			document.querySelector(".nav-bullet").style.display="block";
			localStorage.setItem("bullets-option", e.target.dataset.display);
		}else {
			document.querySelector(".nav-bullet").style.display="none";
			localStorage.setItem("bullets-option", e.target.dataset.display);
		}
	})
})
// End Bullet 
	// deff a function to scroll into section
function scrollIntoView(elements) {
	// get all element array
	elements.forEach(ele => {
	// on click on element do something
	ele.addEventListener("click", (e)=> {
		// law da link (a) lazm prevent default 3shan el # bta3 el ID
		e.preventDefault();
		// go to the secton which defined in data attr by DOM
		document.querySelector(e.target.dataset.section).scrollIntoView()
	})
	})
};
scrollIntoView(allBullets);
const allLinks = document.querySelectorAll(".header .links a");
 // run function on new array 
scrollIntoView(allLinks);

	// deff a function to put and remove active class
function toggleActive(ev) {
	ev.target.parentElement.querySelectorAll(".active").forEach(element => {
			element.classList.remove("active");
		})
		// add class active on click
		ev.target.classList.add("active");
};

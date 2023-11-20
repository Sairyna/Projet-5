const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrow_left = document.getElementById("banner-arrow_left");
let arrow_right = document.getElementById("banner-arrow_right");
let dots = document.getElementById("banner-dots")
let num_side = 0

function change_banner(slide) {
	let banner_img = document.getElementById("banner-img")
	let text_slide = document.getElementById("text-slide")
	let html = ''

	banner_img.src = 'assets/images/slideshow/' + slides[slide].image
	text_slide.innerHTML= slides[slide].tagLine

	for (let i = 0; i < slides.length; i++){
		if (i==slide) {
			html += '<div class="dot dot_selected"></div>'
		}
		else {
			html += '<div class="dot"></div>'
		}
	}
	dots.innerHTML = html
}

change_banner(num_side)

arrow_left.addEventListener("click", function () {
	if (num_side==0) {
		num_side=3
	}
	else {
		num_side--
	}
	change_banner(num_side)
});
arrow_right.addEventListener("click", function () {
	if (num_side==3) {
		num_side=0
	}
	else {
		num_side++
	}
	change_banner(num_side)
});
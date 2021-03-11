document.querySelector('.c-burger__menu').addEventListener('click', function(e){
	e.preventDefault();
	// this.classList.toggle('is-active');
	if(this.classList.contains('is-active')){
		this.classList.remove('is-active');
		document.querySelector('#burger').classList.remove('nav-active');
		document.querySelector('.burger__menu').classList.remove('b__is-active');
	}else{
		this.classList.add('is-active');
		document.querySelector('#burger').classList.add('nav-active');
		document.querySelector('.burger__menu').classList.add('b__is-active');
	}
});
console.log('21');


//слайдер
// let offset = 0;
// const sliderNews= document.querySelector('.news__block');
// document.querySelector('.news__slider-btn__next').addEventListener('click', function(){
// 	offset = offset + 300;
// 	if (offset>900) {
// 		offset = 0;
// 	}
// 	sliderNews.style.left = -offset + 'px';
// });
//
//
// document.querySelector('.news__slider-btn__prev').addEventListener('click', function(){
// 	offset = offset - 300;
// 	if (offset<0) {
// 		offset = 900;
// 	}
// 	sliderNews.style.left = -offset + 'px';
// });
const images = document.querySelectorAll('.news__slider .news__block .news__item');
const slider = document.querySelector('.news__block');
let count = 0;
let width;
const mediaWidth425 = window.matchMedia('(max-width: 425px)');

function init() {
	width = document.querySelector('.news__slider').offsetWidth;
	console.log('resize');
	slider.style.width = width * 2 +'px';
	images.forEach(item => {
		item.style.width = width / 3 + 'px';
		item.style.height = 'auto';
	});
}
if(!mediaWidth425.matches){
	window.addEventListener('resize', init);
	init();
}else{

}
// window.addEventListener('resize', init);
// init();

document.querySelector('.news__slider-btn__prev').addEventListener('click', function (){
	count--;
	if (count < 0){
		count = images.length - 3;
	}
	rollSlider();
});

document.querySelector('.news__slider-btn__next').addEventListener('click', function (){
	count++;
	if (count >= images.length - 2){
		count = 0;
	}
	rollSlider();
});

function rollSlider(){
	slider.style.transform = 'translate(-'+ count * width /3 + 'px)';
}






//поп-ап
let popUp = document.querySelector('.pop-up'),
	popupOverlay = document.querySelector('.pop-up__overlay'),
	popupOpen = document.querySelector('.cow__button'),
	popupClose = document.querySelector('.pop-up__close');

popupOpen.onclick = ()=>{
	popUp.style.display = 'block';
};

popupClose.onclick = ()=>{
	popUp.style.display = 'none';
}

window.onclick = (e)=>{
	if(e.target == popupOverlay){
		popUp.style.display = 'none';
	}
}

//блок с картинками
const planBlock = document.querySelector('.plan__block');
planBlock.addEventListener('click',showInfo);
function showInfo(event){
	// console.dir(event.target);
	const key = event.target.dataset['key'];
	console.log(key);
	if (key === undefined){
		return true;
	}else{
		document.querySelector('.plan__'+key).classList.add('p__active');
	}
	document.querySelector('.plan__pointer').style.display ='none';
}



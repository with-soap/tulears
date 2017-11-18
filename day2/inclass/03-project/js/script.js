window.addEventListener('load',function(){
	//код -демонстрация функций
	function logger(text){
		return text[2]
	}

	let $ = function(selector){
		return document.querySelector
	}

//рабочий код проекта
//право
	let rightArrow = document.querySelector('.rightArrow')
	let leftArrow = document.querySelector('.leftArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0

	rightArrow.addEventListener('click',function(){
		Counter = Counter+5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
	})

	leftArrow.addEventListener('click',function(){
		Counter = Counter-5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
	})

	const homeBtn = document.querySelector('.home')
	homeBtn.addEventListener('click',function() {
		window.location = ('file:///Users/masha/Desktop/tulears/index.html')
	})
})

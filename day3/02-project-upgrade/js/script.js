window.addEventListener('load',function(){

	// рабочий код проекта
	let rightArrow = document.querySelector('.rightArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0

	rightArrow.addEventListener('click', function(){
		let currentPlayState = myCoolEarth.style.animationPlayState
		if(currentPlayState!='running'){
			myCoolEarth.style.animationPlayState = 'running'
			this.style.backgroundImage = 'url(img/pause.png)'
		}
		else {
			myCoolEarth.style.animationPlayState = 'paused'
			this.style.backgroundImage = 'url(img/rotate_right_arrow.png)'
		}
		
	})

	const homeBtn = document.querySelector('.home')
	homeBtn.addEventListener('click', function() {
		window.location = 'file:///Users/mac/Desktop/tulers/index.html'
	})
})



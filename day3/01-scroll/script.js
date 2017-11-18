// HERE WILL BE SCROLL SCRIPT 
//◢♂◣◥♀◤◢♂◣◥♀◤

window.addEventListener('load',function(){
	const facebook = document.querySelector(".facebook")
	const instagram = document.querySelector(".instagram")
	const github = document.querySelector(".github")

	const facebookY = parseInt(getComputedStyle(facebook).top)
	const instagramY = parseInt(getComputedStyle(instagram).top)
	const githubX = parseInt(getComputedStyle(github).top)


	window.addEventListener('scroll',function() {
		const scrollPositon = window.scrollY

		facebook.style.transform = 'translateY(' + (- scrollPositon/2) + 'px)'
		instagram.style.transform = 'translateY('+ (- scrollPositon*5) + 'px)'
		github.style.transform = 'translateX('+ (- scrollPositon) + 'px)'
		
	})
})

// window.addEventListener('load',function(){
// 	const facebook = document.querySelector(".facebook")
// 	const instagram = document.querySelector(".instagram")
// 	const github = document.querySelector(".github")

// 	const facebookY = parseInt(getComputedStyle(facebook).top)
// 	const instagramY = parseInt(getComputedStyle(instagram).top)
// 	const githubY = parseInt(getComputedStyle(github).top)


// 	window.addEventListener('scroll',function(){
// 		const scrollPositon = window.scrollY

// 		facebook.style.top = facebookY + scrollPositon/2 + 'px'
// 		instagram.style.top = instagramY + scrollPositon*-5 + 'px'
// 		github.style.top = githubY + scrollPositon*0.75 + 'px'
		

// 		console.log(scrollPositon)
// 	})
// })
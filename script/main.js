(function () {
	console.log("fixed");
	var head = document.querySelector(".heading"),
	allImgs = document.querySelectorAll(".image-holder"),
	seasonHead = document.querySelector(".main-copy h2"),
	seasonText = document.querySelector(".main-copy p"),
	appliedClass;

	function changeElements(){
		//debugger;
		seasonHead.classList.remove(appliedClass);
		seasonText.classList.remove(appliedClass);
		seasonHead.classList.add(this.id);
		seasonText.classList.add(this.id);
		appliedClass = this.id;
		
		seasonHead.firstChild.nodeValue = dynamicContent[this.id].headline;
		seasonText.firstChild.nodeValue = dynamicContent[this.id].text;
	}

	[].forEach.call(allImgs, function(img){
		img.addEventListener('click',changeElements,false);
	});
	seasonHead.firstChild.nodeValue = dynamicContent["spring"].headline;
	seasonText.firstChild.nodeValue = dynamicContent["spring"].text; 
	seasonHead.classList.add("spring");
})();
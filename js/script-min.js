var panels = document.querySelectorAll('.panel');

function toggleOpen() {
	for(var i = 0; i < this.parentElement.children.length ; i++) {
		if(this.parentElement.children[i].className.includes('open')) {
			this.parentElement.children[i].classList.remove('open');
		}
	}
	this.classList.toggle('open');
}

function toggleActive(e) {
	if(e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');	
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


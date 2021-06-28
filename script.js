function removePost(button) {
	let x = button.parentElement.parentElement.parentElement; 
	let s = x.previousSibling;
	if (s.tagName === "BR") {
		s.remove();
	}
	x.remove();
}

// dont mess with it nerds

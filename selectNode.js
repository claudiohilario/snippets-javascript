function select(node) {
	const selection = window.getSelection();
	selection.removeAllRanges();
	
	const range = document.createRange();
	range.selectNodeContents(node);
	selection.addRange(range);
}

function unselectAll() {
	const selection = window.getSelection();
	selection.removeAllRanges();
} 

document.getElementById('vote').addEventListener('click', function(event) {
	const button = event.target;
	button.innerText = (Number(button.innerText) || 0) + 1;
})
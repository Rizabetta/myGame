const menu = document.querySelector('.menu');
const name = document.getElementById('name');
const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
	event.preventDefault();
	menu.style.display = 'none';
})
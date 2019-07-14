console.log('hello')
class Game {
	static gameField;
	static gameDuration;
	static gamePause = false;
	static gameEnd = false;

	static gameStart() {
		this.gameField = document.createElement('canvas');
		this.gameField.getContext('2d');
		this.gameField.width = 1000;
		this.gameField.head = 400;
		document.body.appendChild(this.gameField);
	}

	static gameLoop() {

	}

	static gameEnd() {

	}
}


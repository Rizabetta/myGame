class Game {
	static gameField;
	static gameDuration = 0;
	static gameInterval;
	static gamePause = false;
	static gameEnd = false;

	static gameStart() {
		this.gameField = document.createElement('canvas');
		this.gameField.getContext('2d');
		this.gameField.width = 1000;
		this.gameField.height = 400;
		document.body.appendChild(this.gameField);

		Game.gameInterval = setInterval(() => {
			if (!Game.gamePause && !Game.gameEnd) {
				Game.gameDuration += 1;
				console.log(Game.gameDuration);
			}
		}, 1000)
		
		Game.gameLoop();
	}

	static gameLoop() {
		requestAnimationFrame(Game.gameLoop);
	}

	static gameEnd() {

	}
}


$(document).ready(function(){

	var playerLeftWinCount = 0;
	var playerRightWinCount = 0;

	var ball = $(".ball");
	var wrap = $("#wrap");

	var ballXPosition;
	var ballYPosition;
	var ballSpeed = 2; // 2 distance the ball moves each time this function is run
	var currentBallDirection;
	var timer;
	var paused = false;
	var soundEnabled = true;

	var BALL_HEIGHT = parseInt(ball.css("height"));
	var BALL_WIDTH = parseInt(ball.css("width"))

	var middle = parseInt(wrap.css("width")) / 2;
	var leftScoreBoard = $(".grid1");
	var rightScoreBoard = $(".grid2");
	var offset = 100;
	var middleLine = $(".mid");
	var leftGrid = $(".grid1");
	var leftGridWidth = parseInt(leftGrid.css("width"));

	leftScoreBoard.css("left",middle - offset - leftGridWidth);
	rightScoreBoard.css("left",middle + offset);
	middleLine.css("left",middle );

	var TOP_WALL = 0;
	var LEFT_WALL = 0;
	var BOTTOM_WALL = parseInt(wrap.css("height"));
	var RIGHT_WALL = parseInt(wrap.css("width"));

	var leftPaddle = $(".paddle");
	var rightPaddle = $(".paddle2");

	var LEFT_PADDLE_HEIGHT = parseInt(leftPaddle.css("height"));
	var RIGHT_PADDLE_HEIGHT = parseInt(rightPaddle.css("height"));

	var LEFT_PADDLE_WIDTH = parseInt(leftPaddle.css("width"));
	var RIGHT_PADDLE_WIDTH = parseInt(rightPaddle.css("width"));

	var LEFT_PADDLE_BARRIER = LEFT_WALL + LEFT_PADDLE_WIDTH;
	var RIGHT_PADDLE_BARRIER = RIGHT_WALL  -  RIGHT_PADDLE_WIDTH   -  BALL_WIDTH;


		$(document).on('keyup', function(e){

		if(e.keyCode === 13){
			startNewGame();
		}
	});

	$(document).on('keyup', function(e){

		if(e.keyCode === 80){
			togglePause();
		}
	});
	$(document).on('keyup', function(e){

		if(e.keyCode === 32){
			togglePause();
		}
	});

	resetPaddlePositions();

	function togglePause() {
		if(paused)
			unpauseGame();
		else
			pauseGame();
	}
	
	function pauseGame(){
		paused = true;
		stopBall();
	}

	function unpauseGame() {
		paused = false;
		startBall();
	}

	function resetPaddlePositions() {
		var leftPaddle = $(".paddle");
		var rightPaddle = $(".paddle2");

		var LEFT_PADDLE_HEIGHT = parseInt(leftPaddle.css("height"));
		var RIGHT_PADDLE_HEIGHT = parseInt(rightPaddle.css("height"));

		leftPaddle.css("marginTop", BOTTOM_WALL / 2 - LEFT_PADDLE_HEIGHT / 2);
		rightPaddle.css("marginTop", BOTTOM_WALL / 2 - RIGHT_PADDLE_HEIGHT / 2);
	}

	function startNewGame() {
		stopBall();
		ball.hide();
		paused = false;
		ballXPosition = RIGHT_WALL / 2;
		ballYPosition = getRandomStartPosition();
		currentBallDirection = getRandomStartDirection();
		repaintBall();
		ball.show();
		startBall();
	}

	function getRandomStartPosition(){
		var result = Math.random() * BOTTOM_WALL - BALL_HEIGHT;
		result -= result % 1;
		return result;
	};

	function getRandomStartDirection(){
		var result = Math.random() * 2345614;
		result -= result % 3;
		result %= 4;
		if(result == 0)
			return "TopLeft";
		else if(result == 1)
			return "TopRight";
		else if(result == 2)
			return "BottomRight";
		else
			return "BottomLeft";
	}

	function startBall() {
		timer = setInterval(gameLoop,5);
	}

	function stopBall() {
		clearInterval(timer);
	}

	function repaintBall() {
		ball.css("marginLeft",ballXPosition);
		ball.css("marginTop",ballYPosition);
	}

	function animateBall(){
		ballSpeed +=0.001;
		
		checkBarriers();

		if(currentBallDirection == "TopRight") {
			ballXPosition += ballSpeed;
			ballYPosition -= ballSpeed;
		}
		else if(currentBallDirection == "BottomRight") {
			ballXPosition += ballSpeed;
			ballYPosition += ballSpeed;
		}
		else if(currentBallDirection == "BottomLeft") {
			ballXPosition -= ballSpeed;
			ballYPosition += ballSpeed;
		}
		else { // top left
			ballXPosition -= ballSpeed;
			ballYPosition -= ballSpeed;
		}
		repaintBall();
	}

	var down = [];

	$(document).on('keydown', function(e) {
		if(down.indexOf(e.keyCode) == -1)
			down.push(e.keyCode);
	});

	$(document).on("keyup", function(e) {
		delete down[down.indexOf(e.keyCode)];
	});

	// var loopCounter = 0;

	function gameLoop() {

		// loopCounter++;
		var leftPaddle = $(".paddle");
		var rightPaddle = $(".paddle2");
		// if(loopCounter % 50 === 0 && leftPaddle.height() > 60){
		// 	leftPaddle.css('height', '-=1px');
		// 	rightPaddle.css('height', '-=1px');
		// }
		animateBall();
		var paddle = $(".paddle");
		var paddleMargin = parseInt(paddle.css("marginTop"));
		var newMargin;
		var INCREMENT = 4;

		var paddle2 = $(".paddle2");
		var paddleMargin2 = parseInt(paddle2.css("marginTop"));
		var newMargin2;

		var LEFT_PADDLE_HEIGHT = parseInt(leftPaddle.css("height"));
		var RIGHT_PADDLE_HEIGHT = parseInt(rightPaddle.css("height"));

		// Left paddle

		if(down.indexOf(83) != -1 && paddleMargin < BOTTOM_WALL - LEFT_PADDLE_HEIGHT && !paused) {
			if(paddleMargin + INCREMENT >= BOTTOM_WALL - LEFT_PADDLE_HEIGHT)
				newMargin = BOTTOM_WALL - LEFT_PADDLE_HEIGHT;
			else
				newMargin = paddleMargin + INCREMENT;
		};

		if(down.indexOf(87) != -1 && paddleMargin > TOP_WALL && !paused) {
			if(paddleMargin - INCREMENT <= TOP_WALL)
				newMargin = TOP_WALL;
			else			
				newMargin = paddleMargin - INCREMENT;
		};

		// Right paddle

		if(down.indexOf(40) != -1 && paddleMargin2 < BOTTOM_WALL - RIGHT_PADDLE_HEIGHT && !paused) {
			if(paddleMargin2 + INCREMENT >= BOTTOM_WALL - RIGHT_PADDLE_HEIGHT)
				newMargin2 = BOTTOM_WALL - RIGHT_PADDLE_HEIGHT;
			else
				newMargin2 = paddleMargin2 + INCREMENT
		};

		if(down.indexOf(38) != -1 && paddleMargin2 > TOP_WALL && !paused) {
			if(paddleMargin2 - INCREMENT <= TOP_WALL)
				newMargin2 = TOP_WALL;
			else
				newMargin2 = paddleMargin2 - INCREMENT
		};

		paddle.css("marginTop", newMargin);
		paddle2.css("marginTop", newMargin2);
	}

	// var soundData = $.cookie('soundData');
	// var playSound = soundData.playSound;

	function playSound(fileName) {

		$.browser.mozilla && $.browser.version.substr(0, 5) >= "1.9.2" || $.browser.webkit
			
				var audioSource = '<audio preload="auto"><source src="assets/js/"' + fileName + '/><source src="assets/js/' + fileName + '" /></audio>';
				$(audioSource)[0].play();
			// if( playSound === true){
			// }
		

	}


	function changeDirection(direction) {
		currentBallDirection = direction;
		
		if(soundEnabled)
			playSound("pongSound.wav");
	}

	function checkBarriers() {

		var leftPaddleYPositionTop = parseInt(leftPaddle.css("marginTop")) - BALL_HEIGHT;
		var leftPaddleYPositionBottom = leftPaddleYPositionTop + BALL_HEIGHT + LEFT_PADDLE_HEIGHT + BALL_HEIGHT;

		var rightPaddleYPositionTop = parseInt(rightPaddle.css("marginTop")) - BALL_HEIGHT;
		var rightPaddleYPositionBottom = rightPaddleYPositionTop + BALL_HEIGHT + RIGHT_PADDLE_HEIGHT + BALL_HEIGHT;

		if(currentBallDirection == "TopRight" && ballYPosition <= TOP_WALL)
			changeDirection("BottomRight");

		if(currentBallDirection == "TopRight" && ballXPosition >= RIGHT_PADDLE_BARRIER && ballYPosition >= rightPaddleYPositionTop && ballYPosition <= rightPaddleYPositionBottom )
			changeDirection("TopLeft");

		if(currentBallDirection == "BottomRight" && ballYPosition >= BOTTOM_WALL  -  BALL_HEIGHT)
			changeDirection("TopRight");

		if(currentBallDirection == "BottomRight" && ballXPosition >= RIGHT_PADDLE_BARRIER && ballYPosition >= rightPaddleYPositionTop && ballYPosition <= rightPaddleYPositionBottom)
			changeDirection("BottomLeft");

		if(currentBallDirection == "BottomLeft" && ballYPosition >= BOTTOM_WALL  -  BALL_HEIGHT)
			changeDirection("TopLeft");

		if(currentBallDirection == "BottomLeft" && ballXPosition <= LEFT_PADDLE_BARRIER && ballYPosition >= leftPaddleYPositionTop && ballYPosition <= leftPaddleYPositionBottom)
			changeDirection("BottomRight");

		if(currentBallDirection == "TopLeft" && ballYPosition <= TOP_WALL)
			changeDirection("BottomLeft");

		if(currentBallDirection == "TopLeft" && ballXPosition <= LEFT_PADDLE_BARRIER && ballYPosition >= leftPaddleYPositionTop && ballYPosition <= leftPaddleYPositionBottom)
			changeDirection("TopRight");

		if(ballXPosition <= LEFT_WALL)
			winGame("PlayerRight");

		if(ballXPosition >= RIGHT_WALL - BALL_WIDTH)
			winGame("PlayerLeft");

	}

	function resetBall(){
		ballSpeed = 2;

	}

	// function resetPaddle(){
	// 	$(".paddle").css('height' , '150px');
	// 	$(".paddle2").css('height' , '150px');
	// }


	function winGame(winner) {

		resetBall();
		stopBall();
		// resetPaddle();
		ball.hide();

		if(soundEnabled)
			playSound("toasty.wav");

		if(winner == "PlayerLeft") {
			redrawScoreBoard(1);
		}

		if(winner == "PlayerRight") {
			redrawScoreBoard(2);
		}
		
		if(playerLeftWinCount === 10){
			resetGame();
		}
		if(playerRightWinCount === 10){
			resetGame();
		}
			
			
		setTimeout(startNewGame, 800); // Delay to start another game

	}
	var scoreboardDisplay = [
		[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],
	 	[1,1,0,0,1,0,0,1,0,0,1,0,1,1,1],
		[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],
		[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],
		[1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],
		[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
		[1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],
		[1,1,1,0,0,1,0,0,1,0,0,1,0,0,1],
		[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
	 	[1,1,1,1,0,1,1,1,1,0,0,1,0,0,1],
	 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	];

	function redrawScoreBoard(player) {
		var score;
		if(player === 1) {
			playerLeftWinCount = playerLeftWinCount + 1;
			score = playerLeftWinCount;
		} else {
			playerRightWinCount = playerRightWinCount + 1;
			score = playerRightWinCount;
		}
		printScoreBoardDigit(player, scoreboardDisplay[score]);
	}

	function resetGame() {
		playerRightWinCount = 0;
		playerLeftWinCount = 0;
		printScoreBoardDigit(1, scoreboardDisplay[0]);
		printScoreBoardDigit(2, scoreboardDisplay[0]);
	}

	function printScoreBoardDigit(player, arrayOfBooleans) {
		
		for(var i = 0; i < arrayOfBooleans.length; i++) {
			var pixel = $(".p" + player + "box" + (i+1));
			if(arrayOfBooleans[i] === 0)
				pixel.css("background-color", "black");
			else
				pixel.css("background-color", "white");
		}
	}


	var sound = $.cookie('sound');
	
	if(!sound) {
		sound = 'true';
	}
	if(sound == 'true') {
		soundEnabled = true;
	} else {
		soundEnabled = false;
	}

	$(document).on('keyup', function(e){
		if(e.keyCode === 27){
			window.location = 'minigame.php';
		}	
	})


});
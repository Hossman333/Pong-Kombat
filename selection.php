<!DOCTYPE HTML>
<html lang="en-US">
<head>
<title>Choose your Destiny!</title>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="stylesheet" href="assets/css/styleSelection.css" type="text/css" media="screen" />
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>
<script src="assets/js/jquery.cookie.js"></script>
<!-- <script src="assets/js/main.js"></script>
<script src="assets/js/konami.js"></script> -->
<script src="assets/js/selection.js"></script>
</head>
<body>
	<div id="selection-screen">
		<div id="header-selection">
			<h1><img src="assets/images/chooseYourDestiny.png"></h1>
		</div>
		<div id="inside">
			<div id="player1-settings">
				<h2><img src="assets/images/player1.png"></h2>
				
				<div class="carousel">	
					<div class="left-arrow-selection"></div>
					<div class="right-arrow-selection"></div>
					<div id="paddle-selection" class="selection">
						<ul> 
							<li>
								<div class="original-paddle"></div>
								<div class="original-text"></div>
							</li>
							<li>
								<div class="scorpion-paddle"></div>
								<div class="scorpion-text"></div>
							</li>
							<li>
								<div class="subzero-paddle"></div>
								<div class="subzero-text"></div>
							</li>
							<li>
								<div class="reptile-paddle"></div>
								<div class="reptile-text"></div>
							</li>
							<li>
								<div class="raiden-paddle"></div>
								<div class="raiden-text"></div>
							</li>
							<li>
								<div class="liukang-paddle"></div>
								<div class="liukang-text"></div>
							</li>
						</ul>
					</div>
				</div>

				<div class="carousel">	
					<div class="left-arrow-selection"></div>
					<div class="right-arrow-selection"></div>
					<div id="paddle-size" class="selection">
						<ul> 
							<li>
								<div class="amateur-paddle"></div>
								<div class="amateur-text"></div>
							</li>
							<li>
								<div class="noob-paddle"></div>
								<div class="noob-text"></div>
							</li>
							<li>
								<div class="wall-paddle"></div>
								<div class="wall-text"></div>
							</li>
							<li>
								<div class="master-paddle"></div>
								<div class="master-text"></div>
							</li>
							<li>
								<div class="pro-paddle"></div>
								<div class="pro-text"></div>
							</li>
						</ul>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div id="mid">
				<button class="box-button">Box</button>
				<button class="ball-button">Ball</button>	
				<div class="carousel">	
					<div class="left-arrow-selection"></div>
					<div class="right-arrow-selection"></div>
					<div id="ball-selection" class="selection">
						<ul> 
							<li>
								<div class="original-ball"></div>
								<div class="original-box"></div>
								<div class="originalB-text"></div>
							</li>
							<li>
								<div class="flower-ball"></div>
								<div class="flower-box"></div>
								<div class="flower-text"></div>
							</li>
							<li>
								<div class="ice-ball"></div>
								<div class="ice-box"></div>
								<div class="ice-text"></div>
							</li>
							<li>
								<div class="poison-ball"></div>
								<div class="poison-box"></div>
								<div class="poison-text"></div>
							</li>
							<li>
								<div class="lightning-ball"></div>
								<div class="lightning-box"></div>
								<div class="lightning-text"></div>
							</li>
							<li>
								<div class="fire-ball"></div>
								<div class="fire-box"></div>
								<div class="fire-text"></div>
							</li>
						</ul>
						<div class="clear"></div>
					</div>
				</div>

				<div class="carousel">	
					<div class="left-arrow-selection"></div>
					<div class="right-arrow-selection"></div>
					<div id="map-selection" class="selection">
						<ul> 
							<li><img src="assets/images/coming-soon.png"></li>
							<li><img src="assets/images/coming-soon.png"></li>
							<li><img src="assets/images/coming-soon.png"></li>
						</ul>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div id="player2-settings">
				<h2><img src="assets/images/player2.png"></h2>
				
				<div class="carousel">	
					<div class="left-arrow-selection"></div>
					<div class="right-arrow-selection"></div>
					<div id="paddle-selection2" class="selection">
						<ul> 
							<li>
								<div class="original-paddle"></div>
								<div class="original-text"></div>
							</li>
							<li>
								<div class="scorpion-paddle"></div>
								<div class="scorpion-text"></div>
							</li>
							<li>
								<div class="subzero-paddle"></div>
								<div class="subzero-text"></div>
							</li>
							<li>
								<div class="reptile-paddle"></div>
								<div class="reptile-text"></div>
							</li>
							<li>
								<div class="raiden-paddle"></div>
								<div class="raiden-text"></div>
							</li>
							<li>
								<div class="liukang-paddle"></div>
								<div class="liukang-text"></div>
							</li>
						</ul>
						<div class="clear"></div>
					</div>
				</div>

				<div class="carousel">	
					<div class="left-arrow-selection"></div>
					<div class="right-arrow-selection"></div>
					<div id="paddle-size2" class="selection">
						<ul> 
							<li>
								<div class="amateur-paddle"></div>
								<div class="amateur-text"></div>
							</li>
							<li>
								<div class="noob-paddle"></div>
								<div class="noob-text"></div>
							</li>
							<li>
								<div class="wall-paddle"></div>
								<div class="wall-text"></div>
							</li>
							<li>
								<div class="master-paddle"></div>
								<div class="master-text"></div>
							</li>
							<li>
								<div class="pro-paddle"></div>
								<div class="pro-text"></div>
							</li>
						</ul>
						<div class="clear"></div>
					</div>
				</div>

				<div id="play"></div>
			</div>
		</div>
	</div>

</body>
</html>

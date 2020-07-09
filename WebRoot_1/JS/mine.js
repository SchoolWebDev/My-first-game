let vrag = document.querySelector('.vrag');
let posY = document.querySelector('.user').offsetTop;
let posX = document.querySelector('.user').offsetLeft;
let play = 0;
let Keycode = 0;
let blocksX = document.querySelectorAll('.blocks > *');
let blocksY = document.querySelectorAll('.blocks > *');
let blocksHeight = document.querySelectorAll('.blocks > *');
let blocksWidth = document.querySelectorAll('.blocks > *');
let X = [];
let Y = [];
let bWidth = [];
let bHeight = [];
let health = document.querySelector('.health').offsetWidth;
let blocks_lavaX = document.querySelectorAll('.blocks_lava > *');
let blocks_lavaY = document.querySelectorAll('.blocks_lava > *');
let blocks_lavaHeight = document.querySelectorAll('.blocks_lava > *');
let blocks_lavaWidth = document.querySelectorAll('.blocks_lava > *');
let b_lavaWidth = [];
let b_lavaHeight = [];
let X_lava = [];
let Y_lava = [];
let game = document.querySelector('.game');
let exit = document.querySelector('.exit');
let move_p = 4;
let vrag_speed = 2;
let player_this = 'game';
document.querySelector('.creating').style.display = 'block';

reset_let();
function reset_let() {
	for (let i = 0; i < blocksX.length; i++) {
		X[i] = blocksX[i].offsetLeft;
		Y[i] = blocksY[i].offsetTop;
		bWidth[i] =	blocksHeight[i].offsetWidth;
		bHeight[i] = blocksHeight[i].offsetHeight;
	}

	for (let i = 0; i < blocks_lavaX.length; i++) {
		Y_lava[i] = blocks_lavaY[i].offsetTop;
		X_lava[i] = blocks_lavaX[i].offsetLeft;
		b_lavaWidth[i] =	blocks_lavaWidth[i].offsetWidth;
		b_lavaHeight[i] = blocks_lavaHeight[i].offsetHeight;
	}
}

move_player();
function move_player() {
	if (document.querySelector('.creating').style.display == 'block') {
		document.querySelector('.game').style.overflow = 'visible';
	}
	else {
		document.querySelector('.game').style.overflow = 'hidden';
	}
	if (document.querySelector('.creating').style.display != 'block' && player_this == 'game' && player_this != 'lose' && player_this != 'win' && document.querySelector('.official_lvl').style.display != 'block') {
		if (posY > vrag.offsetTop) {
			vrag.style.top = vrag.offsetTop + vrag_speed / 2 + 'px';
		}
		if (posY < vrag.offsetTop) {
			vrag.style.top = vrag.offsetTop - vrag_speed + 'px';
		}
		if (posX < vrag.offsetLeft + 10) {
			vrag.style.left = vrag.offsetLeft - vrag_speed + 'px';
		}
		if (posX > vrag.offsetLeft + 10) {
			vrag.style.left = vrag.offsetLeft + vrag_speed / 2 + 'px';
		}
		if (posY < vrag.offsetLeft && posY > vrag.offsetLeft + 100) {
			vrag.style.left = vrag.offsetLeft + 100 + 'px';
		}
		if (posX + 34 > vrag.offsetLeft && posX < vrag.offsetLeft + 53 && posY + 43 > vrag.offsetTop && posY - 43 < vrag.offsetTop) {
			player_this = 'lose';
			document.querySelector('.gameOver').style.display = 'block';
		}
		if (Keycode == 'KeyD') {
			posX += move_p;
		}
		if (Keycode == 'KeyA') {
			posX -= move_p;
		}
		if (Keycode == 'KeyS') {
			posY += move_p;
		}
		if (Keycode == 'KeyW') {
			posY -= move_p;
		}
		if (posX < 90) {
			posX = 90;
		}
		if (posX > game.offsetWidth - 200) {
			posX = game.offsetWidth - 200;
		}
		if (posY < -34) {
			posY = game.offsetHeight;
		}
		if (posY > game.offsetHeight + 34) {
			posY = -34;
		}
		if (posY > (exit.offsetTop - 40) && posY < (exit.offsetTop + 40) && posX + 34 > exit.offsetLeft) {
			if (player_this != 'lose') {
				player_this = 'win';
				document.querySelector('.gameOver > p').innerHTML = 'YOU WIN';
				document.querySelector('.gameOver').style.display = 'block';
			}
		}
		for (let i = 0; i < X_lava.length; i++) {
			if (posX > X_lava[i] - 34 && posX < X_lava[i] + b_lavaWidth[i]) {
				if (posY > Y_lava[i] - 17 && posY < Y_lava[i] + b_lavaHeight[i] + 19) {
					if (Keycode == 'KeyA') {
						posX += 3;
					}
					if (Keycode == 'KeyD') {
						posX -= 3;
					}
					health -= 0.5;
					if (health < 0) {
						player_this = 'lose';
						document.querySelector('.gameOver').style.display = 'block';
					}
				}
			}
			if (posY > Y_lava[i] - 17 && posY < Y_lava[i] + b_lavaHeight[i] + 19) {
				if (posX > X_lava[i] - 34 && posX < X_lava[i] + b_lavaWidth[i]) {
					if (Keycode == 'KeyS') {
						posY -= 3;
					}
					if (Keycode == 'KeyW') {
						posY += 3;
					}
					health -= 0.5;
					if (health < 0) {
						player_this = 'lose';
						document.querySelector('.gameOver').style.display = 'block';
					}
				}
			}
		}
		for (let i = 0; i < X.length; i++) {
			if (posX > X[i] - 34 && posX < X[i] + bWidth[i]) {
				if (posY > Y[i] - 17 && posY < Y[i] + bHeight[i] + 19) {
					if (Keycode == 'KeyA') {
						posX += move_p;
					}
					if (Keycode == 'KeyD') {
						posX -= move_p;
					}
				}
			}
			if (posY > Y[i] - 17 && posY < Y[i] + bHeight[i] + 19) {
				if (posX > X[i] - 34 && posX < X[i] + bWidth[i]) {
					if (Keycode == 'KeyS') {
						posY -= move_p;
					}
					if (Keycode == 'KeyW') {
						posY += move_p;
					}
				}
			}
		}
	}
	document.querySelector('.health').style.width = health + 'px';
	document.querySelector('.user').style.top = posY + 'px';
	document.querySelector('.user').style.left = posX + 'px';
	requestAnimationFrame(move_player);
}
document.querySelector('.block_remove').style.filter = 'drop-shadow(0px 0px 5px black)';
function razer() {
	if (document.querySelector('.block_remove').style.filter == 'drop-shadow(black 0px 0px 5px)') {
		document.querySelector('.block_remove').style.filter = 'drop-shadow(0px 0px 10px rgba(0, 255, 0, 0.4))';
	}
	else {
		document.querySelector('.block_remove').style.filter = 'drop-shadow(black 0px 0px 5px)';
	}
}
let blocks_play_test = document.querySelectorAll('.blocks_check > *');
let blocks_lava_play_test = document.querySelectorAll('.blocks_lava_check > *');
setTimeout(function() {
	blocks_play_test = document.querySelectorAll('.blocks_check > *');
	blocks_lava_play_test = document.querySelectorAll('.blocks_lava_check > *');
	for (var i = 0; i < blocks_play_test.length; i++) {
		blocks_play_test[i].onclick = function() {
			if (document.querySelector('.block_remove').style.filter == 'drop-shadow(rgba(0, 255, 0, 0.4) 0px 0px 10px)') {
				this.remove();
			}
		}
	}
	for (var i = 0; i < blocks_lava_play_test.length; i++) {
		blocks_lava_play_test[i].onclick = function() {
			if (document.querySelector('.block_remove').style.filter == 'drop-shadow(rgba(0, 255, 0, 0.4) 0px 0px 10px)') {
				this.remove();
			}
		}
	}
	requestAnimationFrame(arguments.callee);
}, 20);

function start_test() {
	var blocks_play_test = document.querySelectorAll('.blocks_check > *');
	var blocks_lava_play_test = document.querySelectorAll('.blocks_lava_check > *');
	var sadsa = blocks_play_test[1];
	for (var i = 0; i < blocksHeight.length; i++) {
	 	$(`.blocks > .block_${i + 1}`).remove();
	}
	for (var i = 0; i < blocks_lavaHeight.length; i++) {
	 	$(`.blocks_lava > .block_${i + 1}`).remove();
	}
	for (var i = 0; i < blocks_play_test.length; i++) {
		blocks_play_test[i].style.top = blocks_play_test[i].offsetTop - 120 + 'px';
		blocks_play_test[i].style.left = blocks_play_test[i].offsetLeft + 90 + 'px';
	}
	for (var i = 0; i < blocks_lava_play_test.length; i++) {
		blocks_lava_play_test[i].style.top = blocks_lava_play_test[i].offsetTop - 120 + 'px';
		blocks_lava_play_test[i].style.left = blocks_lava_play_test[i].offsetLeft + 90 + 'px';
	}
	var blocks_for_outer = document.querySelectorAll(`.blocks_check > *`);
	var blocks_lava_for_outer = document.querySelectorAll(`.blocks_lava_check > *`);
	for (var i = 0; i < blocks_for_outer.length; i++) {
		document.querySelector('.game > .blocks').innerHTML += blocks_for_outer[i].outerHTML;
	}
	for (var i = 0; i < blocks_lava_for_outer.length; i++) {
		document.querySelector('.game > .blocks_lava').innerHTML += blocks_lava_for_outer[i].outerHTML;
	}
	blocksX = document.querySelectorAll('.blocks > *');
	blocksY = document.querySelectorAll('.blocks > *');
	blocksHeight = document.querySelectorAll('.blocks > *');
	blocksWidth = document.querySelectorAll('.blocks > *');
	X = [];
	Y = [];
	bWidth = [];
	bHeight = [];
	blocks_lavaX = document.querySelectorAll('.blocks_lava > *');
	blocks_lavaY = document.querySelectorAll('.blocks_lava > *');
	blocks_lavaHeight = document.querySelectorAll('.blocks_lava > *');
	blocks_lavaWidth = document.querySelectorAll('.blocks_lava > *');
	X_lava = [];
	Y_lava = [];
	b_lavaWidth = [];
	b_lavaHeight = [];
	reset_let();
	document.querySelector('.creating').style.display = 'none';
	if (document.querySelector('.menu > .blocks_check').outerHTML != '<div class="blocks_check"></div>' || document.querySelector('.menu > .blocks_lava_check').outerHTML != '<div class="blocks_lava_check"></div>') {
		localStorage.setItem('block', document.querySelector('.menu > .blocks_check').outerHTML);
		localStorage.setItem('block_lava', document.querySelector('.menu > .blocks_lava_check').outerHTML);
	}
}
function last_save() {
	document.querySelector('.blocks_check').outerHTML = localStorage.getItem('block');
	document.querySelector('.blocks_lava_check').outerHTML = localStorage.getItem('block_lava');
	var block_check_ = document.querySelectorAll('.menu > .blocks_check > *');
	var block_lava_check_ = document.querySelectorAll('.menu > .blocks_lava_check > *');
	setTimeout(function() {
		for (var i = 0; i < block_check_.length; i++) {
			block_check_[i].style.top = block_check_[i].offsetTop + 100 + 'px';
			block_check_[i].style.left = block_check_[i].offsetLeft - 90 + 'px';
		}
		for (var i = 0; i < block_lava_check_.length; i++) {
			block_lava_check_[i].style.top = block_lava_check_[i].offsetTop + 100 + 'px';
			block_lava_check_[i].style.left = block_lava_check_[i].offsetLeft - 90 + 'px';
		}
	}, 20);
}

document.onkeydown = function(e) {
	if (e.code == 'KeyW' || e.code == 'KeyA' || e.code == 'KeyS' || e.code == 'KeyD') {
		Keycode = e.code;
	}
	if (e.code == 'Enter') {
		if (create_block_lava.offsetTop != 15) {
			let w_ = create_block_lava.style.width;
			let h_ = create_block_lava.style.height;
			let recount_lava = document.querySelectorAll('.blocks_lava_check > *');
			let name_class_lava = recount_lava.length + 1;
			document.querySelector('.blocks_lava_check').innerHTML += `<div class="block_${name_class_lava}"></div>`; // Create
			// Custom
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.position = 'absolute';
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.top = create_block_lava.offsetTop - 2 + 'px';
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.left = create_block_lava.offsetLeft - 2 + 'px';
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.width = create_block_lava.offsetWidth + 'px';
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.height = create_block_lava.offsetHeight + 'px';
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.background = 'rgba(255, 114, 0, 0.1)';
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.boxShadow = '0px 0px 10px 0px rgba(255, 114, 0, 0.2)';
			document.querySelector(`.blocks_lava_check > .block_${name_class_lava}`).style.border = '1px solid #FF7200';
			// Reset
			settings_block_lava_w.value = '70';
			settings_block_lava_h.value = '70';
			setTimeout(function() {
				document.querySelector('.block_lava_create').style.top = '15px';
				document.querySelector('.block_lava_create').style.left = '105px';
			}, 20);
		}
		if (create_block.offsetTop != 15) {
			let w_ = create_block.style.width;
			let h_ = create_block.style.height;
			let recount_block = document.querySelectorAll('.blocks_check > *');
			let name_class_block = recount_block.length + 1;
			document.querySelector('.blocks_check').innerHTML += `<div class="block_${name_class_block}"></div>`; // Create
			// Custom
			document.querySelector(`.blocks_check > .block_${name_class_block}`).style.position = 'absolute';
			document.querySelector(`.blocks_check > .block_${name_class_block}`).style.top = create_block.offsetTop - 2 + 'px';
			document.querySelector(`.blocks_check > .block_${name_class_block}`).style.left = create_block.offsetLeft - 2 + 'px';
			document.querySelector(`.blocks_check > .block_${name_class_block}`).style.width = create_block.offsetWidth + 'px';
			document.querySelector(`.blocks_check > .block_${name_class_block}`).style.height = create_block.offsetHeight + 'px';
			document.querySelector(`.blocks_check > .block_${name_class_block}`).style.background = '#111111';
			document.querySelector(`.blocks_check > .block_${name_class_block}`).style.border = '1px solid white';
			// Reset
			settings_block_w.value = '70';
			settings_block_h.value = '70';
			setTimeout(function() {
				document.querySelector('.block_create').style.top = '15px';
				document.querySelector('.block_create').style.left = '15px';
			}, 20);
		}
	}
	if (e.code == 'Backspace') {
		setTimeout(function() {
			document.querySelector('.block_lava_create').style.top = '15px';
			document.querySelector('.block_lava_create').style.left = '105px';
		}, 20);
		setTimeout(function() {
			document.querySelector('.block_create').style.top = '15px';
			document.querySelector('.block_create').style.left = '15px';
		}, 20);
	}
}

document.onkeyup = function() {
	Keycode = 0;
}

// 1. Сделать оф уровни! |ЕЩЕ НЕ СДЕЛАЛ|
// 2. Сделать сохранение кастомных уровней!!! |ПОСЛЕДНИЙ СОХРАНЯЕТСЯ|
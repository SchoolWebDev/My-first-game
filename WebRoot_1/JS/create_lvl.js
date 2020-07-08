let zone = document.querySelector('.zone');
let blocks_check = document.querySelector('.blocks_check');
let blocks_lava_check = document.querySelector('.blocks_lava_check');
let create_block = document.querySelector('.block_create');
let create_block_lava = document.querySelector('.block_lava_create');
let create_block_X = create_block.offsetLeft;
let create_block_Y = create_block.offsetTop;
let settings_block_lava_w = document.querySelector('.settings_block_lava_w');
let settings_block_lava_h = document.querySelector('.settings_block_lava_h');
let settings_block_w = document.querySelector('.settings_block_w');
let settings_block_h = document.querySelector('.settings_block_h');

setTimeout(function() {
	if (create_block_lava.offsetTop != 15) {
		create_block_lava.style.width = settings_block_lava_w.value + 'px';
		create_block_lava.style.height = settings_block_lava_h.value + 'px';
	}
	if (create_block.offsetTop != 15) {
		create_block.style.width = settings_block_w.value + 'px';
		create_block.style.height = settings_block_h.value + 'px';
	}
	if (settings_block_lava_w.value > 700) {
		document.querySelector('.settings_block_lava_w').value = 700;
	}
	if (settings_block_lava_h.value > 300) {
		document.querySelector('.settings_block_lava_h').value = 700;
	}
	if (settings_block_w.value > 700) {
		document.querySelector('.settings_block_w').value = 700;
	}
	if (settings_block_h.value > 300) {
		document.querySelector('.settings_block_h').value = 700;
	}

	requestAnimationFrame(arguments.callee);
}, 20);

function on_block() {
	document.querySelector('.name_block').innerHTML = 'block';
	document.querySelector('.block').style.display = 'block';
	document.querySelector('.lava').style.display = 'none';
}

function on_block_lava() {
	document.querySelector('.name_block').innerHTML = 'lava';
	document.querySelector('.block').style.display = 'none';
	document.querySelector('.lava').style.display = 'block';
}

create_block_lava.onmousedown = function() {
	zone.style.zIndex = '20';
	zone.style.cursor = 'pointer';
	zone.onmousemove = function(e) {
	 	create_block_lava.style.top = e.offsetY + 70 + 'px';
	 	create_block_lava.style.left = e.offsetX - 36 + 'px';
	}
}

create_block.onmousedown = function() {
	zone.style.zIndex = '20';
	zone.style.cursor = 'pointer';
	zone.onmousemove = function(e) {
	 	create_block.style.top = e.offsetY + 70 + 'px';
	 	create_block.style.left = e.offsetX - 36 + 'px';
	}
}

document.onmouseup = function() {
	zone.onmousemove = null;
	zone.style.cursor = 'default';
	zone.style.zIndex = '-1'; 
}
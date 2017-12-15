import {Sprite} from './Sprite.js';

let titanPath = '../pictures/titan.png';
export let Titan = function(){
	this.x = -1000;
	this.y = -1000;
	this.sprites = [ new Sprite(titanPath, false, true, 1250, 150),
			 new Sprite(titanPath, false, true, 1188, 150),
		     new Sprite(titanPath, false, true, 1116, 150),
			 new Sprite(titanPath, false, true, 1050, 150),
			 new Sprite(titanPath, false, true, 985, 150),
			 new Sprite(titanPath, false, true, 925, 150),
		     new Sprite(titanPath, false, true, 850, 150),
			 new Sprite(titanPath, false, true, 770, 150),
			 new Sprite(titanPath, false, true, 680, 150),
			 new Sprite(titanPath, false, true, 600, 150),
			 new Sprite(titanPath, false, true, 1250, 0),
			 new Sprite(titanPath, false, true, 530, 310),
			 new Sprite(titanPath, false, true, 428, 310),
			 new Sprite(titanPath, false, true, 337, 310),
			 new Sprite(titanPath, false, true, 249, 310),
			 new Sprite(titanPath, false, true, 161, 310),
			 new Sprite(titanPath, false, true, 85, 310)];
}

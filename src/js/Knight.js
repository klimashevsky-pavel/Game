import {Sprite} from './Sprite.js';

let knightPath = '../pictures/Knight.png';
export let Knight = function(){
	this.sprites = [new Sprite(knightPath, false, true, 970, 170, 100),
					new Sprite(knightPath, false, true, 868, 170, 100),
					new Sprite(knightPath, false, true, 766, 170, 100),
					new Sprite(knightPath, false, true, 664, 170, 100),
					new Sprite(knightPath, false, true, 564, 170, 100),
					new Sprite(knightPath, false, true, 466, 170, 100),
					new Sprite(knightPath, false, true, 368, 170, 100),
					new Sprite(knightPath, false, true, 268, 170, 100),];
}
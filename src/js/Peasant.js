import {Sprite} from './Sprite.js';

let peasantPath = '../pictures/Peasant.png';
export let Peasant = function(){
	this.x = -1000;
	this.y = -1000;
	this.sprites = [ new Sprite(peasantPath, false, true, 200, 100),
					new Sprite(peasantPath, false, true, 300, 100),
					new Sprite(peasantPath, false, true, 400, 100),
					new Sprite(peasantPath, false, true, 505, 100),
					new Sprite(peasantPath, false, true, 610, 100),
					new Sprite(peasantPath, false, true, 710, 100),
					new Sprite(peasantPath, false, true, 5, 215),
					new Sprite(peasantPath, false, true, 105, 215)]; 
}
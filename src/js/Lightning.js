import {Sprite} from './Sprite.js';

let titanPath = '../pictures/titan.png';
export let Lightning = function(){
 	this.x = -1000;
	this.y = -1000;
 	this.sprite = new Sprite(titanPath, false, true, 120, 90, 70, 70)
 }
import {Sprite} from './Sprite.js';

let path = '../pictures/path2.jpg';
let pathRev = '../pictures/path2rev.jpg';
export let Road = function(is_reversed){
 		if(is_reversed){
 			this.texture = new Sprite(pathRev, false);
 		}else{
 			this.texture = new Sprite(path, false);
 		}
 }
import {createLightning} from './createLightning.js'

export function createTitan(rotateX, rotateY, titanElem, i, lightning){
	let coordinateY = rotateY;
	let helper = 150;
	if(rotateX < 0){
		return;
	}
	if(rotateX < 300){ 
		titanElem.throwIndexArray = [11, 11, 11, 11, 11,
								 	 12, 12, 12, 12, 12,
								 	 13, 13, 13, 13, 13,
								 	 14, 14, 14, 14, 14,
								 	 15, 15, 15, 15, 15,
								 	 16, 16, 16, 16, 16];
		i = 10;
		rotateX = Math.floor(rotateX/2);
		helper = 0;

	}else if(titanElem.throwIndexArray.length !== 0){
		i = titanElem.throwIndexArray.shift();
		
	}
	let coordinateX = 900 - rotateX + helper;
	if(titanElem.throwIndexArray.length === 0){
		createLightning(coordinateX, coordinateY + 16, lightning, coordinateX);
	}
	titanElem.x = coordinateX;
	titanElem.y = coordinateY;
	titanElem.sprites[i].draw(coordinateX, coordinateY, 54, 74);
	return titanElem;
}
import {gameOver} from './gameOver.js';

export function checkCollision(peasant, titans, lightnings, knights, totalScore){
	let collapse = false;
	titans.forEach(function(titan){
		if(titan.x){
		if((titan.x - peasant.x) < 32 && (titan.x - peasant.x) > -20 &&
		Math.abs(titan.y - peasant.y + 10) < 32){
			collapse = true;
		}
	}
	});
	knights.forEach(function(knight){
		if(knight.x){
		if((knight.x - peasant.x) < 32 && (knight.x - peasant.x) > -20 &&
		Math.abs(knight.y - peasant.y + 10) < 32){
			collapse = true;
		}
	}
	});
	lightnings.forEach(function(lightning){
		if(lightning.x){
		if((lightning.x - peasant.x) < 32 && (lightning.x - peasant.x) > -20 && 
		Math.abs(lightning.y - peasant.y - 6) < 24){
			collapse = true;
		}
	}
	})
	if(collapse){
		gameOver(totalScore);
	}
}
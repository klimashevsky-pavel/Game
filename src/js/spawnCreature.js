import {notSame, returnArrayOfTrueOrFalse} from './mathFunctions';
import {checkCollision} from './checkCollision';
import {createTitan} from './createTitan.js';
import {createKnight} from './createKnight.js';

export let spawnCreature = function(totalScore, titans, i, lightnings, peasant, peasantIndex, peasantY, knights, knightsIndex){
	let knightsArray = [];
	let titansArray = [];
	let rotateY = [150, 278, 406];
	let randomNumber = 0;
	let anotherRandomNumber = 0;
	peasant.x = 20;
	peasant.y = peasantY;
	peasant.sprites[peasantIndex].draw(20, peasantY, 44, 64);
	if(totalScore % 1200 < 20 && totalScore % 1200 > 0 ){  // Calculating
		randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
		anotherRandomNumber = notSame(randomNumber);
		spawnCreature.firstPeriodY = [rotateY[randomNumber - 1]];
		spawnCreature.firstPeriodY.push(rotateY[anotherRandomNumber - 1]);
		if(!spawnCreature.thirdPeriodDoubleLine){
			if(returnArrayOfTrueOrFalse(1)[0]){
				spawnCreature.firstPeriodConfig = returnArrayOfTrueOrFalse(2);
				spawnCreature.firstPeriodDoubleLine = true;
			}else{
				spawnCreature.firstPeriodConfig = returnArrayOfTrueOrFalse(1);
				spawnCreature.firstPeriodDoubleLine = false;
			}
		}else{
			spawnCreature.firstPeriodConfig = returnArrayOfTrueOrFalse(1);
			spawnCreature.firstPeriodDoubleLine = false;
		}
	}

	if(totalScore % 1200 - 400< 20 && totalScore % 1200 - 400 > 0 ){  
		randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
		anotherRandomNumber = notSame(randomNumber);
		spawnCreature.secondPeriodY = [rotateY[randomNumber - 1]];
		spawnCreature.secondPeriodY.push(rotateY[anotherRandomNumber - 1]);
		if(!spawnCreature.firstPeriodDoubleLine){
			if(returnArrayOfTrueOrFalse(1)[0]){
				spawnCreature.secondPeriodConfig = returnArrayOfTrueOrFalse(2);
				spawnCreature.secondPeriodDoubleLine = true;
			}else{
				spawnCreature.secondPeriodConfig = returnArrayOfTrueOrFalse(1);
				spawnCreature.secondPeriodDoubleLine = false;
			}
		}else{
			spawnCreature.secondPeriodConfig = returnArrayOfTrueOrFalse(1);
			spawnCreature.secondPeriodDoubleLine = false;
		}
	}
	if(totalScore % 1200 - 800< 20 && totalScore % 1200 - 800 > 0 ){  
		randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
		anotherRandomNumber = notSame(randomNumber);
		spawnCreature.thirdPeriodY = [rotateY[randomNumber - 1]];
		spawnCreature.thirdPeriodY.push(rotateY[anotherRandomNumber - 1]);
		if(!spawnCreature.secondPeriodDoubleLine){
			if(returnArrayOfTrueOrFalse(1)[0]){
				spawnCreature.thirdPeriodConfig = returnArrayOfTrueOrFalse(2);
				spawnCreature.thirdPeriodDoubleLine = true;
			}else{
				spawnCreature.thirdPeriodConfig = returnArrayOfTrueOrFalse(1);
				spawnCreature.thirdPeriodDoubleLine = false;
			}
		}else{
			spawnCreature.thirdPeriodConfig = returnArrayOfTrueOrFalse(1);
			spawnCreature.thirdPeriodDoubleLine = false;
		}
	}
	if(spawnCreature.firstPeriodConfig){
		if(spawnCreature.firstPeriodDoubleLine){
			if(spawnCreature.firstPeriodConfig[0]){
				titansArray.push(createTitan((totalScore) % 1200, spawnCreature.firstPeriodY[0], titans[0], i, lightnings[0]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore) % 1200, spawnCreature.firstPeriodY[0], knights[0], knightsIndex));
			}
			if(spawnCreature.firstPeriodConfig[1]){
				titansArray.push(createTitan((totalScore) % 1200, spawnCreature.firstPeriodY[1], titans[1], i, lightnings[1]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore) % 1200, spawnCreature.firstPeriodY[1], knights[1], knightsIndex));
			}
		}else{
			if(spawnCreature.firstPeriodConfig[0]){
				titansArray.push(createTitan((totalScore) % 1200, spawnCreature.firstPeriodY[0], titans[0], i, lightnings[0]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore) % 1200, spawnCreature.firstPeriodY[0], knights[0], knightsIndex));
			}
		}
	}
	if(spawnCreature.secondPeriodConfig){
		if(spawnCreature.secondPeriodDoubleLine){
			if(spawnCreature.secondPeriodConfig[0]){
				titansArray.push(createTitan((totalScore - 400) % 1200 , spawnCreature.secondPeriodY[0], titans[2], i, lightnings[2]));
			}else{
				knightsArray.push(createKnight(1050 - ((totalScore - 400) % 1200 ), spawnCreature.secondPeriodY[0], knights[2], knightsIndex));
			}
			if(spawnCreature.secondPeriodConfig[1]){
				titansArray.push(createTitan((totalScore - 400) % 1200 , spawnCreature.secondPeriodY[1], titans[3], i, lightnings[3]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore - 400) % 1200 , spawnCreature.secondPeriodY[1], knights[3], knightsIndex));
			}
		}else{
			if(spawnCreature.secondPeriodConfig[0]){
				titansArray.push(createTitan((totalScore - 400) % 1200, spawnCreature.secondPeriodY[0], titans[2], i, lightnings[2]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore - 400) % 1200, spawnCreature.secondPeriodY[0], knights[2], knightsIndex));
			}
		}
	}

	if(spawnCreature.thirdPeriodConfig){
		if(spawnCreature.thirdPeriodDoubleLine){
			if(spawnCreature.thirdPeriodConfig[0]){
				titansArray.push(createTitan((totalScore - 800) % 1200, spawnCreature.thirdPeriodY[0], titans[4], i, lightnings[4]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore - 800) % 1200 , spawnCreature.thirdPeriodY[0], knights[4], knightsIndex));
			}
			if(spawnCreature.thirdPeriodConfig[1]){
				titansArray.push(createTitan((totalScore - 800) % 1200, spawnCreature.thirdPeriodY[1], titans[5], i, lightnings[5]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore - 800) % 1200, spawnCreature.thirdPeriodY[1], knights[5], knightsIndex));
			}
		}else{
			if(spawnCreature.thirdPeriodConfig[0]){
				titansArray.push(createTitan((totalScore - 800) % 1200 , spawnCreature.thirdPeriodY[0], titans[4], i, lightnings[4]));
			}else{
				knightsArray.push(createKnight(1050 - (totalScore - 800) % 1200, spawnCreature.thirdPeriodY[0], knights[4], knightsIndex));
			}
		}
	}
	checkCollision(peasant, titansArray, lightnings, knightsArray, totalScore);
}

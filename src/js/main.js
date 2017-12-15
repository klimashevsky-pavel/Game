import '../style/style.css';
import {spawnCreature} from './spawnCreature';
import {Road} from './Road.js';
import {Titan} from './Titan.js';
import {Knight} from './Knight.js';
import {Peasant} from './Peasant.js';
import {Context} from './Context.js';
import {Lightning} from './Lightning.js';
import {fileLoader, files} from './fileLoader.js';


let lines = [];
export let downloaded = {
	value: false};
export let end = {
	value: false
};
	fileLoader(files);
	Context.create();
	Context.context.fillStyle = '#000000';
	Context.context.fillRect(0, 0, 800, 800);				

	document.getElementById('start-button').addEventListener('click',function(){
		if(downloaded.value){
			let elem = document.getElementsByClassName('menu');
			elem[0].style.display = 'none';
			startGame();
		}
	} );

	document.getElementById('restart-button').addEventListener('click',function(){
		if(downloaded.value){
			let elem = document.getElementsByClassName('try-again');
			elem[0].style.display = 'none';
			ClearAll(spawnCreature);
			end.value = false;
			startGame();
		}
	} );


	function startGame(){
		let knights = [];
		let titans = [];
		let lightnings = []
		for(let i = 0; i < 6; i++){
			titans.push(new Titan());
			knights.push(new Knight());
			lightnings.push(new Lightning());
		}
		let pathTexturesTop = new Road(false);
		let pathTexturesBottom = new Road(true);
		let peasant = new Peasant();
		let acceleration = 0;
		let fps = 5;
		let now;
		let then = Date.now();
		let interval = 1000/fps;
		let delta;
		let movementAvailable = true
		let x = 0;
		let titanIndex = 0;
		let knightsIndex = 0;
		let totalScore = 0;
		let count = 0;
		let peasantIndex = 0;
		let posY = 0;
		let posX = 0;
		let speed = 2;
		let eventId = 0;
		const possibleEvents = {
			FROM_FIRST_TO_SECOND: 'FROM_FIRST_TO_SECOND',
			FROM_SECOND_TO_THIRD: 'FROM_SECOND_TO_THIRD',
			FROM_SECOND_TO_FIRST: 'FROM_SECOND_TO_FIRST',
			FROM_THIRD_TO_SECOND: 'FROM_THIRD_TO_SECOND'
		}
		let peasantY = 160;
			function loop(){
				if(end.value){
					totalScore = 0;
					acceleration = 0;
					return;
				}
			acceleration++;
			Context.context.clearRect(0, 0, 800, 800);
			for(let i = 0; i < 16; i++){
				let form = 64*i - x - 64;
				pathTexturesTop.texture.draw(form, 128, 64, 64);
				pathTexturesTop.texture.draw(form, 256, 64, 64);
				pathTexturesTop.texture.draw(form, 384, 64, 64);
				pathTexturesBottom.texture.draw(form, 192, 64, 64);
				pathTexturesBottom.texture.draw(form, 320, 64, 64);
				pathTexturesBottom.texture.draw(form, 448, 64, 64);

			}

			switch(eventId){
				case possibleEvents.FROM_FIRST_TO_SECOND:
				  movementAvailable = false;
				  peasantY+=speed * 1.5;
			 	  if(peasantY > 288){
					  peasantY = 288;
					  eventId = 0;
					  movementAvailable = true;
			      }
			      break;
			    case possibleEvents.FROM_SECOND_TO_THIRD:
				  movementAvailable = false;
				  peasantY+=speed * 1.5;
			 	  if(peasantY > 416){
					  peasantY = 416;
					  eventId = 0;
					  movementAvailable = true;
			      }
			      break;
			    case possibleEvents.FROM_SECOND_TO_FIRST:
				  movementAvailable = false;
				  peasantY-=speed * 1.5;
			 	  if(peasantY < 160){
					  peasantY = 160;
					  eventId = 0;
					  movementAvailable = true;
			      }
			      break;
			    case possibleEvents.FROM_THIRD_TO_SECOND:
				  movementAvailable = false;
				  peasantY-=speed * 1.5;
			 	  if(peasantY < 288){
					  peasantY = 288;
					  eventId = 0;
					  movementAvailable = true;
			      }
			      break;
			}
			totalScore += speed;
			document.getElementsByClassName('score-number')[0].innerText = Math.round(totalScore/10);
			spawnCreature(totalScore, titans, titanIndex, lightnings, peasant, 
						  peasantIndex, peasantY, knights, knightsIndex);
			count++;
			if(count === 5){
				titanIndex++
				peasantIndex++;
				knightsIndex++;
				count = 0;
			}
			if(knightsIndex === 8){knightsIndex = 0;}
			if(peasantIndex === 8){peasantIndex = 0;}
			if(titanIndex === 10){titanIndex = 0;}
			x+=1;
			if(x >= 64){x = 0;};
			speed = 2 + (acceleration/500);
			if(speed > 15){speed = 15;};
			requestAnimationFrame(loop);

		}
		loop();
		document.addEventListener('keydown', (event) => {
			if(movementAvailable){
					const keyCode = event.keyCode;
					if (keyCode === 83 && peasantY === 160) {
					eventId = possibleEvents.FROM_FIRST_TO_SECOND;
					}
					if (keyCode === 83 && peasantY === 288) {
					eventId = possibleEvents.FROM_SECOND_TO_THIRD;
					}
					if (keyCode === 87 && peasantY === 288) {
					eventId = possibleEvents.FROM_SECOND_TO_FIRST
					}
					if (keyCode === 87 && peasantY === 416) {
					eventId = possibleEvents.FROM_THIRD_TO_SECOND;
					}
				}
		}, false);

}

function ClearAll(func){
	func.firstPeriodY = [];
	func.firstPeriodConfig = [];
	func.firstPeriodDoubleLine = true;
	func.secondPeriodY = [];
	func.secondPeriodConfig = [];
	func.secondPeriodDoubleLine = true;
	func.thirdPeriodY = [];
	func.thirdPeriodConfig = [];
	func.thirdPeriodDoubleLine = true;
}









/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sprite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Context_js__ = __webpack_require__(2);


let Sprite = function(filename, is_pattern = false, is_animated = false, picX, picY, picHeight = 64, picWidth = 128){
	this.image = null;
	this.pattern = null;
	if(filename){
		this.image = new Image();
		this.image.src = filename;		
	}else{
		console.log('Sprite was not created');
	}

	this.draw = function(x, y, w, h){
		if(is_pattern){
			__WEBPACK_IMPORTED_MODULE_0__Context_js__["a" /* Context */].context.fillStyle = __WEBPACK_IMPORTED_MODULE_0__Context_js__["a" /* Context */].context.createPattern(this.image, 'repeat');;
			__WEBPACK_IMPORTED_MODULE_0__Context_js__["a" /* Context */].context.fillRect(x, y, w, h);
		}else if(is_animated){
				__WEBPACK_IMPORTED_MODULE_0__Context_js__["a" /* Context */].context.drawImage(this.image, picX, picY, picHeight, picWidth, x, y, w, h);
		}else{
			if(!w || !h){

				__WEBPACK_IMPORTED_MODULE_0__Context_js__["a" /* Context */].context.drawImage(this.image, x, y,
											this.image.width,
											this.image.height);
			}else{
				__WEBPACK_IMPORTED_MODULE_0__Context_js__["a" /* Context */].context.drawImage(this.image, x, y, w, h);
			}
		}
	}

}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloaded", function() { return downloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spawnCreature__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Road_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Titan_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Knight_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Peasant_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Context_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Lightning_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fileLoader_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Immortality_js__ = __webpack_require__(18);












let lines = [];
let downloaded = {
	value: true};
let end = {
	value: false
};
	Object(__WEBPACK_IMPORTED_MODULE_7__fileLoader_js__["a" /* fileLoader */])(__WEBPACK_IMPORTED_MODULE_7__fileLoader_js__["b" /* files */]);
	__WEBPACK_IMPORTED_MODULE_5__Context_js__["a" /* Context */].create();
	__WEBPACK_IMPORTED_MODULE_5__Context_js__["a" /* Context */].context.fillStyle = '#000000';
	__WEBPACK_IMPORTED_MODULE_5__Context_js__["a" /* Context */].context.fillRect(0, 0, 800, 800);				

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
			ClearAll(__WEBPACK_IMPORTED_MODULE_0__spawnCreature__["a" /* spawnCreature */]);
			end.value = false;
			startGame();
		}
	} );


	function startGame(){
		let knights = [];
		let titans = [];
		let lightnings = []
		for(let i = 0; i < 6; i++){
			titans.push(new __WEBPACK_IMPORTED_MODULE_2__Titan_js__["a" /* Titan */]());
			knights.push(new __WEBPACK_IMPORTED_MODULE_3__Knight_js__["a" /* Knight */]());
			lightnings.push(new __WEBPACK_IMPORTED_MODULE_6__Lightning_js__["a" /* Lightning */]());
		}
		let pathTexturesTop = new __WEBPACK_IMPORTED_MODULE_1__Road_js__["a" /* Road */](false);
		let pathTexturesBottom = new __WEBPACK_IMPORTED_MODULE_1__Road_js__["a" /* Road */](true);
		let peasant = new __WEBPACK_IMPORTED_MODULE_4__Peasant_js__["a" /* Peasant */]();
		let immortality = new __WEBPACK_IMPORTED_MODULE_8__Immortality_js__["a" /* Immortality */]();
		let acceleration = 0;
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
			__WEBPACK_IMPORTED_MODULE_5__Context_js__["a" /* Context */].context.clearRect(0, 0, 800, 800);
			for(let i = 0; i < 16; i++){ // drawing roads like mattrix
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
			Object(__WEBPACK_IMPORTED_MODULE_0__spawnCreature__["a" /* spawnCreature */])(totalScore, titans, titanIndex, lightnings, peasant, 
						  peasantIndex, peasantY, knights, knightsIndex, immortality);
			count++;
			if(count === 5){ // sprite changes every 5 frames
				titanIndex++
				peasantIndex++;
				knightsIndex++;
				count = 0;
			}
			if(knightsIndex === 8){knightsIndex = 0;}
			if(peasantIndex === 8){peasantIndex = 0;}
			if(titanIndex === 10){titanIndex = 0;}
			x+=1; 
			if(x >= 64){x = 0;}; // loop for road redrawing
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

function ClearAll(func){ //clears all properties before restart
	__WEBPACK_IMPORTED_MODULE_0__spawnCreature__["a" /* spawnCreature */].interval = 1;
	__WEBPACK_IMPORTED_MODULE_0__spawnCreature__["a" /* spawnCreature */].immortalityAvailable = false;
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
let Context = {
	canvas: null,
	context: null,
	create: function(){
		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		return this.context;
	}
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spawnCreature; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mathFunctions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkCollision__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createTitan_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createKnight_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createImmortality_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isImmortal_js__ = __webpack_require__(11);








let spawnCreature = function(totalScore, titans, i, lightnings, peasant, peasantIndex, 
									peasantY, knights, knightsIndex, immortality){
	if(!spawnCreature.interval){	// Creating interval counter, so immortality cant drop in a row		
		spawnCreature.interval = 1;
	}
	const periodInterval = 400; 
	let knightsArray = [];
	let titansArray = [];
	const rotateY = [150, 278, 406];
	let randomNumber = 0;
	let anotherRandomNumber = 0;
	peasant.x = 20;
	peasant.y = peasantY;
	peasant.sprites[peasantIndex].draw(20, peasantY, 44, 64);
	if(totalScore % 1200 < 20 && totalScore % 1200 > 0 ){ 		//There are 3 looped periods, they can be at the screen at the same time, 
		spawnCreature.immortalityAvailable = false;  			// from the start of each we random creatures and their lines. This is 1st period
		randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;	
		anotherRandomNumber = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["a" /* notSame */])(randomNumber);
		spawnCreature.firstPeriodY = [rotateY[randomNumber - 1]];//create array of 2 value, 2 Y's for diffrent lines
		spawnCreature.firstPeriodY.push(rotateY[anotherRandomNumber - 1]);
		if(!spawnCreature.thirdPeriodDoubleLine){ //checking, that in previous line there was 1 creature, because 2 double lines in a row are not impossible
			if(Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1)[0]){  //random true or falsy value, to define, single or double line. True - create 2 creatures
				spawnCreature.firstPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(2); // randomazing cratures, titans or knights
				spawnCreature.firstPeriodDoubleLine = true; //set flag to this line, that it is double line
			}else{ // 1 creature
				spawnCreature.firstPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1);
				spawnCreature.firstPeriodDoubleLine = false;
				let odd = Math.floor(Math.random() * (4 - 1)) + 1;//case 1 creature it is possible to spawn boost(immortality) here, odds - 1/3
			if(odd === 2 && (totalScore - spawnCreature.interval) > 5000){ //after 500 score at least (5000 = 500 in browser), also 1 boost in 500 interval min.
				spawnCreature.immortalityAvailable = true; //flag
			}
			}
		}else{
			spawnCreature.firstPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1); // the same spawn of 1 creature, but if in previous line was 2 creatures
			spawnCreature.firstPeriodDoubleLine = false;
			let odd = Math.floor(Math.random() * (4 - 1)) + 1; //the boost spawns only on first period from 3
			if(odd === 2 && (totalScore - spawnCreature.interval) > 5000){
				spawnCreature.immortalityAvailable = true;
			}
			
		}
	}

	if(totalScore % 1200 - periodInterval< 20 && totalScore % 1200 - periodInterval > 0 ){  // second period
		randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
		anotherRandomNumber = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["a" /* notSame */])(randomNumber);
		spawnCreature.secondPeriodY = [rotateY[randomNumber - 1]];
		spawnCreature.secondPeriodY.push(rotateY[anotherRandomNumber - 1]);
		if(!spawnCreature.firstPeriodDoubleLine){
			if(Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1)[0]){
				spawnCreature.secondPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(2);
				spawnCreature.secondPeriodDoubleLine = true;
			}else{
				spawnCreature.secondPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1);
				spawnCreature.secondPeriodDoubleLine = false;
			}
		}else{
			spawnCreature.secondPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1);
			spawnCreature.secondPeriodDoubleLine = false;
		}
	}
	if(totalScore % 1200 - periodInterval * 2 < 20 && totalScore % 1200 - periodInterval * 2  > 0 ){  //third period, difference between periods - periodIntervalpx
		randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
		anotherRandomNumber = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["a" /* notSame */])(randomNumber);
		spawnCreature.thirdPeriodY = [rotateY[randomNumber - 1]];
		spawnCreature.thirdPeriodY.push(rotateY[anotherRandomNumber - 1]);
		if(!spawnCreature.secondPeriodDoubleLine){
			if(Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1)[0]){
				spawnCreature.thirdPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(2);
				spawnCreature.thirdPeriodDoubleLine = true;
			}else{
				spawnCreature.thirdPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1);
				spawnCreature.thirdPeriodDoubleLine = false;
			}
		}else{
			spawnCreature.thirdPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1);
			spawnCreature.thirdPeriodDoubleLine = false;
		}
	}
	if(spawnCreature.firstPeriodConfig){ 		// drawing creatures according to flag. period 1
		if(spawnCreature.firstPeriodDoubleLine){ // if double line defined here
			if(spawnCreature.firstPeriodConfig[0]){ // 1 - titan, 0 - knight
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore) % 1200, spawnCreature.firstPeriodY[0], titans[0], i, lightnings[0]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore) % 1200, spawnCreature.firstPeriodY[0], knights[0], knightsIndex));
			}
			if(spawnCreature.firstPeriodConfig[1]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore) % 1200, spawnCreature.firstPeriodY[1], titans[1], i, lightnings[1]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore) % 1200, spawnCreature.firstPeriodY[1], knights[1], knightsIndex));
			}
		}else{
			if(spawnCreature.firstPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore) % 1200, spawnCreature.firstPeriodY[0], titans[0], i, lightnings[0]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore) % 1200, spawnCreature.firstPeriodY[0], knights[0], knightsIndex));
			}
			if(spawnCreature.immortalityAvailable){ //boost drawing
					Object(__WEBPACK_IMPORTED_MODULE_4__createImmortality_js__["a" /* createImmortality */])(1050 - (totalScore) % 1200, spawnCreature.firstPeriodY[1] + 22, immortality);
					if((totalScore) % 1200 > 25){
							spawnCreature.interval = totalScore;
						}
			}
		}
	}
	if(spawnCreature.secondPeriodConfig){		//period 2
		if(spawnCreature.secondPeriodDoubleLine){
			if(spawnCreature.secondPeriodConfig[0]){ 
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - periodInterval) % 1200 , spawnCreature.secondPeriodY[0], titans[2], i, lightnings[2]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - ((totalScore - periodInterval) % 1200 ), spawnCreature.secondPeriodY[0], knights[2], knightsIndex));
			}
			if(spawnCreature.secondPeriodConfig[1]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - periodInterval) % 1200 , spawnCreature.secondPeriodY[1], titans[3], i, lightnings[3]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - periodInterval) % 1200 , spawnCreature.secondPeriodY[1], knights[3], knightsIndex));
			}
		}else{
			if(spawnCreature.secondPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - periodInterval) % 1200, spawnCreature.secondPeriodY[0], titans[2], i, lightnings[2]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - periodInterval) % 1200, spawnCreature.secondPeriodY[0], knights[2], knightsIndex));
			}
		}
	}

	if(spawnCreature.thirdPeriodConfig){		//period 3
		if(spawnCreature.thirdPeriodDoubleLine){
			if(spawnCreature.thirdPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - periodInterval * 2 ) % 1200, spawnCreature.thirdPeriodY[0], titans[4], i, lightnings[4]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - periodInterval * 2 ) % 1200 , spawnCreature.thirdPeriodY[0], knights[4], knightsIndex));
			}
			if(spawnCreature.thirdPeriodConfig[1]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - periodInterval * 2 ) % 1200, spawnCreature.thirdPeriodY[1], titans[5], i, lightnings[5]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - periodInterval * 2 ) % 1200, spawnCreature.thirdPeriodY[1], knights[5], knightsIndex));
			}
		}else{
			if(spawnCreature.thirdPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - periodInterval * 2 ) % 1200 , spawnCreature.thirdPeriodY[0], titans[4], i, lightnings[4]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - periodInterval * 2 ) % 1200, spawnCreature.thirdPeriodY[0], knights[4], knightsIndex));
			}
		}
	}
	Object(__WEBPACK_IMPORTED_MODULE_5__isImmortal_js__["a" /* isImmortal */])(peasant, immortality, spawnCreature);
	if(peasant.mortal){
		Object(__WEBPACK_IMPORTED_MODULE_1__checkCollision__["a" /* checkCollision */])(peasant, titansArray, lightnings, knightsArray, totalScore);
	}
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = returnArrayOfTrueOrFalse;
/* harmony export (immutable) */ __webpack_exports__["a"] = notSame;
function returnArrayOfTrueOrFalse(arraySize){ //array of number from 1 to 3, used in line definition for monster to not collapse
	let array = [];
	for(let i = 0; i < arraySize; i++){
		array.push((Math.floor(Math.random() * (3 - 1)) + 1) - 1);
	}
	return array;
}

function notSame(number){
	let value = Math.floor(Math.random() * (4 - 1)) + 1;
	while (value === number){
		value = Math.floor(Math.random() * (4 - 1)) + 1;
	}
	return value;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkCollision;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameOver_js__ = __webpack_require__(6);


function checkCollision(peasant, titans, lightnings, knights, totalScore){
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
		Object(__WEBPACK_IMPORTED_MODULE_0__gameOver_js__["a" /* gameOver */])(totalScore);
	}
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gameOver;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);


// console.log(end.value);
function gameOver(totalScore){
	__WEBPACK_IMPORTED_MODULE_0__main_js__["end"].value = true;
	let score = document.getElementsByClassName('final-score')[0];
	let elem = document.getElementsByClassName('try-again')[0];
	elem.style.display = 'block';
	score.innerText = `${Math.round(totalScore/10)}`;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTitan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createLightning_js__ = __webpack_require__(8);


function createTitan(rotateX, rotateY, titanElem, i, lightning){
	let coordinateY = rotateY;
	let helper = 150;
	if(rotateX < 0){
		return;
	}
	if(rotateX < 300){ 
		titanElem.throwIndexArray = [11, 11, 11, 11, 11,  // sprite indexes for throw animation
								 	 12, 12, 12, 12, 12,
								 	 13, 13, 13, 13, 13,
								 	 14, 14, 14, 14, 14,
								 	 15, 15, 15, 15, 15,
								 	 16, 16, 16, 16, 16];
		i = 10;
		rotateX = Math.floor(rotateX/2);
		helper = 0;

	}else if(titanElem.throwIndexArray.length !== 0){
		i = titanElem.throwIndexArray.shift(); //after 300px he starts throwing
		
	}
	let coordinateX = 900 - rotateX + helper; //just some math stuff
	if(titanElem.throwIndexArray.length === 0){
		Object(__WEBPACK_IMPORTED_MODULE_0__createLightning_js__["a" /* createLightning */])(coordinateX, coordinateY + 16, lightning, coordinateX); //after throw animation, lightning appear
	}
	titanElem.x = coordinateX;
	titanElem.y = coordinateY;
	titanElem.sprites[i].draw(coordinateX, coordinateY, 54, 74);
	return titanElem;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLightning;
function createLightning(coordinateX, coordinateY, lightning, startPoint){
	if(!lightning.startPoint || lightning.startPoint === -1000 ){
		lightning.startPoint = startPoint;
	}
	lightning.x = coordinateX * 2 - lightning.startPoint;
	lightning.y = coordinateY;
	lightning.sprite.draw(coordinateX * 2 - lightning.startPoint, coordinateY, 50, 50);
	if(coordinateX < -100){
		lightning.startPoint = -1000;
	}
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createKnight;
function createKnight(coordinateX, coordinateY, knight, knightsIndex){
	knight.x = coordinateX;
	knight.y = coordinateY;
	knight.sprites[knightsIndex].draw(coordinateX, coordinateY, 74, 74);
	return knight;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createImmortality;
function createImmortality(coordinateX, coordinateY, immortality){
	immortality.x = coordinateX;
	immortality.y = coordinateY;
	immortality.sprite.draw(coordinateX, coordinateY, 32, 32);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isImmortal;
function isImmortal(peasant, immortality, spawnCreature){
	if((immortality.x - peasant.x) < 32 && (immortality.x - peasant.x) > -20 &&
		Math.abs(immortality.y - peasant.y + 10) < 32){
		let time = 4;
		document.getElementsByClassName('title')[0].innerText = 'IMMORTAL! : 4 sec'
		let timer = setInterval(function(){ 
				time--;
				document.getElementsByClassName('title')[0].innerText = 'IMMORTAL! : '+ time +' sec';
				if (time === 1){
					clearInterval(timer);
				}
			}, 1000);
		immortality.x = -1000;
		immortality.y = -1000;
		peasant.mortal = false;
		spawnCreature.immortalityAvailable = false;
		setTimeout(function(){ 
			document.getElementsByClassName('title')[0].innerText = 'VAIN ESCAPE';
			peasant.mortal = true;
		}, 4000);

	}
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Road; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite_js__ = __webpack_require__(0);


let path = '../src/pictures/path2.jpg';
let pathRev = '../src/pictures/path2rev.jpg';
let Road = function(is_reversed){
 		if(is_reversed){
 			this.texture = new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](pathRev, false);
 		}else{
 			this.texture = new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](path, false);
 		}
 }

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Titan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite_js__ = __webpack_require__(0);


let titanPath = '../src/pictures/titan.png';
let Titan = function(){
	this.x = -1000;
	this.y = -1000;
	this.sprites = [ new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 1250, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 1188, 150),
		     new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 1116, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 1050, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 985, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 925, 150),
		     new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 850, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 770, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 680, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 600, 150),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 1250, 0),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 530, 310),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 428, 310),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 337, 310),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 249, 310),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 161, 310),
			 new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 85, 310)];
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Knight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite_js__ = __webpack_require__(0);


let knightPath = '../src/pictures/Knight.png';
let Knight = function(){
	this.sprites = [new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 970, 170, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 868, 170, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 766, 170, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 664, 170, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 564, 170, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 466, 170, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 368, 170, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](knightPath, false, true, 268, 170, 100),];
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Peasant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite_js__ = __webpack_require__(0);


let peasantPath = '../src/pictures/Peasant.png';
let Peasant = function(){
	this.mortal = true;
	this.x = -1000;
	this.y = -1000;
	this.sprites = [ new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 200, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 300, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 400, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 505, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 610, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 710, 100),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 5, 215),
					new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](peasantPath, false, true, 105, 215)]; 
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lightning; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite_js__ = __webpack_require__(0);


let titanPath = '../src/pictures/titan.png';
let Lightning = function(){
 	this.x = -1000;
	this.y = -1000;
 	this.sprite = new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](titanPath, false, true, 120, 90, 70, 70)
 }

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return files; });
/* harmony export (immutable) */ __webpack_exports__["a"] = fileLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);


let pathArray = ['../src/pictures/path2.jpg', '../src/pictures/path2rev.jpg', 
				 '../src/pictures/Knight.png', '../src/pictures/titan.png',
				 '../src/pictures/Peasant.png' ];
console.log(pathArray);
let files = [];

pathArray.forEach(function(path){
	let img = new Image();
	img.src = path;
	files.push(img);
});


function fileLoader(fileList){
		let loadedCount = 0;
		let spanElem = document.getElementsByClassName('percent')[0];
		for(let i = 0; i < fileList.length; i++){
			fileList[i].onload = function(){
				loadedCount++;
				spanElem.innerHTML = `${(loadedCount/fileList.length) * 100}%`;
				if(loadedCount === fileList.length){
					__WEBPACK_IMPORTED_MODULE_0__main_js__["downloaded"].value = true;
					document.getElementById('start-button').style.display = 'inline-block';
				}
			}
		}
		

	}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Immortality; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite_js__ = __webpack_require__(0);


let immortalityPath = '../src/pictures/immortality.png';
let Immortality = function(){
 	this.x = -1000;
	this.y = -1000;
 	this.sprite = new __WEBPACK_IMPORTED_MODULE_0__Sprite_js__["a" /* Sprite */](immortalityPath, false, true, 960, 600, 80, 85);
 }

/***/ })
/******/ ]);
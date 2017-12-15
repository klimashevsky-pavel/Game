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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_style_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spawnCreature__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Road_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Titan_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Knight_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Peasant_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Context_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Lightning_js__ = __webpack_require__(24);








// import {fileLoader, files} from './fileLoader.js';


let lines = [];
let downloaded = {
	value: true};
let end = {
	value: false
};
	// fileLoader(files);
	__WEBPACK_IMPORTED_MODULE_6__Context_js__["a" /* Context */].create();
	__WEBPACK_IMPORTED_MODULE_6__Context_js__["a" /* Context */].context.fillStyle = '#000000';
	__WEBPACK_IMPORTED_MODULE_6__Context_js__["a" /* Context */].context.fillRect(0, 0, 800, 800);				

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
			ClearAll(__WEBPACK_IMPORTED_MODULE_1__spawnCreature__["a" /* spawnCreature */]);
			end.value = false;
			startGame();
		}
	} );


	function startGame(){
		let knights = [];
		let titans = [];
		let lightnings = []
		for(let i = 0; i < 6; i++){
			titans.push(new __WEBPACK_IMPORTED_MODULE_3__Titan_js__["a" /* Titan */]());
			knights.push(new __WEBPACK_IMPORTED_MODULE_4__Knight_js__["a" /* Knight */]());
			lightnings.push(new __WEBPACK_IMPORTED_MODULE_7__Lightning_js__["a" /* Lightning */]());
		}
		let pathTexturesTop = new __WEBPACK_IMPORTED_MODULE_2__Road_js__["a" /* Road */](false);
		let pathTexturesBottom = new __WEBPACK_IMPORTED_MODULE_2__Road_js__["a" /* Road */](true);
		let peasant = new __WEBPACK_IMPORTED_MODULE_5__Peasant_js__["a" /* Peasant */]();
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
			__WEBPACK_IMPORTED_MODULE_6__Context_js__["a" /* Context */].context.clearRect(0, 0, 800, 800);
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
			Object(__WEBPACK_IMPORTED_MODULE_1__spawnCreature__["a" /* spawnCreature */])(totalScore, titans, titanIndex, lightnings, peasant, 
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
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "body{\r\n\tbackground-image: url(" + __webpack_require__(6) + ");\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n\tmargin: 0;\r\n}\r\n\r\n.wrapper{\r\n\tmargin: 0 auto;\r\n\twidth: 1200px;\r\n}\r\n\r\n.story{\r\n\tmargin: 0 auto;\r\n\theight: 800px;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.story-text{\r\n\ttext-align: center;\r\n\tpadding: 200px;\r\n\tdisplay: block;\r\n\theight: 300px;\r\n\twidth: 800px;\r\n\tfont-family: Arial;\r\n\tfont-size: 32px;\r\n\tcolor: rgb(105, 255, 242);\r\n}\r\n.picture1{\r\n\tbackground-image: url(" + __webpack_require__(7) + ");\r\n}\r\n\r\n.picture2{\r\n\tbackground-image: url(" + __webpack_require__(8) + ");\r\n}\r\n\r\n.picture3{\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n}\r\n\r\n.picture4{\r\n\tbackground-image: url(" + __webpack_require__(10) + ");\r\n}\r\n.game{\r\n\tposition: relative;\r\n}\r\n\r\n.loaded{\r\n\tfont-size: 24px;\r\n\tfont-family: Arial;\r\n\tcolor: white;\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.score-interface{\r\n\tposition: absolute;\r\n\tleft:50%;\r\n\ttop: 100px;\r\n\tmargin-left: -400px;\r\n\twidth: 800px;\r\n\theight: 128px;\r\n\tbackground-color: green;\r\n}\r\n.menu{\r\n\ttext-align: center;\r\n\tposition: absolute;\r\n\tleft:50%;\r\n\ttop: 100px;\r\n\tmargin-left: -400px;\r\n\theight: 512px;\r\n\twidth: 800px;\r\n\tz-index: 10;\r\n\tbackground-color: blue;\r\n}\r\n\r\n.score-interface div{\r\n\tposition: relative;\r\n\tmargin-top: 48px;\r\n}\r\n\r\n.title{\r\npadding-left: 48px;\r\nfont-family: Arial;\r\nfont-size: 32px;\r\ncolor: white;\r\n}\r\n\r\n.score-number{\r\n\tfloat: right;\r\n\tpadding-right: 48px;\r\n\tfont-family: Arial;\r\n\tfont-size: 32px;\r\n\tcolor: white;\r\n}\r\n\r\n.score{\r\n\tposition: absolute;\r\n\tright: 160px;\r\n\tfont-family: Arial;\r\n\tfont-size: 32px;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.start-game{\r\n\t/*display: none;*/\r\n\tmargin-top: 100px;\r\n\tfont-family: Arial;\r\n\theight: 70px;\r\n\twidth: 200px;\r\n\tfont-size: 32px;\r\n\tcolor: white;\r\n\tbackground-color: orange;\r\n}\r\n\r\ncanvas{\r\n\tposition: absolute;\r\n\tleft:50%;\r\n\ttop: 100px;\r\n\tmargin-left: -400px;\r\n}\r\n\r\n.try-again{\r\n\tdisplay: none;\r\n\tfont-size: 32px;\r\n\tfont-family: Arial;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tposition: absolute;\r\n\tleft:50%;\r\n\ttop: 100px;\r\n\tmargin-left: -400px;\r\n\theight: 512px;\r\n\twidth: 800px;\r\n\tz-index: 10;\r\n\tbackground-color: rgba(128, 0, 15, 0.5);;\r\n}\r\n .you-lose{\r\n \tmargin-top: 150px;\r\n }\r\n\r\n .your-score{\r\n \tmargin-top: 50px;\r\n }\r\n\r\n .restart-game{margin-top: 50px;\r\n\tfont-family: Arial;\r\n\theight: 70px;\r\n\twidth: 200px;\r\n\tfont-size: 32px;\r\n\tcolor: white;\r\n\tbackground-color: rgb(163, 70, 81);\r\n\tborder: none;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/village.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/picture1.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/background.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/picture3.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/picture4.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spawnCreature; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mathFunctions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkCollision__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createTitan_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createKnight_js__ = __webpack_require__(19);





let spawnCreature = function(totalScore, titans, i, lightnings, peasant, peasantIndex, peasantY, knights, knightsIndex){
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
		anotherRandomNumber = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["a" /* notSame */])(randomNumber);
		spawnCreature.firstPeriodY = [rotateY[randomNumber - 1]];
		spawnCreature.firstPeriodY.push(rotateY[anotherRandomNumber - 1]);
		if(!spawnCreature.thirdPeriodDoubleLine){
			if(Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1)[0]){
				spawnCreature.firstPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(2);
				spawnCreature.firstPeriodDoubleLine = true;
			}else{
				spawnCreature.firstPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1);
				spawnCreature.firstPeriodDoubleLine = false;
			}
		}else{
			spawnCreature.firstPeriodConfig = Object(__WEBPACK_IMPORTED_MODULE_0__mathFunctions__["b" /* returnArrayOfTrueOrFalse */])(1);
			spawnCreature.firstPeriodDoubleLine = false;
		}
	}

	if(totalScore % 1200 - 400< 20 && totalScore % 1200 - 400 > 0 ){  
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
	if(totalScore % 1200 - 800< 20 && totalScore % 1200 - 800 > 0 ){  
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
	if(spawnCreature.firstPeriodConfig){
		if(spawnCreature.firstPeriodDoubleLine){
			if(spawnCreature.firstPeriodConfig[0]){
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
		}
	}
	if(spawnCreature.secondPeriodConfig){
		if(spawnCreature.secondPeriodDoubleLine){
			if(spawnCreature.secondPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - 400) % 1200 , spawnCreature.secondPeriodY[0], titans[2], i, lightnings[2]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - ((totalScore - 400) % 1200 ), spawnCreature.secondPeriodY[0], knights[2], knightsIndex));
			}
			if(spawnCreature.secondPeriodConfig[1]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - 400) % 1200 , spawnCreature.secondPeriodY[1], titans[3], i, lightnings[3]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - 400) % 1200 , spawnCreature.secondPeriodY[1], knights[3], knightsIndex));
			}
		}else{
			if(spawnCreature.secondPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - 400) % 1200, spawnCreature.secondPeriodY[0], titans[2], i, lightnings[2]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - 400) % 1200, spawnCreature.secondPeriodY[0], knights[2], knightsIndex));
			}
		}
	}

	if(spawnCreature.thirdPeriodConfig){
		if(spawnCreature.thirdPeriodDoubleLine){
			if(spawnCreature.thirdPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - 800) % 1200, spawnCreature.thirdPeriodY[0], titans[4], i, lightnings[4]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - 800) % 1200 , spawnCreature.thirdPeriodY[0], knights[4], knightsIndex));
			}
			if(spawnCreature.thirdPeriodConfig[1]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - 800) % 1200, spawnCreature.thirdPeriodY[1], titans[5], i, lightnings[5]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - 800) % 1200, spawnCreature.thirdPeriodY[1], knights[5], knightsIndex));
			}
		}else{
			if(spawnCreature.thirdPeriodConfig[0]){
				titansArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__createTitan_js__["a" /* createTitan */])((totalScore - 800) % 1200 , spawnCreature.thirdPeriodY[0], titans[4], i, lightnings[4]));
			}else{
				knightsArray.push(Object(__WEBPACK_IMPORTED_MODULE_3__createKnight_js__["a" /* createKnight */])(1050 - (totalScore - 800) % 1200, spawnCreature.thirdPeriodY[0], knights[4], knightsIndex));
			}
		}
	}
	Object(__WEBPACK_IMPORTED_MODULE_1__checkCollision__["a" /* checkCollision */])(peasant, titansArray, lightnings, knightsArray, totalScore);
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = returnArrayOfTrueOrFalse;
/* harmony export (immutable) */ __webpack_exports__["a"] = notSame;
function returnArrayOfTrueOrFalse(arraySize){
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkCollision;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameOver_js__ = __webpack_require__(16);


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
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTitan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createLightning_js__ = __webpack_require__(18);


function createTitan(rotateX, rotateY, titanElem, i, lightning){
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
		Object(__WEBPACK_IMPORTED_MODULE_0__createLightning_js__["a" /* createLightning */])(coordinateX, coordinateY + 16, lightning, coordinateX);
	}
	titanElem.x = coordinateX;
	titanElem.y = coordinateY;
	titanElem.sprites[i].draw(coordinateX, coordinateY, 54, 74);
	return titanElem;
}

/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Peasant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite_js__ = __webpack_require__(0);


let peasantPath = '../src/pictures/Peasant.png';
let Peasant = function(){
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
/* 24 */
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

/***/ })
/******/ ]);
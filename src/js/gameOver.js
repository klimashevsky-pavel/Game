import {end} from './main.js';

// console.log(end.value);
export function gameOver(totalScore){
	end.value = true;
	let score = document.getElementsByClassName('final-score')[0];
	let elem = document.getElementsByClassName('try-again')[0];
	elem.style.display = 'block';
	score.innerText = `${Math.round(totalScore/10)}`;
}
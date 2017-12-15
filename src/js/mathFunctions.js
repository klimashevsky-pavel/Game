export function returnArrayOfTrueOrFalse(arraySize){
	let array = [];
	for(let i = 0; i < arraySize; i++){
		array.push((Math.floor(Math.random() * (3 - 1)) + 1) - 1);
	}
	return array;
}

export function notSame(number){
	let value = Math.floor(Math.random() * (4 - 1)) + 1;
	while (value === number){
		value = Math.floor(Math.random() * (4 - 1)) + 1;
	}
	return value;
}
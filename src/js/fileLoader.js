import {downloaded} from './main.js';

let pathArray = ['../pictures/path2.jpg', '../pictures/path2rev.jpg', 
				 '../pictures/Knight.png', '../pictures/titan.png',
				 '../pictures/Peasant.png' ];

export let files = [];

pathArray.forEach(function(){
	let img = new Image();
	img.src = pathArray.pop();
	files.push(img);
});


export function fileLoader(fileList){
		let loadedCount = 0;
		let spanElem = document.getElementsByClassName('percent')[0];
		for(let i = 0; i < fileList.length; i++){
			fileList[i].onload = function(){
				loadedCount++;
				spanElem.innerHTML = `${(loadedCount/fileList.length) * 100}%`;
				console.log(loadedCount);
				console.log(fileList.length);
				if(loadedCount === fileList.length){
					downloaded.value = true;
					document.getElementById('start-button').style.display = 'inline-block';
				}
			}
		}
		

	}
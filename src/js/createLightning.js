export function createLightning(coordinateX, coordinateY, lightning, startPoint){
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
export function createKnight(coordinateX, coordinateY, knight, knightsIndex){
	knight.x = coordinateX;
	knight.y = coordinateY;
	knight.sprites[knightsIndex].draw(coordinateX, coordinateY, 74, 74);
	return knight;
}
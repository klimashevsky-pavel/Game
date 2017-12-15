import {Context} from './Context.js';

export let Sprite = function(filename, is_pattern = false, is_animated = false, picX, picY, picHeight = 64, picWidth = 128){
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
			Context.context.fillStyle = Context.context.createPattern(this.image, 'repeat');;
			Context.context.fillRect(x, y, w, h);
		}else if(is_animated){
				Context.context.drawImage(this.image, picX, picY, picHeight, picWidth, x, y, w, h);
		}else{
			if(!w || !h){

				Context.context.drawImage(this.image, x, y,
											this.image.width,
											this.image.height);
			}else{
				Context.context.drawImage(this.image, x, y, w, h);
			}
		}
	}

}
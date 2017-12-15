export let Context = {
	canvas: null,
	context: null,
	create: function(){
		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		return this.context;
	}
}
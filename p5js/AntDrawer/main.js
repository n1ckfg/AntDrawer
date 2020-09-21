"use strict";

const numAnts = 10000;
const bgColorReps = 10000;
let ants = [];
let img;
let bgColor;

function setup() {
	createCanvas(512, 512);

	img = createImage(width, height);				
	img.loadPixels();
	for (let i=0; i<img.width; i++) {
		for (let j=0; j<img.height; j++) {
			if (random(1) < 0.5) {
				img.set(i, j, color(255));
			} else {
				img.set(i, j, color(0));
			}
		}
	}
	img.updatePixels();

	bgColor = color(0,10,50);
	background(bgColor);
	loadPixels();
	
	for (let i=0; i<numAnts; i++) {
		ants.push(new Ant());
	} 

	blendMode(ADD);
}

function draw() {
	for (let i=0; i<ants.length; i++) {
		ants[i].run();    
	}

	for (let i=0; i<bgColorReps; i++) {
		set(random(width), random(height), bgColor);
	}

	updatePixels();
}


class Ant {

	constructor() {
		this.posX = random(width);
		this.posY = random(height);
		this.col = color(127 + random(127), 127 + random(127), 127 + random(127));
		this.loc = this.posX + this.posY * width;
		this.step = 2;
		this.dirX = [ 0, this.step, 0, -this.step ];  // N, E, S, W
		this.dirY = [ this.step, 0, -this.step, 0 ];
		this.index = 0;
	}

	run() {
		let refCol = img.pixels[this.loc];
		if (refCol === color(0)) {
			this.index++;
			if (this.index > 3) this.index = 0;
		} else {
			this.index--;
			if (this.index < 0) this.index = 3;
		}

		this.posX += this.dirX[this.index];
		this.posX = constrain(this.posX, 0, width-1);
		this.posY += this.dirY[this.index];   
		this.posY = constrain(this.posY, 0, height-1);

		this.loc = this.posX + this.posY * width;

		set(this.posX, this.posY, this.col);
	}

}
int numAnts = 10000;
Ant[] ants = new Ant[numAnts];
PImage img;
color bgColor = color(0,10,50);
int bgColorReps = 10000;

void setup() {
  size(512, 512, P2D);
  img = createImage(width, height, RGB);
  img.loadPixels();
  background(bgColor);
  loadPixels();
  
  for (int i=0; i<img.pixels.length; i++) {
    if (random(1) < 0.5) {
      img.pixels[i] = color(255);
    } else {
      img.pixels[i] = color(0);
    }
  }
  for (int i=0; i<ants.length; i++) {
    ants[i] = new Ant();
  } 
  
  blendMode(ADD);
}

void draw() {
  for (int i=0; i<ants.length; i++) {
    ants[i].run();    
  }
  
  for (int i=0; i<bgColorReps; i++) {
    pixels[(int) random(pixels.length)] = bgColor;
  }
  
  updatePixels();
}

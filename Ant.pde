class Ant {
  
  int posX, posY;
  int step = 2;
  int[] dirX = { 0, step, 0, -step };  // N, E, S, W
  int[] dirY = { step, 0, -step, 0 };
  int index = 0;
  color col;
  int loc;
  
  Ant() {
    posX = (int) random(width);
    posY = (int) random(height);
    col = color(127 + random(127), 127 + random(127), 127 + random(127));
    loc = posX + posY * width;
  }

  void run() {
    color refCol = img.pixels[loc];
    if (refCol == color(0)) {
       index++;
       if (index > 3) index = 0;
    } else {
      index--;
      if (index < 0) index = 3;
    }
    
    posX += dirX[index];
    posX = constrain(posX, 0, width-1);
    posY += dirY[index];   
    posY = constrain(posY, 0, height-1);
    
    loc = posX + posY * width;
    
    pixels[loc] = col;  
  }
  
}

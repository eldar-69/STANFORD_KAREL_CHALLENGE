function main(){
   
   firstBlock();
   nextBlock();
   nextBlock();
   nextBlock();
   
}

function firstBlock(){
   
   putBeeper();
   move();
   turnLeft();
   move();   
   putBeeper();
}

function nextBlock(){
   
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
}

/* There is also simpler solution:

function main(){
putBeeper();
nextBlock();
nextBlock();
nextBlock();
}

function nextBlock(){
move()
turnLeft();
move();
putBeeper();
turnRight();
}

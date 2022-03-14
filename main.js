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

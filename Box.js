class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 225;
  }

  display(){

    this.visibility = this.visibility - 10;

    if(this.body.speed<4){
      super.display();
    }else{
      push();
      tint(225,this.visibility);
      World.remove(world, this.body)
      pop();
    }

  }

  score(){

    if(this.visibility < 0 && this.visibility >- 105){
      score++;
    }

  }

}

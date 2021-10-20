class Box {
  constructor(x, y, color){
    var options = {
      isStatic: false,
      restitution: 0.4,
      friction: 0
  }
  this.body = Bodies.rectangle(x,y,30,40,options);
  this.color = color;
  World.add(world, this.body);
  
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, 30, 40);
  }
}

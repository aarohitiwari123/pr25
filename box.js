class Box {
    constructor(x, y,width,height) {
      var options = {
          isStatic : true,
          friction:0.5,
          density : 1.2
      }
this.x=x;
this.y=y;
this.width = width;
this.height = height;
this.body=Bodies.rectangle(x,y,width,height, options);
World.add(world, this.body);
} display()
{ 
var boxpos=this.body.position; 
push()
translate(boxpos.x, boxpos.y);
rectMode(CENTER)
strokeWeight(3);
fill(255) 
rect(0,0, this.width, this.height);
pop() } 
}

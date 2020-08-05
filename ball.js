class Ball{

constructor(x,y){
this.body=Bodies.circle(x,y,25,{density:35,restitution:1.2});
World.add(world,this.body)
}
display(){
push();
fill("white");
var pos=this.body.position
ellipse(pos.x,pos.y,50);
}
}
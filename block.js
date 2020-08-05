class Block{

constructor(x,y){
    this.body=Bodies.rectangle(x,y,50,50,{isStatic:true});
    World.add(world,this.body);
}
    display(){
        push();
        fill("white");
        var pos= this.body.position
        rect(pos.x,pos.y,50,50)
    }
}
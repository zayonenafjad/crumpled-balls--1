class Dustbin{

constructor(x,y,width,height){
this.body=Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
}

    display(){
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.width,this.height)

    
}
}
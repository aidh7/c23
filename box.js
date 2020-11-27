class Box{
    
    constructor(x,y,width,height){
        var box_options ={
            restitution:0.5
        }
    
       this.box = Bodies.rectangle(x,y,width,height ,box_options);
        World.add(world,this.box);
        this.width = width;
        this.height = height
    }

display(){

    rectMode(CENTER);
    push()
    translate(this.box.position.x,this.box.position.y)
    rotate(this.box.angle)
    fill("white")
    rect( 0,0,this.width, this.height);
pop()
}

}
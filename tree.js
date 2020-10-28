class Tree {

    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("tree.png")
 
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true})
        World.add(world,this.body);
        console.log(this.body)
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,300,300);
    }


}
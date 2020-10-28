class mango {

    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
     

        this.image = loadImage("mango.png");
 
        this.body = Bodies.circle(x,y,radius,{isStatic: true})
        World.add(world,this.body);
        console.log(this.body)
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }

    collision(Body1){
        if(this.Body1.x-this.body.x <= this.Body1.radius+this.body.radius){
            this.body.setStatic(this.body,{isStatic: true});
        }
    }

}
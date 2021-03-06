class Hammer
{
    constructor()
    {
        var option={
            'friction': 1,
            'density':2
        }
        this.body=Bodies.rectangle(400,400,70,50,option);
        World.add(myworld,this.body);
        
        this.width=70;
        this.height=50;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        pos.x=mouseX
        pos.y=mouseY
        fill("green") 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}
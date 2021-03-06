class Sand
{
    constructor(a,b,c)
    {
        var option={
            'restitution' : 0.6 ,
            'friction': 1,
            'density':0.6
        }
        this.body=Bodies.circle(a,b,c,option);
        World.add(myworld,this.body);
    
        this.rad=c
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("blue") 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        circle(0,0,this.rad);
        pop();     
    }
}
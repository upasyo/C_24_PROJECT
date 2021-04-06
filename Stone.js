class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		'friction':0.9,
		'restitution':1.2,
		'density': 12
	}
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height,options);
		World.add(world, this.body);

	};
	display()
	{
        var pos =this.body.position;
        var angle = this.body.angle;	
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
            rotate(angle);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width, this.height);
			pop()
	}

}
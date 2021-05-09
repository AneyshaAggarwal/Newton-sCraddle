class Bob
{
 constructor(x, y) 
 {
    var options = 
    {
      'isstatic': false,
      'restitution':0.05,
      'friction':0.6,
      'density':1.2
    }

    this.body = Bodies.rectangle(x, y,50, 50, options);
    this.width = 50;
    this.height = 50
    World.add(world, this.body);

    function keyPressed()
    {
      if (keyCode === UP_ARROW)
      {
        Matter.Body.applyForce(bob.body, bob.body.position, {x: 85, y: -85})
      }
    }
  }

  display()
  {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("white")
    ellipse(0, 0, this.width, this.height);
    pop();
  }

}
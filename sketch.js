const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1, bob2, bob3, bob4, bob;
var rope1, rope2, rope3, rope4, rope5;

function setup() 
{
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  roof = new Roof(400, 100, 600, 50)
	bob1 = new Bob(200, 400)
	bob2 = new Bob(300, 400)
	bob3 = new Bob(400, 400)
	bob4 = new Bob(500, 400)
	bob5 = new Bob(600, 400)
  rope1 = new Rope({x: 200, y: 100},bob1.body);
  rope2 = new Rope({x: 300, y: 100}, bob2.body);
  rope3 = new Rope({x: 400, y: 100}, bob3.body);
  rope4 = new Rope({x: 500, y: 100}, bob4.body);
  rope5 = new Rope({x: 600, y: 100}, bob5.body);
	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background("lightpink");
  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}

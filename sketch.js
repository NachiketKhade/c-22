const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800, 400);
  engine=Engine.create();
  world=engine.world;
  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,groundOptions);
World.add(world,ground);
var ballOptions={
  restitution:1.0
}
ball=Bodies.circle(400,100,50,ballOptions);
World.add(world,ball);


}

function draw() {
  background(180);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50)
}
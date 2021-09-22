const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Create multiple bobs, mulitple ropes varibale here
var roof, ball1, ball2, ball3, ball4, ball5,
	chain1, chain2, chain3, chain4, chain5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic: true,
		length: 1200
	}

	 roof = Bodies.rectangle(400, 100, 400, 100, roof_options);
	World.add(world, roof);

	//creating the bodies
	ball1 = new Ball(350, 400, 40);
	ball2 = new Ball(400, 400, 40);
	ball3 = new Ball(450, 400, 40);
	ball4 = new Ball(500, 400, 40);
	ball5 = new Ball(550, 400, 40);
	chain1 = new Chain(ball1.body, { x: 350, y: 100 });
	chain2 = new Chain(ball2.body, { x: 400, y: 100 });
	chain3 = new Chain(ball3.body, { x: 450, y: 100 });
	chain4 = new Chain(ball4.body, { x: 500, y: 100 });
	chain5 = new Chain(ball5.body, { x: 550, y: 100 });
	Engine.run(engine);


}

function draw() {
	background("#99004d");
	rectMode(CENTER);


	rect(roof.position.x, roof.position.y, 230, 20);

	//displaying all the objects

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	//roof.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	drawSprites();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, { x: -30, y: 155 });
	}
}
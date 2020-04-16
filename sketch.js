const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball1, ball2, ball3
var launcherX, launcherY;
var flag = "start"

function setup() {
    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 10, width, 30);

    tanker = new Tanker(75, 420, 60, 60);

    ball1 = new Ball(400, 50, 20)
    ball2 = new Ball(500, 100, 20)
    ball3 = new Ball(600, 150, 20)

    canonBall = new CanonBall(40, 60);

    shot = new ShootBall(canonBall.body, { x: 70, y: height - 220 });
}

function draw() {
    background(255)
    Matter.Engine.update(engine);
    ground.display()
    ball2.display()
    ball1.display()
    ball3.display();
    canonBall.display();
    tanker.display();
    shot.display();
    if (keyIsDown(UP_ARROW)) {
        shot.attach(canonBall.body)
    }
}


function keyReleased() {
    if (keyCode === DOWN_ARROW) {
        flag = "launch"

        shot.shoot()
    }
}
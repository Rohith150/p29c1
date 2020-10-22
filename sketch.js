const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var num = 100;
var num2 = 50;
var attachState = 'attach';

var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //Stand
    stand1 = new Ground(390+num,265+num2,250,10);
    stand2 = new Ground(900,200,210,10);

    //Boxes- 1st Level From Ground
    box1 = new Box(300+num,240+num2,30,40);
    box2 = new Box(330+num,240+num2,30,40);
    box3 = new Box(360+num,240+num2,30,40);
    box4 = new Box(390+num,240+num2,30,40);
    box5 = new Box(420+num,240+num2,30,40);
    box6 = new Box(450+num,240+num2,30,40);
    box7 = new Box(480+num,240+num2,30,40);

    //Boxes- 2nd Level From Ground
    box1n2 = new Box(300+30+num,200+num2,30,40);
    box2n2 = new Box(330+30+num,200+num2,30,40);
    box3n2 = new Box(360+30+num,200+num2,30,40);
    box4n2 = new Box(390+30+num,200+num2,30,40);
    box5n2 = new Box(420+30+num,200+num2,30,40);

    //Boxes- 3nd Level From Ground
    box1n3 = new Box(300+60+num,200-40+num2,30,40);
    box2n3 = new Box(330+60+num,200-40+num2,30,40);
    box3n3 = new Box(360+60+num,200-40+num2,30,40);

    //Top Box
    boxTop = new Box(390+num,200-70+num2,30,40);

    //Boxes- 1st Level From 2nd Ground
    box1m1 = new Box(840,110+70,30,40);
    box2m1 = new Box(870,110+70,30,40);
    box3m1 = new Box(900,110+70,30,40);
    box4m1 = new Box(930,110+70,30,40);
    box5m1 = new Box(960,110+70,30,40);
    
    //Boxes- 2nd Level From 2nd Ground
    box1m2 = new Box(870,100+70,30,40);
    box2m2 = new Box(900,80+70,30,40);
    box3m2 = new Box(930,70+70,30,40);
    
    //Top 2nd Box
    box2ndTop = new Box(900,90,30,40);

    //Polygon
    polygon = new Polygon(10,20,40,40)

    //sling
    sling = new slingshot(polygon.body,{ x: 200, y: 100});

}

function draw(){
    background(255,255,255);
    Engine.update(engine);

    //stands
    stand1.display();
    stand2.display();
    //Boxes- 1nd Level From Ground
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //Boxes- 2nd Level From Ground
    box1n2.display();
    box2n2.display();
    box3n2.display();
    box4n2.display();
    box5n2.display();
    //Boxes- 3nd Level From Ground
    box1n3.display();
    box2n3.display();
    box3n3.display();
    //Top Box
    boxTop.display();

    //Boxes- 1st Level From Ground
    box1m1.display();
    box2m1.display();
    box3m1.display();
    box4m1.display();
    box5m1.display();
    //Boxes- 2nd Level From Ground
    box1m2.display();
    box2m2.display();
    box3m2.display();
    //Top 2nd Box
    box2ndTop.display();

    //polygon
    polygon.display();

    //sling
    sling.display();

    //score text
    text("Score: " + score, 750, 40);

    //score
    //Boxes- 1nd Level From Ground
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
//Boxes- 2nd Level From Ground
box1n2.score();
box2n2.score();
box3n2.score();
box4n2.score();
box5n2.score();
//Boxes- 3nd Level From Ground
box1n3.score();
box2n3.score();
box3n3.score();
//Top Box
boxTop.score();

//Boxes- 1st Level From Ground
box1m1.score();
box2m1.score();
box3m1.score();
box4m1.score();
box5m1.score();
//Boxes- 2nd Level From Ground
box1m2.score();
box2m2.score();
box3m2.score();
//Top 2nd Box
box2ndTop.score();
}
function keyPressed(){
	if(keyCode === 32){
		if(attachState === 'release'){
		Matter.Body.setPosition(polygon.body, {x:400, y:450})
		attach();
		}
	}
}

function mouseDragged(){
	if(attachState === 'attach'){
        Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
    }
}

function mouseReleased(){
	sling.fly();
	attachState = 'release';
}
function attach(){
    Matter.Body.setPosition(polygon.body, {x: 200, y: 100});
	sling = new slingshot(polygon.body, { x: 200, y: 100});
	attachState = 'attach';
}
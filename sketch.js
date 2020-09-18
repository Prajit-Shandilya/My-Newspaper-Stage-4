/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/


//var engine, world;
var bg, bg1;
var hindiButton, engButton;
var gamestate = "startpage";
var link1, button;
var link2, button2;
var screen;


function preload() {
    bg = loadImage("resources/background2.jpg");
    bg1 = loadImage("resources/background3.jpg");
    bg2 = loadImage("resources/background.jpg");


}

function setup() {

    createCanvas(1200, 1200);

    //engine = Engine.create();
    //world = engine.world;

    //enterButton = new EnterButton(displayWidth / 2, displayHeight / 2 + 250, 170, 70);
    //hindiButton = new HindiButton(displayWidth / 2 - 340, displayHeight / 2 + 250, 170, 70);
    //engButton = new EngButton(displayWidth / 2 + 340, displayHeight / 2 + 250);

    screen = createSprite(600, 600, 1200, 1200)
    screen.addImage("lable1", bg);
    screen.addImage("lable2", bg1);
    screen.addImage("lable3", bg2);

    hindiButton = createSprite(200, 900)
    englishButton = createSprite(800, 900)
    hindiButton.visible = false;
    englishButton.visible = false;

    link1 = createElement("h3")
    link1.html("https://timesofindia.indiatimes.com/");
    link1.position(200, 300);
    link1.style("font-size", "40px");
    button = createButton("Back to Main");
    button.position(900, 1000);
    button.style("width", "190px");
    button.style("height", "100px");


}

function draw() {
    background(220);
    //stroke("black");
    //strokeWieght(20);

    //Engine.update(engine);




    //enterButton.display();
    //hindiButton.display();
    //engButton.display();
    if (gamestate === "startpage") {
        hindiButton.visible = true;
        englishButton.visible = true;
        link1.hide();
        button.hide();
        if (mousePressedOver(englishButton)) {
            gamestate = "englishpage";
        }
        if (mousePressedOver(hindiButton)) {
            gamestate = "hindipage";
        }
    }
    if (gamestate === "englishpage") {
        screen.changeImage("lable2", bg1);
        englishButton.visible = false;
        hindiButton.visible = false;
        link1.show();
        button.show();

        button.mousePressed(() => {
            gamestate = "startpage";
            screen.changeImage("lable1", bg);
            link1.hide();
            button.hide();
            hindiButton.visible = true;
            englishButton.visible = true;

        })
    }

    if (gameState === "hindipage") {
        screen.changeImage("lable3", bg2);
        englishButton.visible = false;
        hindiButton.visible = false;

    }

    drawSprites();

    textSize(95);
    fill(255, 0, 0);
    textFont("Comic Sans Ms");
    text("My Newspaper", 550, 100);
}





/*function mouseClicked(engButton) {
    background(bg1);
    engButton.eNewsPage();
}*/
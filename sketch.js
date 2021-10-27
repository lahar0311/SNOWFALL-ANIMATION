const Engine=Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world

var bgimg

function preload(){
  bgimg=loadImage('snow3.jpg')

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  snow1=new Snow(500,200,50,50)


}

function draw() {
  ///background(bgimg);
  snow1.display()
  Engine.run(engine)
  drawSprites();
}
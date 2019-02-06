//NOTE THIS WILL WORK BEST IN THE KHAN PROGRAMMING WINDOW. WILL ALSO WORK IN OTHER AREAS BUT HAS NOT BEEN FULLY TESTED

//FEEL FREE TO USE ANY PART OF THIS CODE!!!

///Hello everyone. Welcome to Rush, a revamp, kid version of old school frogger. Rush features five different playable charatcers; Pyro, Cove, Dusk,Rhino and Sparky, including five stages in Highway Hills, Winter Wonderland, Sunset Drive, Creepy Caverns, and  Wild West. The goal of Rush is to get 32 points. There is only one way to do it. Lets see if you can finish it! GL and Have fun!!


//Bug List
//current bugs in 1.04 code- Level selection to start stages will always set to "gameover scene"" due to score systems/// fixed^^^^
//current bugs in 1.1 code- Level selection for stage five still will be messed up after 10 points. Either need to fix the amount of spawns for stage five or get rid of stage 5 button on level selections


// Global variables
var boxesX=0;
var currentscene=100;
var gameSpeed=3;
var score=0;
var scoreUp=true;
frameRate(60);

////splash menu
    var splash=function()
{  
    
    ////bottom animation lines
    fill(0, 0, 0);
    rect(0, 379, 402, 35); //white accent on bottom
    fill(255, 255, 255);
    rect(0, 382, 404, 18);
    fill(255, 255, 255);//bottomline
    fill(0, 0, 0);
    

    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 383, 12, 5);
        rect(boxesX + x + 10, 389, 12, 5);
        rect(boxesX + x, 395, 12, 12);
    }
    
    fill(255, 255, 255);
    rect(0, -14, 402, 35); //white accent on top
    fill(255, 255, 255);
    rect(0,0, 401, 18); //top redstrip
    fill(255, 0, 0);//bottomline
    fill(0, 0, 0);
    
    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 0, 12, 5);
        rect(boxesX + x + 10, 6, 12, 5);
        rect(boxesX + x, 12, 12, 4);
    }

    boxesX -= gameSpeed;

    if (boxesX < -25) {
        boxesX = 0;
    }

    
};
    var logoSplash=function()
{
    
    background(0, 0, 0);
    textSize(99);
    fill(173, 173, 173);
    text("Rush", 92, sin(frameCount * 10) * 2.5 +23);
    fill(255, 255, 255);
    textSize(99);
    text("Rush",91,20,200,200);
    rect(88,40,17,9);
    
    
    fill(0, 0, 0);
    rect(79,44,17,9);// letter r top left indent
    rect(98,56,62,7);//letter r white line
    rect(98,92,61,7);//letter r white line bottom
    
    rect(214,72,-45,10);// letter u
    
    ellipse(174,67,15,17);//black eyes
    ellipse(208,67,15,17);//black eyes
    fill(255, 255, 255);
    ellipse(174,67,10,10);//green eyes 
    ellipse(208,67,10,10);//green eyes
    fill(0, 0, 0);
    ellipse(257,67,2,4);
    ellipse(236,110,2,4); // letter s bottom snake eye
    rect(256,71,17,13);//leter s top rectangle
    rect(216,96,15,11);//leter s bottom rectangle
    rect(273,94,53,3);//letter h top dashline
    rect(273,100,53,3);//letter h middle dash line
    rect(273,106,53,4);//letter h bottom dashline
    fill(255,255,255);
    image(getImage("creatures/Hopper-Cool"), 145, sin(frameCount * 10) *22 + 167, 124, 99);
};

//////THESE ARE THE LOGOS!

///pyro
    var logoPyro=function() // pyro logo 
{
    fill(255,255,255);
    text("Rush", 92, sin(frameCount * 10) * 2.5 +23);
    fill(255, 0, 0);
    
    textSize(99);
    text("Rush",91,20,200,200);
    
    rect(88,40,17,9);
    
    
    fill(0, 0, 0);
    rect(79,44,17,9);// letter r top left indent
    rect(98,56,62,7);//letter r white line
    rect(98,92,61,7);//letter r white line bottom
    
    rect(214,72,-45,10);// letter u
    
    fill(2);
    ellipse(174,67,15,17);//black eyes
    ellipse(208,67,15,17);//black eyes
    fill(55, 219, 80);
    ellipse(174,67,10,10);//green eyes 
    ellipse(208,67,10,10);//green eyes
    fill(0, 0, 0);
    ellipse(257,67,2,4);
    ellipse(236,110,2,4); // letter s bottom snake eye
    rect(256,71,17,13);//leter s top rectangle
    rect(216,96,15,11);//leter s bottom rectangle
    rect(273,94,53,3);//letter h top dashline
    rect(273,100,53,3);//letter h middle dash line
    rect(273,106,53,4);//letter h bottom dashline
    fill(255,255,255);
};
    var launchPyro=function()// pyro top and bottom scrolling animation
{
    ////bottom animation lines
    fill(255, 255, 255);
    rect(0, 379, 402, 35); //white accent on bottom
    fill(255, 0, 0);
    rect(0, 382, 404, 18);
    fill(250, 0, 0);//bottomline
    fill(0, 0, 0);

    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 383, 12, 5);
        rect(boxesX + x + 10, 389, 12, 5);
        rect(boxesX + x, 395, 12, 12);
    }
    
    fill(255, 255, 255);
    rect(0, -14, 402, 35); //white accent on top
    fill(255, 0, 0);
    rect(0,0, 401, 18); //top redstrip
    fill(255, 0, 0);//bottomline
    fill(0, 0, 0);
    
    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 0, 12, 5);
        rect(boxesX + x + 10, 6, 12, 5);
        rect(boxesX + x, 12, 12, 4);
    }

    boxesX -= gameSpeed;

    if (boxesX < -25) {
        boxesX = 0;
    }
    
};
//////Cove
    var logoCove=function()// cove logo 
{
    fill(255,255,255);
    text("Rush", 92, sin(frameCount * 10) * 2.5 +23);
    fill(0, 181, 247);
    textSize(99);
    text("Rush",91,20,200,200);
    rect(88,40,17,9);
    fill(0, 0, 0);
    rect(79,44,17,9);// letter r top left indent
    rect(98,56,62,7);//letter r white line
    rect(98,92,61,7);//letter r white line bottom
    
    rect(214,72,-45,10);// letter u
    ellipse(174,67,15,17);//black eyes
    ellipse(208,67,15,17);//black eyes
    fill(85, 97, 189);
    ellipse(174,67,10,10);//green eyes 
    ellipse(208,67,10,10);//green eyes
    
    fill(0, 0, 0);
    ellipse(257,67,2,4);
    ellipse(236,110,2,4); // letter s bottom snake eye
    rect(256,71,17,13);//leter s top rectangle
    rect(216,96,15,11);//leter s bottom rectangle
    
    rect(273,94,53,3);//letter h top dashline
    rect(273,100,53,3);//letter h middle dash line
    rect(273,106,53,4);//letter h bottom dashline
    fill(255,255,255);
};
    var launchCove=function()// cove top and bottom scrolling animation
{
    ////bottom animation lines
    fill(255, 255, 255);
    rect(0, 379, 402, 35); //white accent on bottom
    fill(0, 181, 247);
    rect(0, 382, 404, 18);
    fill(250, 0, 0);//bottomline
    fill(0, 0, 0);

    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 383, 12, 5);
        rect(boxesX + x + 10, 389, 12, 5);
        rect(boxesX + x, 395, 12, 12);
    }
    
    fill(255, 255, 255);
    rect(0, -14, 402, 35); //white accent on top
    fill(0, 181, 247);
    rect(0,0, 401, 18); //top redstrip
    fill(9, 226, 242);//bottomline
    fill(0, 0, 0);
    
    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 0, 12, 5);
        rect(boxesX + x + 10, 6, 12, 5);
        rect(boxesX + x, 12, 12, 4);
    }

    boxesX -= gameSpeed;

    if (boxesX < -25) {
        boxesX = 0;
    }
    
};
///Dusk
    var logoDusk=function()// dusk logo
{
    fill(255,255,255);
    text("Rush", 92, sin(frameCount * 10) * 2.5 +23);
    fill(208, 135, 232);
    
    textSize(99);
    text("Rush",91,20,200,200);
    
    rect(88,40,17,9);
    fill(0, 0, 0);
    rect(79,44,17,9);// letter r top left indent
    rect(98,56,62,7);//letter r white line
    rect(98,92,61,7);//letter r white line bottom
    
    rect(214,72,-45,10);// letter u
    ellipse(174,67,15,17);//black eyes
    ellipse(208,67,15,17);//black eyes
    fill(100, 0, 230);
    ellipse(174,67,10,10);//green eyes 
    ellipse(208,67,10,10);//green eyes
    
    
    fill(0, 0, 0);
    ellipse(257,67,2,4);
    ellipse(236,110,2,4); // letter s bottom snake eye
    rect(256,71,17,13);//leter s top rectangle
    rect(216,96,15,11);//leter s bottom rectangle
    
    
    rect(273,94,53,3);//letter h top dashline
    rect(273,100,53,3);//letter h middle dash line
    rect(273,106,53,4);//letter h bottom dashline
    fill(255,255,255);
    };
    var launchDusk=function()// dusk top and bottom scrolling animation
{
    ////bottom animation lines
    fill(255, 255, 255);
    rect(0, 379, 402, 35); //white accent on bottom
    fill(208, 135, 232);
    rect(0, 382, 404, 18);
    fill(250, 0, 0);//bottomline
    fill(0, 0, 0);

    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 383, 12, 5);
        rect(boxesX + x + 10, 389, 12, 5);
        rect(boxesX + x, 395, 12, 12);
    }
    
    fill(255, 255, 255);
    rect(0, -14, 402, 35); //white accent on top
    fill(208, 135, 232);
    rect(0,0, 401, 18); //top redstrip
    fill(9, 226, 242);//bottomline
    fill(0, 0, 0);
    
    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 0, 12, 5);
        rect(boxesX + x + 10, 6, 12, 5);
        rect(boxesX + x, 12, 12, 4);
    }

    boxesX -= gameSpeed;

    if (boxesX < -25) {
        boxesX = 0;
    }
    
};
///Rhino
    var logoRhino=function()// rhino logo
{
    fill(255, 255, 255);
    text("Rush", 92, sin(frameCount * 10) * 2.5 +23);
    fill(163, 163, 160);
    
    textSize(99);
    text("Rush",91,20,200,200);
    
    rect(88,40,17,9);
    fill(0, 0, 0);
    rect(79,44,17,9);// letter r top left indent
    rect(98,56,62,7);//letter r white line
    rect(98,92,61,7);//letter r white line bottom
    
    rect(214,72,-45,10);// letter u
    ellipse(174,67,15,17);//black eyes
    ellipse(208,67,15,17);//black eyes
    fill(245, 245, 182);
    ellipse(174,67,10,10);//green eyes 
    ellipse(208,67,10,10);//green eyes
    
    
    fill(0, 0, 0);
    ellipse(257,67,2,4);
    ellipse(236,110,2,4); // letter s bottom snake eye
    rect(256,71,17,13);//leter s top rectangle
    rect(216,96,15,11);//leter s bottom rectangle
    
    
    rect(273,94,53,3);//letter h top dashline
    rect(273,100,53,3);//letter h middle dash line
    rect(273,106,53,4);//letter h bottom dashline
    fill(255,255,255);
    };
    var launchRhino=function()// rhino top and bottom scrolling animation
{
    ////bottom animation lines
    fill(255, 255, 255);
    rect(0, 379, 402, 35); //white accent on bottom
    fill(163, 163, 160);
    rect(0, 382, 404, 18);
    fill(250, 0, 0);//bottomline
    fill(0, 0, 0);

    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 383, 12, 5);
        rect(boxesX + x + 10, 389, 12, 5);
        rect(boxesX + x, 395, 12, 12);
    }
    
    fill(255, 255, 255);
    rect(0, -14, 402, 35); //white accent on top
    fill(163, 163, 160);
    rect(0,0, 401, 18); //top redstrip
    fill(9, 226, 242);//bottomline
    fill(0, 0, 0);
    
    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 0, 12, 5);
        rect(boxesX + x + 10, 6, 12, 5);
        rect(boxesX + x, 12, 12, 4);
    }

    boxesX -= gameSpeed;

    if (boxesX < -25) {
        boxesX = 0;
    }
    
};
//Sparky
    var logoSparky=function()// sparky logo
{
fill(255,255,255);
text("Rush", 92, sin(frameCount * 10) * 2.5 +23);
fill(219, 212, 0);
textSize(99);
text("Rush",91,20,200,200);
rect(88,40,17,9);
fill(0, 0, 0);

rect(79,44,17,9);// letter r top left indent
rect(98,56,62,7);//letter r white line
rect(98,92,61,7);//letter r white line bottom

rect(214,72,-45,10);// letter u
ellipse(174,67,15,17);//black eyes
ellipse(208,67,15,17);//black eyes
fill(89, 87, 14);
ellipse(174,67,10,10);//green eyes 
ellipse(208,67,10,10);//green eyes


fill(0, 0, 0);
ellipse(257,67,2,4);
ellipse(236,110,2,4); // letter s bottom snake eye
rect(256,71,17,13);//leter s top rectangle
rect(216,96,15,11);//leter s bottom rectangle

rect(273,94,53,3);//letter h top dashline
rect(273,100,53,3);//letter h middle dash line
rect(273,106,53,4);//letter h bottom dashline
fill(255,255,255);
};
    var launchSparky=function()// sparky top and bottom scrolling animation
{
    ////bottom animation lines
    fill(255, 255, 255);
    rect(0, 379, 402, 35); //white accent on bottom
    fill(219, 212, 0);
    rect(0, 382, 404, 18);
    fill(250, 0, 0);//bottomline
    fill(0, 0, 0);

    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 383, 12, 5);
        rect(boxesX + x + 10, 389, 12, 5);
        rect(boxesX + x, 395, 12, 12);
    }
    
    fill(255, 255, 255);
    rect(0, -14, 402, 35); //white accent on top
    fill(219, 212, 0);
    rect(0,0, 401, 18); //top redstrip
    fill(9, 226, 242);//bottomline
    fill(0, 0, 0);
    
    for (var x = 0; x <= 400; x += 25) {
        rect(boxesX + x + -4, 0, 12, 5);
        rect(boxesX + x + 10, 6, 12, 5);
        rect(boxesX + x, 12, 12, 4);
    }

    boxesX -= gameSpeed;

    if (boxesX < -25) {
        boxesX = 0;
    }
    
};
///////////Button class///////////////////////////////
var Button=function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 103;
    this.height = config.height || 26;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};
Button.prototype.draw=function() {
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height, 10);
    fill(0, 0, 0);
    textSize(15);
    textAlign(LEFT, TOP);
    text(this.label, this.x+2, this.y+this.height/7);
};
Button.prototype.isMouseInside=function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};
Button.prototype.handleMouseClick=function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
////Player Select buttons///////////////////
var pyroButton=new Button({
    x: 40,
    y: 199,
    width: 45,
    label: " Pyro",
    onClick: function() {//
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===99)
    {
       
       currentscene = 1; 
    }
    }
});// pyro button on player selection page
var coveButton=new Button({
    x: 188,
    y: 200,
    width: 45,
    label: " Cove",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===99)
    {  
       currentscene = 11; 
    }
    }
});// cove button on player selection page
var duskButton=new Button({
    x: 321,
    y: 200,
    width: 46,
    label: " Dusk",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===99)
    {
       
       currentscene = 21; 
    }
    }
});// dusk button on player selection page
var rhinoButton=new Button({
    x: 89,
    y: 360,
    width: 45,
    label: "Rhino",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===99)
    {
       
       currentscene = 31; 
    }
    }
});// rhino button on player selection page
var sparkyButton=new Button({
    x: 278,
    y: 360,
    width: 50,
    label: "Sparky",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===99)
    {
       
       currentscene = 41; 
    }
    }
});// sparky button on player selection page
//////BUTTONS
var about=new Button({
    x: 332,
    y: 24,
    width: 67,
    label: "About Us",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===1)
    {
       currentscene = 84; 
    }
    if(currentscene===11)
    {
       currentscene = 85; 
    }
    if(currentscene===21)
    {
       currentscene = 86; 
    }
    if(currentscene===31)
    {
       currentscene = 87; 
    }
    if(currentscene===41)
    {
       currentscene = 88; 
    }
    }
});// about page button
var learingthegame=new Button({
    x: 0,
    y: 290,
    width: 90,
    label: " Instructions",
    onClick: function() {// 
    playSound(getSound("rpg/hit-thud"));
        if(currentscene===1)
    {
       currentscene=2; 
    }
    if(currentscene===11)
    {
       currentscene = 12; 
    }
     if(currentscene===21)
    {
       currentscene = 22; 
    }
     if(currentscene===31)
    {
       currentscene = 32; 
    }
    if(currentscene===41)
    {
       currentscene = 42; 
    }
    }
});//
var instructionsMainMenu=new Button({
    x: 318,
    y: 345,
    width: 80,
    label: "Main Menu",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===2)
    {
       currentscene=1;
    }
    if(currentscene===12)
    {
       currentscene=11;
    }
    if(currentscene===22)
    {
       currentscene=21;
    }
    if(currentscene===32)
    {
       currentscene=31;
    }
    if(currentscene===42)
    {
       currentscene=41;
    }
    }
});// mainmenu button on instruction page
var levelSelectButton=new Button({
    x: 0,
    y: 320,
    width: 90,
    label: " Level Select",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===1)
    {
       currentscene=94;
    }
    if(currentscene===11)
    {
       currentscene=95;
    }
    if(currentscene===21)
    {
       currentscene=96;
    }
    if(currentscene===31)
    {
       currentscene=97;
    }
    if(currentscene===41)
    {
       currentscene=98;
    }
    }
});// level selection button
var level1=new Button({
    x: 4,
    y: 90,
    width: 145,
    label: " Highway Hills (Easy)",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===94)
    {
       currentscene=3;
    }
    if(currentscene===95)
    {
       currentscene=13;
    }
    if(currentscene===96)
    {
       currentscene=23;
    }
    if(currentscene===97)
    {
       currentscene=33;
    }
    if(currentscene===98)
    {
       currentscene=13;
    }
    }
});// level 1 button on level selection page
var level2=new Button({
    x: 260,
    y: 90,
    width: 133,
    label: "Winter Wonderland",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===94)
    {
       currentscene=4;
    }
    if(currentscene===95)
    {
       currentscene=14;
    }
    if(currentscene===96)
    {
       currentscene=24;
    }
    if(currentscene===97)
    {
       currentscene=34;
    }
    if(currentscene===98)
    {
       currentscene=44;
    }
    }
});// level 2 button on level selection page
var level3=new Button({
    x: 7,
    y: 200,
    width: 137,
    label: "Sunset Drive (Hard)",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===94)
    {
       currentscene=5;
    }
    if(currentscene===95)
    {
       currentscene=15;
    }
    if(currentscene===96)
    {
       currentscene=25;
    }
    if(currentscene===97)
    {
       currentscene=35;
    }
    if(currentscene===98)
    {
       currentscene=45;
    }
    }
});// level 3 button on level selection page
var level4=new Button({
    x: 260,
    y: 200,
    width: 118,
    label: " Creepy Caverns ",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===94)
    {
       currentscene=6;
    }
    if(currentscene===95)
    {
       currentscene=16;
    }
    if(currentscene===96)
    {
       currentscene=26;
    }
    if(currentscene===97)
    {
       currentscene=36;
    }
    if(currentscene===98)
    {
       currentscene=46;
    }
    }
});// level 4 button on level selection page
var level5=new Button({
    x: 110,
    y: 300,
    width: 161,
    label: " Wild West (EXTREME)",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
       if(currentscene===94){
       currentscene=7;
    }
    if(currentscene===95){
       currentscene=17;
    }
    if(currentscene===96){
       currentscene=27;
    }
    if(currentscene===97){
       currentscene=37;
    }
    if(currentscene===98){
       currentscene=47;
    }
    }
});// level 5 button on level selection page
var levelSelectPause=new Button({
    x: 165,
    y: 335,
    width: 90,
    label: " Level Select",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===74)
    {
       currentscene=94;
    }
    if(currentscene===75)
    {
       currentscene=95;
    }
    if(currentscene===76)
    {
       currentscene=96;
    }
    if(currentscene===77)
    {
       currentscene=97;
    }
    if(currentscene===78)
    {
       currentscene=98;
    }
    }
});// level selection button on pause scene
var levelSelectAbout=new Button({
    x: 312,
    y: 320,
    width: 85,
    label: "Level Select",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===84)
    {
       currentscene=94;
    }
    if(currentscene===85)
    {
       currentscene=95;
    }
    if(currentscene===86)
    {
       currentscene=96;
    }
    if(currentscene===87)
    {
       currentscene=97;
    }
    if(currentscene===88)
    {
       currentscene=98;
    }
    }
}); //level selection button on about page
var start=new Button({
    x: 0,
    y: 260,
    width: 90,
    label: " Start Game",
    onClick: function() {// 
    playSound(getSound("rpg/hit-thud"));
        if(currentscene===1)
    {
       currentscene=3; 
    }
     if(currentscene===11)
    {
       currentscene=13; 
    }
    if(currentscene===21)
    {
       currentscene=23; 
    }
    if(currentscene===31)
    {
       currentscene=33; 
    }
    if(currentscene===41)
    {
       currentscene=43; 
    }
    }
    });// start button to first level on begin scene
var startinstructions=new Button({
    x: 0,
    y: 345,
    width: 80,
    label: "Start Game",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===2)
    {
       currentscene=3;
    }
    if(currentscene===12)
    {
       currentscene=13;
    }
    if(currentscene===22)
    {
       currentscene=23;
    }
    if(currentscene===32)
    {
       currentscene=33;
    }
    if(currentscene===42)
    {
       currentscene=43;
    }
    }
});// instructions button
var splashButton=new Button({
    x: 170,
    y: 300,
    width: 77,
    label: "Play Rush!",
    onClick: function() {
        playSound(getSound("rpg/hit-thud"));
        if(currentscene===100)
        {   
            
            currentscene=99;
        }
    }
});
var mainMenuButton=new Button({
    x: 300,
    y: 335,
    width:80,
    label: "Main Menu",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===74)
    {
       currentscene=1;
    }
     if(currentscene===75)
    {
       currentscene=11;
    }
     if(currentscene===76)
    {
       currentscene=21;
    }
     if(currentscene===77)
    {
       currentscene=31;
    }
     if(currentscene===78)
    {
       currentscene=41;
    }
    }
}); //main menu button
var mainMenuButtonlvl=new Button({
    x: 319,
    y: 350,
    width: 80,
    label: "Main Menu",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===94)
    {
       currentscene=1;
    }
    if(currentscene===95)
    {
       currentscene=11;
    }
     if(currentscene===96)
    {
       currentscene=21;
    }
    if(currentscene===97)
    {
       currentscene=31;
    }
    if(currentscene===98)
    {
       currentscene=41;
    }
    }
});// level selection button on main menu
var mainMenuAboutButton=new Button({
    x: 313,
    y: 350,
    width: 85,
    label: " Main Menu",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===84)
    {
       currentscene=1;
    }
    if(currentscene===85)
    {
       currentscene=11;
    }
    if(currentscene===86)
    {
       currentscene=21;
    }
    if(currentscene===87)
    {
       currentscene=31;
    }
    if(currentscene===88)
    {
       currentscene=41;
    }
    }
});
var playscreen=new Button({
    x: 200,
    y: 200,
    width: 85,
    label: " PLAY!",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===100)
    {
       currentscene=99;
    }
    }
});// about button on main menu scene
var pausePyro=new Button({
    x: 305,
    y: 10,
    width: 93,
    label: "Pause Button",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===3) 
    {
       currentscene=74; 
    }
    if(currentscene===4) 
    {
       currentscene=74; 
    }
    if(currentscene===5) 
    {
       currentscene=74; 
    }
    if(currentscene===6) 
    {
       currentscene=74; 
    }
    if(currentscene===7) 
    {
       currentscene=74; 
    }
    if(currentscene===13) 
    {
       currentscene=75;
    }
    if(currentscene===14) 
    {
       currentscene=75;
    }
    if(currentscene===15) 
    {
       currentscene=75;
    }
    if(currentscene===16) 
    {
       currentscene=75;
    }
    if(currentscene===17) 
    {
       currentscene=75;
    }
    if(currentscene===23) 
    {
       currentscene=76;
    }
    if(currentscene===24) 
    {
       currentscene=76;
    }
    if(currentscene===25) 
    {
       currentscene=76;
    }
    if(currentscene===26) 
    {
       currentscene=76;
    }
    if(currentscene===27) 
    {
       currentscene=76;
    }
    if(currentscene===33) 
    {
       currentscene=77;
    }
    if(currentscene===34) 
    {
       currentscene=77;
    }
    if(currentscene===35) 
    {
       currentscene=77;
    }
    if(currentscene===36) 
    {
       currentscene=77;
    }
    if(currentscene===37) 
    {
       currentscene=77;
    }
    if(currentscene===43) 
    {
       currentscene=78;
    }
     if(currentscene===44) 
    {
       currentscene=78;
    }
     if(currentscene===45) 
    {
       currentscene=78;
    }
     if(currentscene===46) 
    {
       currentscene=78;
  
    }
    if(currentscene===47) 
    {
       currentscene=78;
  
    }
    }
    
});
var pauseStartButton=new Button({
    x: 20,
    y: 335,
    width: 83,
    label: "Start Button",
    onClick: function() { // 
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===74) 
    {
       currentscene=3; 
    }
    if(currentscene===75) 
    {
       currentscene=13; 
    }
    if(currentscene===76) 
    {
       currentscene=23; 
    }
    if(currentscene===77) 
    {
       currentscene=33; 
    }
    if(currentscene===78) 
    {
       currentscene=43; 
    }
}
}); //global start button on pause page
var playerSelect=new Button({
    x: 0,
    y: 350,
    width: 92,
    label: "Player Select",
    onClick: function() { //
    playSound(getSound("rpg/hit-thud"));
    if(currentscene===1 || currentscene===11 || currentscene===21|| currentscene===31 || currentscene===41)
    {
       currentscene = 99; 
    }
    }
}); //Global player select button
////////mouseCLICKED
mouseClicked=function() {
    pyroButton.handleMouseClick();
    coveButton.handleMouseClick();
    duskButton.handleMouseClick();
    rhinoButton.handleMouseClick();
    sparkyButton.handleMouseClick();
    about.handleMouseClick();
    learingthegame.handleMouseClick();
    instructionsMainMenu.handleMouseClick();
    levelSelectAbout.handleMouseClick();
    levelSelectPause.handleMouseClick();
    levelSelectButton.handleMouseClick();
    level1.handleMouseClick();
    level2.handleMouseClick();
    level3.handleMouseClick();
    level4.handleMouseClick();
    level5.handleMouseClick();
    start.handleMouseClick();
    startinstructions.handleMouseClick();
    mainMenuButton.handleMouseClick();
    mainMenuAboutButton.handleMouseClick();
    mainMenuButtonlvl.handleMouseClick();
    pauseStartButton.handleMouseClick();
    pausePyro.handleMouseClick();
    playerSelect.handleMouseClick();
    playscreen.handleMouseClick();
    splashButton.handleMouseClick();
}; // all of the button handle click code
/////character class///////////////////
var pyroSmall=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/piceratops-sapling");
    this.sticks = 0;
}; //small version of pyro
pyroSmall.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
pyroSmall.prototype.hop=function() {
    this.img = getImage("avatars/piceratops-sapling");
    this.y -= 5;
};
pyroSmall.prototype.fall=function() {
    this.img = getImage("avatars/piceratops-sapling");
    this.y += 5;
};
pyroSmall.prototype.checkForStickGrab = function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 50)) &&
        (cars.y >= this.y && cars.y <= (this.y + 70))) {
        cars.y = -400;
        score--;
    
    }
};

var pyroMed=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/piceratops-tree");
    this.sticks = 0;
}; //medium version of pyro
pyroMed.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-70);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
pyroMed.prototype.hop=function() {
    this.img = getImage("avatars/piceratops-tree");
    this.y -= 5;
};
pyroMed.prototype.fall =function() {
    this.img = getImage("avatars/piceratops-tree");
    this.y += 5;
};
pyroMed.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 60)) &&
        (cars.y >= this.y && cars.y <= (this.y + 60))) {
        cars.y = -400;
        score--;
    
    }
};

var pyroLarge=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/piceratops-ultimate");
    this.sticks = 0;
};// large version of pyro
pyroLarge.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
pyroLarge.prototype.hop=function() {
    this.img = getImage("avatars/piceratops-ultimate");
    this.y -= 5;
};
pyroLarge.prototype.fall=function() {
    this.img = getImage("avatars/piceratops-ultimate");
    this.y += 5;
};
pyroLarge.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 80))) {
        cars.y = -400;
        score--;
    
    }
};

var coveSmall=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/aqualine-seedling");
    this.sticks = 0;
}; //small version of cove
coveSmall.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
coveSmall.prototype.hop=function() {
    this.img = getImage("avatars/aqualine-seedling");
    this.y -= 5;
};
coveSmall.prototype.fall=function() {
    this.img = getImage("avatars/aqualine-seedling");
    this.y += 5;
};
coveSmall.prototype.checkForStickGrab = function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var coveMed=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/aqualine-tree");
    this.sticks = 0;
}; //medium version of cove
coveMed.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
coveMed.prototype.hop=function() {
    this.img = getImage("avatars/aqualine-tree");
    this.y -= 5;
};
coveMed.prototype.fall=function() {
    this.img = getImage("avatars/aqualine-tree");
    this.y += 5;
};
coveMed.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 60)) &&
        (cars.y >= this.y && cars.y <= (this.y + 60))) {
        cars.y = -400;
        score--;
    
    }
};

var coveLarge=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/aqualine-ultimate");
    this.sticks = 0;
};// large version of cove
coveLarge.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
coveLarge.prototype.hop=function() {
    this.img = getImage("avatars/aqualine-ultimate");
    this.y -= 5;
};
coveLarge.prototype.fall=function() {
    this.img = getImage("avatars/aqualine-ultimate");
    this.y += 5;
};
coveLarge.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 80))) {
        cars.y = -400;
        score--;
    
    }
};

var duskSmall=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/duskpin-sapling");
    this.sticks = 0;
}; //small version of dusk
duskSmall.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
duskSmall.prototype.hop=function() {
    this.img = getImage("avatars/duskpin-sapling");
    this.y -= 5;
};
duskSmall.prototype.fall=function() {
    this.img = getImage("avatars/duskpin-sapling");
    this.y += 5;
};
duskSmall.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 50)) &&
        (cars.y >= this.y && cars.y <= (this.y + 70))) {
        cars.y = -400;
        score--;
    
    }
};

var duskMed=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/duskpin-tree");
    this.sticks = 0;
}; //medium version of dusk
duskMed.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
duskMed.prototype.hop=function() {
    this.img = getImage("avatars/duskpin-tree");
    this.y -= 5;
};
duskMed.prototype.fall=function() {
    this.img = getImage("avatars/duskpin-tree");
    this.y += 5;
};
duskMed.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var duskLarge=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/duskpin-ultimate");
    this.sticks = 0;
}; //large version of dusk
duskLarge.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
duskLarge.prototype.hop=function() {
    this.img = getImage("avatars/duskpin-ultimate");
    this.y -= 5;
};
duskLarge.prototype.fall=function() {
    this.img = getImage("avatars/duskpin-ultimate");
    this.y += 5;
};
duskLarge.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var rhinoSmall=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/starky-sapling");
    this.sticks = 0;
}; //small version of rhino
rhinoSmall.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
rhinoSmall.prototype.hop=function() {
    this.img = getImage("avatars/starky-sapling");
    this.y -= 5;
};
rhinoSmall.prototype.fall=function() {
    this.img = getImage("avatars/starky-sapling");
    this.y += 5;
};
rhinoSmall.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var rhinoMed=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/starky-tree");
    this.sticks = 0;
}; //medium version of rhino
rhinoMed.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
rhinoMed.prototype.hop=function() {
    this.img = getImage("avatars/starky-tree");
    this.y -= 5;
};
rhinoMed.prototype.fall=function() {
    this.img = getImage("avatars/starky-tree");
    this.y += 5;
};
rhinoMed.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var rhinoLarge=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/starky-ultimate");
    this.sticks = 0;
}; //Large version of rhino
rhinoLarge.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
rhinoLarge.prototype.hop=function() {
    this.img = getImage("avatars/starky-ultimate");
    this.y -= 5;
};
rhinoLarge.prototype.fall=function() {
    this.img = getImage("avatars/starky-ultimate");
    this.y += 5;
};
rhinoLarge.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var sparkySmall=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/primosaur-sapling");
    this.sticks = 0;
}; //small version of sparky
sparkySmall.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
sparkySmall.prototype.hop=function() {
    this.img = getImage("avatars/primosaur-sapling");
    this.y -= 5;
};
sparkySmall.prototype.fall=function() {
    this.img = getImage("avatars/primosaur-sapling");
    this.y += 5;
};
sparkySmall.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var sparkyMed=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/primosaur-tree");
    this.sticks = 0;
}; //medium version of sparky
sparkyMed.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
sparkyMed.prototype.hop=function() {
    this.img = getImage("avatars/primosaur-tree");
    this.y -= 5;
};
sparkyMed.prototype.fall=function() {
    this.img = getImage("avatars/primosaur-tree");
    this.y += 5;
};
sparkyMed.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};

var sparkyLarge=function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/primosaur-ultimate");
    this.sticks = 0;
}; //Large version of sparky
sparkyLarge.prototype.draw=function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-65);
    image(this.img, this.x, this.y, 70, 70);
    if(this.y<40 && scoreUp) {
        score++;
        scoreUp=false;
    }
    else if (this.y >320 && !scoreUp ) {
        
        score++;
        scoreUp=true;
    }
};
sparkyLarge.prototype.hop=function() {
    this.img = getImage("avatars/primosaur-ultimate");
    this.y -= 5;
};
sparkyLarge.prototype.fall=function() {
    this.img = getImage("avatars/primosaur-ultimate");
    this.y += 5;
};
sparkyLarge.prototype.checkForStickGrab=function(cars) {
    if ((cars.x >= this.x && cars.x <= (this.x + 80)) &&
        (cars.y >= this.y && cars.y <= (this.y + 40))) {
        cars.y = -400;
        score--;
    
    }
};
/////Alien class///////////////
var Alien1 = function(x,y) {
    this.x = x;
    this.y = y;
};

Alien1.prototype.draw = function() {
    fill(40, 250, 8);
    
    rect(this.x+13,this.y-48,3,74); // antenna
    rect(this.x-17,this.y-49,3,74);// antenna
    ellipse(this.x-17, this.y-50, 14, 14);//balls on top of head
    ellipse(this.x+14, this.y-50, 14, 14);//balls on top of head
    ellipse(this.x, this.y, 58, 65);//body
    fill(255, 250, 250);
    ellipse(this.x, this.y-7, 40, 37);// white part of eyes
    fill(0, 0, 0);
    ellipse(this.x-3, this.y-7, 21, 20);
    fill(0, 97, 39);
    arc(this.x,this.y+19,38,22,-29,214);
};

var aliens1 = [];
for (var i = 0; i < 100; i++) {  
    aliens1.push(new Alien1(i * 200 + 300, random(70, 260)));
}


var Alien2 = function(x,y) {
    this.x = x;
    this.y = y;
};

Alien2.prototype.draw = function() {
    fill(40, 250, 8);
    
    rect(this.x+13,this.y-48,3,74); // antenna
    rect(this.x-17,this.y-49,3,74);// antenna
    ellipse(this.x-17, this.y-50, 14, 14);//balls on top of head
    ellipse(this.x+14, this.y-50, 14, 14);//balls on top of head
    ellipse(this.x, this.y, 58, 65);//body
    fill(255, 250, 250);
    ellipse(this.x, this.y-7, 40, 37);// white part of eyes
    fill(0, 0, 0);
    ellipse(this.x-3, this.y-7, 21, 20);
    fill(0, 97, 39);
    arc(this.x,this.y+19,38,22,-29,214);
};

var aliens2 = [];
for (var i = 0; i < 500; i++) {  
    aliens2.push(new Alien2(i * 40 + 21, random(50, 330)));
}

///////////////////////////////////////////
var pyroSmall=new pyroSmall(200,300);
var pyroMed=new pyroMed(200,300);
var pyroLarge=new pyroLarge(200,300);
var coveSmall=new coveSmall(200,300);
var coveMed=new coveMed(200,300);
var coveLarge=new coveLarge(200,300);
var duskSmall=new duskSmall(200,300);
var duskMed=new duskMed(200,300);
var duskLarge=new duskLarge(200,300);
var rhinoSmall=new rhinoSmall(200,300);
var rhinoMed=new rhinoMed(200,300);
var rhinoLarge=new rhinoLarge(200,300);
var sparkySmall=new sparkySmall(200,300);
var sparkyMed=new sparkyMed(200,300);
var sparkyLarge=new sparkyLarge(200,300);
///////////////////////////////////////////

///backgrounds for levels
    var background1=function () //highwayhills level
{   
    fill(255, 0, 0);
    background(145, 150, 150);
    fill(90, 166, 95);
    strokeWeight(3);
    rect(0,355,400,49);
    rect(0,1,411,47);
    strokeWeight(1.5);
    fill(255,255,0);
    rect(-5,185,50,10);
    rect(100,185,50,10);
    rect(195,185,50,10);
    rect(285,185,50,10);
    rect(375,185,50,10);
    fill(255, 255, 255);
    
};
    var background2=function() //winter wonderland level
{
    var snowX = 100;
    var snowY = 300;
    var iceX = 100;
    var iceY = 100;
    background(217, 217, 217);
    fill(255, 255, 0);
    rect(-1,175,403,10);
    rect(-1,200,403,10);
    fill(171, 166, 171);
    rect(-1,-1,403,52);
    rect(-1,350,403,52);

var snow = function(snowX,snowY) {
    
    fill(255, 255, 255);
    ellipse(snowX-16,snowY+130,36,31);
    ellipse(snowX+-16,snowY+109,28,33);
    ellipse(snowX-16,snowY+90,21,24);
    stroke(0, 0, 0);
    line(snowX+4,snowY+88,snowX+-6,snowY+104);
    line(snowX+-37,snowY+88,snowX+-27,snowY+104);
    
};
    snow(45,247);
    snow(155,256);
    snow(78,8);
    snow(186,-78);
    snow(355,90);
    
    
var blackIce = function (iceX,iceY) {
    fill(0, 0, 0);
    ellipse(iceX+106,iceY+-92,104,-20);
    ellipse(iceX+143,iceY-82,88,-20);
};
    blackIce(194,200);
    blackIce(-46,368);
};
    var background3=function() //sunset level
{
    var lightx = 100;
    var lighty = 100;
    background(191, 140, 194);
    fill(255, 204, 0);
    rect(-1,175,403,10);
    rect(-1,200,403,10);
    
    fill(171, 171, 171);
    rect(-1,-1,403,52);
    rect(-1,350,403,52);
    
var light = function(lightx,lighty) {
    fill(0, 0, 0);
    rect(lightx-161,lighty-186,12,36);        
    rect(lightx-152,lighty-186,22,14);
    fill(255, 242, 0);
    rect(lightx-150,lighty-180,19,7);
    stroke(0, 0, 0);
    line(lightx-128,lighty-158,lightx-132,lighty-168);
    line(lightx-144,lighty-158,lightx-142,lighty-168);
    line(lightx-137,lighty-158,lightx-137,lighty-168);
};
   
    light(200,200);
    light(335,200);
    light(492,200);
    light(200,516);
    light(335,516);
    light(492,516);
    noFill();
    
};
    var background4=function()//fire level
{
    var firex = 50;
    var firey = 50;
    background(184, 178, 162);
    fill(255, 255, 0);
    rect(-1,175,403,10);
    rect(-1,200,403,10);
    fill(71, 71, 71);
    rect(-1,-1,403,52);
    rect(-1,350,403,52);

var fire = function (firex,firey) {

fill(255, 0, 0);
triangle(firex+5,firey +2,firex+27,firey+2,firex+16,firey-50);
triangle(firex+20,firey+2,firex+37,firey+2,firex+27,firey-36);
triangle(firex-5,firey+2,firex+11,firey+2,firex+5,firey-36);
fill(255, 119, 0);
triangle(firex+5,firey+2,firex+27,firey+2,firex+16,firey-21);
triangle(firex+21,firey+2,firex+34,firey+2,firex+27,firey-10);
triangle(firex-1,firey+2,firex+9,firey+2,firex+5,firey-10);
};

    fire(17,35);
    fire(347,47);
    fire(136,69);
    fire(23,377);
    fire(304,383);
    fire(194,392);
}; 
    var background5=function()// outback bush level
{
    background(196, 181, 141);
    fill(255, 255, 0);
    rect(-1,175,403,10);
    rect(-1,200,403,10);
    fill(161, 140, 140);
    rect(-1,-1,403,52);
    rect(-1,350,403,52);

var bush = function(bushx,bushy) {
    
    fill(90, 209, 11);
    ellipse(bushx-35,bushy-68,35,24);  
    ellipse(bushx-49,bushy-78,35,24);   
    ellipse(bushx-60,bushy-68,35,24); 
    fill(148, 115, 33);
    rect(bushx-55,bushy-61,12,15);
};
    bush(97,444);
    bush(214,427);
    bush(336,432);
    
};
    var gameover=function() //gameover scene
{
    background(0, 0, 0);
    splash();
    textSize(59);
    fill(255, 255, 255);
    text("GAME OVER!!" ,4,sin(frameCount * 17) * 5.6 +196);
    textSize(30);
    text("Thanks for playing!!" ,70,sin(frameCount * 10) * 5.6 +288);
    
};

///// arrays for different enenmys
var backgroundpyroENEMYLVL1=function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=2;
        pyroSmall.checkForStickGrab(aliens1[i]);

}
};
var backgroundpyroENEMYLVL2 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=4;
        pyroMed.checkForStickGrab(aliens1[i]);
}
};
var backgroundpyroENEMYLVL3 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens2[i].draw();
        aliens2[i].x -=8;
        pyroLarge.checkForStickGrab(aliens2[i]);

}
};

var backgroundcoveENEMYLVL1 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=2;
        coveSmall.checkForStickGrab(aliens1[i]);

}
};
var backgroundcoveENEMYLVL2 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=4;
        coveMed.checkForStickGrab(aliens1[i]);
}
};
var backgroundcoveENEMYLVL3 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens2[i].draw();
        aliens2[i].x -=8;
        coveLarge.checkForStickGrab(aliens2[i]);

}
};

var backgroundduskENEMYLVL1 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=2;
        duskSmall.checkForStickGrab(aliens1[i]);

}
};
var backgroundduskENEMYLVL2 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=4;
        duskMed.checkForStickGrab(aliens1[i]);
}
};
var backgroundduskENEMYLVL3 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens2[i].draw();
        aliens2[i].x -=8;
        duskLarge.checkForStickGrab(aliens2[i]);

}
};

var backgroundrhinoENEMYLVL1 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=2;
       rhinoSmall.checkForStickGrab(aliens1[i]);

}
};
var backgroundrhinoENEMYLVL2 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=4;
        rhinoMed.checkForStickGrab(aliens1[i]);
}
};
var backgroundrhinoENEMYLVL3 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens2[i].draw();
        aliens2[i].x -=8;
        rhinoLarge.checkForStickGrab(aliens2[i]);

}
};
var backgroundsparkyENEMYLVL1 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=2;
       sparkySmall.checkForStickGrab(aliens1[i]);

}
};
var backgroundsparkyENEMYLVL2 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens1[i].draw();
        aliens1[i].x -=4;
        sparkyMed.checkForStickGrab(aliens1[i]);
}
};
var backgroundsparkyENEMYLVL3 = function() //background objects that move across the levels
{   
    fill(34, 230, 34);
    for (var i = 0; i < aliens1.length; i++) {
        aliens2[i].draw();
        aliens2[i].x -=8;
        sparkyLarge.checkForStickGrab(aliens2[i]);

}
};


////congrats scenes
    var congratsPyro = function () //congrats scene for pyro
{   
    background(0, 0, 0);
    splash();
    textSize(35);
    fill(255, 0, 0);
    text("Congratulations! You saved Pyro from the               Aliens!!",34,36,370,165);
    text("Here Take a piece of candy for your hard work!",5,215,406,100);
};
    var congratsCove = function () //congrats scene for cove
{   
   background(0, 0, 0);
    splash();
    textSize(35);
    fill(0, 238, 255);
    text("Congratulations! You saved Cove from the               Aliens!!",34,36,370,165);
    text("Here Take a piece of candy for your hard work!",5,215,406,100);
};
    var congratsDusk = function ()//congrats scene for dusk
{   
   background(0, 0, 0);
    splash();
    textSize(35);
    fill(188, 3, 250);
    text("Congratulations! You saved Dusk from the               Aliens!!",34,36,370,165);
    text("Here Take a piece of candy for your hard work!",5,215,406,100);
};
    var congratsRhino= function () //congrats scene for rhino
{   
    background(0, 0, 0);
    splash();
    textSize(35);
    fill(255, 255, 255);
    text("Congratulations! You saved Rhino from the               Aliens!!",34,36,370,165);
    text("Here Take a piece of candy for your hard work!",5,215,406,100);
};
    var congratsSparky = function () //congrats scene for sparky
{   
     background(0, 0, 0);
    splash();
    textSize(35);
    fill(255, 242, 0);
    text("Congratulations! You saved Sparky from the               Aliens!!",34,36,370,165);
    text("Here Take a piece of candy for your hard work!",5,215,406,100);
};

///start tabs
    var stageLVL1 = function()//stage one 
{   
    if(currentscene===3)
    {
    background1();
    backgroundpyroENEMYLVL1();
    pausePyro.draw();
    }
    if(currentscene===13)
    {
    background1();
    backgroundcoveENEMYLVL1();
    pausePyro.draw();
}
    if(currentscene===23)
    {
    background1();
    backgroundduskENEMYLVL1();
    pausePyro.draw();
}
    if(currentscene===33)
    {
    background1();
    backgroundrhinoENEMYLVL1();
    pausePyro.draw();
}
    if(currentscene===43)
    {
    background1();
    backgroundsparkyENEMYLVL1();
    pausePyro.draw();
}
};
    var stageLVL2 = function()//stage two 
{
    if(currentscene===4)
    {
    background2();
    backgroundpyroENEMYLVL1();
    pausePyro.draw();
    }
    if(currentscene===14)
    {
    background2();
    backgroundcoveENEMYLVL1();
    pausePyro.draw();
    }
    if(currentscene===24)
    {
    background2();
    backgroundduskENEMYLVL1();
    pausePyro.draw();
    }
    if(currentscene===34)
    {
    background2();
    backgroundrhinoENEMYLVL1();
    pausePyro.draw();
    }
    if(currentscene===44)
    {
    background2();
    backgroundsparkyENEMYLVL1();
    pausePyro.draw();
    }
};
    var stageLVL3 = function()//stage three 
{
    if(currentscene===5)
    {
    background3();
    backgroundpyroENEMYLVL2();
    pausePyro.draw();
    }
     if(currentscene===15)
    {
    background3();
    backgroundcoveENEMYLVL2();
    pausePyro.draw();
    }
    if(currentscene===25)
    {
    background3();
    backgroundduskENEMYLVL2();
    pausePyro.draw();
    }
    if(currentscene===35)
    {
    background3();
    backgroundrhinoENEMYLVL2();
    pausePyro.draw();
    }
    if(currentscene===45)
    {
    background3();
    backgroundsparkyENEMYLVL2();
    pausePyro.draw();
    }
};
    var stageLVL4 = function()//stage four 
{
    if(currentscene===6)
    {
    background4();
    backgroundpyroENEMYLVL2();
    pausePyro.draw();
    }
     if(currentscene===16)
    {
    background4();
    backgroundcoveENEMYLVL2();
    pausePyro.draw();
    }
    if(currentscene===26)
    {
    background4();
    backgroundduskENEMYLVL2();
    pausePyro.draw();
    }
    if(currentscene===36)
    {
    background4();
    backgroundrhinoENEMYLVL2();
    pausePyro.draw();
    }
    if(currentscene===46)
    {
    background4();
    backgroundsparkyENEMYLVL2();
    pausePyro.draw();
    }
};
    var stageLVL5 = function()//stage five 
{
    if(currentscene===7)
    {
    background5();
    backgroundpyroENEMYLVL3();
    pausePyro.draw();
    }
     if(currentscene===17)
    {
    background5();
    backgroundcoveENEMYLVL3();
    pausePyro.draw();
    }
    if(currentscene===27)
    {
    background5();
    backgroundduskENEMYLVL3();
    pausePyro.draw();
    }
    if(currentscene===37)
    {
    background5();
    backgroundrhinoENEMYLVL3();
    pausePyro.draw();
    }
    if(currentscene===47)
    {
    background5();
    backgroundsparkyENEMYLVL3();
    pausePyro.draw();
    }
};

////instruction tabs
    var instructionsPyro = function()//instructions page for pyro
{
    background(2);
    fill(255,0,0);
    fill(255,255,255);
    textSize(50);
    fill(252, 252, 252);
    textSize(35);
    text("PYRO NEEDS HELP!", 34,sin(frameCount * 10) * 2.5 +30);
    textSize(20);
    text("Use the spacebar to move to ", 88,80);
    text("Help him by avoiding the objects.", 66,110);
    textSize(40);
    text("Scoring System", 52,sin(frameCount * 10) * 2.5 +160);
    textSize(20);
    text("Earn points by traveling to each", 58,219);
    text("safe zone.", 159,251);
    text("Lose points by hitting the enemies", 47,280);
    instructionsMainMenu.draw();
    startinstructions.draw();
    launchPyro();
};
    var instructionsCove = function()//instructions page for cove
{
    background(2);
    fill(255,0,0);
    fill(255,255,255);
    textSize(50);
    fill(252, 252, 252);
    textSize(35);
    text("COVE NEEDS HELP!", 34,sin(frameCount * 10) * 2.5 +30);
    textSize(20);
    text("Use the spacebar to move to ", 88,80);
    text("Help her by avoiding the objects.", 66,110);
    textSize(40);
    text("Scoring System", 52,sin(frameCount * 10) * 2.5 +160);
    textSize(20);
    text("Earn points by traveling to each", 58,219);
    text("safe zone.", 159,251);
    text("Lose points by hitting the enemies", 47,280);
    startinstructions.draw();
    instructionsMainMenu.draw();
    launchCove();
};
    var instructionsDusk = function()//instructions page for dusk
{
    background(2);
    fill(255,0,0);
    fill(255,255,255);
    textSize(50);
    fill(252, 252, 252);
    textSize(35);
    text("DUSK NEEDS HELP!", 34,sin(frameCount * 10) * 2.5 +30);
    textSize(20);
    text("Use the spacebar to move to ", 88,80);
    text("Help her by avoiding the objects.", 66,110);
    textSize(40);
    text("Scoring System", 52,sin(frameCount * 10) * 2.5 +160);
    textSize(20);
    text("Earn points by traveling to each", 58,219);
    text("safe zone.", 159,251);
    text("Lose points by hitting the enemies", 47,280);
    startinstructions.draw();
    instructionsMainMenu.draw();
    launchDusk();
};
    var instructionsRhino = function()//instructions page for rhino
{
    background(2);
    fill(255,0,0);
    fill(255,255,255);
    textSize(50);
    fill(252, 252, 252);
    textSize(35);
    text("RHINO NEEDS HELP!", 29,sin(frameCount * 10) * 2.5 +30);
    textSize(20);
    text("Use the spacebar to move to ", 88,80);
    text("Help him by avoiding the objects.", 66,110);
    textSize(40);
    text("Scoring System", 52,sin(frameCount * 10) * 2.5 +160);
    textSize(20);
    text("Earn points by traveling to each", 58,219);
    text("safe zone.", 159,251);
    text("Lose points by hitting the enemies", 47,280);
    startinstructions.draw();
    instructionsMainMenu.draw();
    launchRhino();
};
    var instructionsSparky = function()//instructions page for sparky
{
    background(2);
    fill(255,0,0);
    fill(255,255,255);
    textSize(50);
    fill(252, 252, 252);
    textSize(35);
    text("SPARKY NEEDS HELP!", 15,sin(frameCount * 10) * 2.5 +30);
    textSize(20);
    text("Use the spacebar to move to ", 88,80);
    text("Help him by avoiding the objects.", 66,110);
    textSize(40);
    text("Scoring System", 52,sin(frameCount * 10) * 2.5 +160);
    textSize(20);
    text("Earn points by traveling to each", 58,219);
    text("safe zone.", 159,251);
    text("Lose points by hitting the enemies", 47,280);
    startinstructions.draw();
    instructionsMainMenu.draw();
    launchSparky();
};

//level selection tabs
var levelselectionPyro = function()//level selection page for pyro
{
   background(0,0,0);
  
   launchPyro();
   level1.draw();
   level2.draw();
   level3.draw();
   level4.draw();
   level5.draw();
   image(getImage("avatars/piceratops-sapling"), 46, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/piceratops-sapling"),300, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/piceratops-tree"), 46, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/piceratops-tree"), 295, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/piceratops-ultimate"), 182, sin(frameCount * 10) *5 + 234, 60, 60);
   mainMenuButtonlvl.draw();
};
var levelselectionCove = function()//level selection page for cove
{
   background(0,0,0);
  
   launchCove();
   level1.draw();
   level2.draw();
   level3.draw();
   level4.draw();
   level5.draw();
   image(getImage("avatars/aqualine-sapling"), 46, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/aqualine-sapling"),300, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/aqualine-tree"), 46, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/aqualine-tree"), 295, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/aqualine-ultimate"), 182, sin(frameCount * 10) *5 + 234, 60, 60);
   mainMenuButtonlvl.draw();

};
var levelselectionDusk = function()//level selection page for dusk
{
   background(0,0,0);
   launchDusk();
   level1.draw();
   level2.draw();
   level3.draw();
   level4.draw();
   level5.draw();
   image(getImage("avatars/duskpin-sapling"), 46, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/duskpin-sapling"),300, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/duskpin-tree"), 46, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/duskpin-tree"), 295, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/duskpin-ultimate"), 182, sin(frameCount * 10) *5 + 234, 60, 60);
   mainMenuButtonlvl.draw();
};
var levelselectionRhino = function()//level selection page for rhino
{
   background(0,0,0);
   launchRhino();
   level1.draw();
   level2.draw();
   level3.draw();
   level4.draw();
   level5.draw();
   image(getImage("avatars/starky-sapling"), 46, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/starky-sapling"),300, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/starky-tree"), 46, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/starky-tree"), 295, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/starky-ultimate"), 182, sin(frameCount * 10) *5 + 234, 60, 60);
   mainMenuButtonlvl.draw();
};
var levelselectionSparky = function()//level selection page for sparky
{
   background(0,0,0);
  
   launchSparky();
   level1.draw();
   level2.draw();
   level3.draw();
   level4.draw();
   level5.draw();
   image(getImage("avatars/primosaur-sapling"), 46, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/primosaur-sapling"),300, sin(frameCount * 5) *5 + 28, 60, 60);
   image(getImage("avatars/primosaur-tree"), 46, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/primosaur-tree"), 295, sin(frameCount * 5) *5 + 130, 60, 60);
   image(getImage("avatars/primosaur-ultimate"), 182, sin(frameCount * 10) *5 + 234, 60, 60);
   mainMenuButtonlvl.draw();
};

///pause tabs
    var pause1 = function()// pause page for pyro
{
    background(2);
    fill(255, 255, 255);
    textSize(22);
    text("To Unpause the game. Press the Start Button at the Bottom left of the screen",86,61,240,200);
    mainMenuButton.draw();
    levelSelectPause.draw();
    pauseStartButton.draw();
    launchPyro();
};
    var pause2 = function()//pause page for cove
{
    background(2);
    fill(255, 255, 255);
    textSize(22);
    text("To Unpause the game. Press the Start Button at the Bottom left of the screen",86,61,240,200);
    mainMenuButton.draw();
    levelSelectPause.draw();
    pauseStartButton.draw();
    launchCove();
};
    var pause3 = function()//pause page for dusk
{
    background(2);
    fill(255, 255, 255);
    textSize(22);
    text("To Unpause the game. Press the Start Button at the Bottom left of the screen",86,61,240,200);
    mainMenuButton.draw();
    levelSelectPause.draw();
    pauseStartButton.draw();
    launchDusk();
};
    var pause4 = function()//pause page for rhino
{
    background(2);
    fill(255, 255, 255);
    textSize(22);
    text("To Unpause the game. Press the Start Button at the Bottom left of the screen",86,61,240,200);
    mainMenuButton.draw();
    levelSelectPause.draw();
    pauseStartButton.draw();
    launchRhino();
};
    var pause5 = function()//pause page for sparky
{
    background(2);
    fill(255, 255, 255);
    textSize(22);
    text("To Unpause the game. Press the Start Button at the Bottom left of the screen",86,61,240,200);
    mainMenuButton.draw();
    levelSelectPause.draw();
    pauseStartButton.draw();
    launchSparky();
};

//about tabs
    var aboutPyro =function()// about page for pyro
{
    background(0, 0, 0);
    fill(255,255,255);
    textSize(20);
    text("This game was created by Chris Owens and Chris Vartanian.",20,62,213,623);
    text("It is based off the old school frogger game with 5 playable charaters, 4 stages and a boss stage.",20,149,371,623);
    launchPyro();
    fill(255, 255, 255);
    textSize(15);
    text("Contact us at cowens@my.uri.edu.",0,329,371,623);
    text("or chrisvartanian@my.uri.edu.",0,351,371,623);
    launchPyro();
    mainMenuAboutButton.draw();
    levelSelectAbout.draw();
    
};
    var aboutCove =function()//about page for cove
{
    background(0, 0, 0);
    fill(255,255,255);
    textSize(20);
    text("This game was created by Chris Owens and Chris Vartanian.",20,62,213,623);
    text("It is based off the old school frogger game with 5 playable charaters, 4 stages and a boss stage.",20,149,371,623);
    launchPyro();
    fill(255, 255, 255);
    textSize(15);
    text("Contact us at cowens@my.uri.edu.",0,329,371,623);
    text("or chrisvartanian@my.uri.edu.",0,351,371,623);
    launchCove();
    mainMenuAboutButton.draw();
    levelSelectAbout.draw();
};
    var aboutDusk =function()//about page for dusk
{
    background(0, 0, 0);
    fill(255,255,255);
    textSize(20);
    text("This game was created by Chris Owens and Chris Vartanian.",20,62,213,623);
    text("It is based off the old school frogger game with 5 playable charaters, 4 stages and a boss stage.",20,149,371,623);
    launchPyro();
    fill(255, 255, 255);
    textSize(15);
    text("Contact us at cowens@my.uri.edu.",0,329,371,623);
    text("or chrisvartanian@my.uri.edu.",0,351,371,623);
    launchDusk();
    mainMenuAboutButton.draw();
    levelSelectAbout.draw();
};
    var aboutRhino =function()//about page for rhino
{
    background(0, 0, 0);
    fill(255,255,255);
    textSize(20);
    text("This game was created by Chris Owens and Chris Vartanian.",20,62,213,623);
    text("It is based off the old school frogger game with 5 playable charaters, 4 stages and a boss stage.",20,149,371,623);
    launchPyro();
    fill(255, 255, 255);
    textSize(15);
    text("Contact us at cowens@my.uri.edu.",0,329,371,623);
    text("or chrisvartanian@my.uri.edu.",0,351,371,623);
    launchRhino();
    mainMenuAboutButton.draw();
    levelSelectAbout.draw();
};
    var aboutSparky =function()//about page for sparky
{
    background(0, 0, 0);
    fill(255,255,255);
    textSize(20);
    text("This game was created by Chris Owens and Chris Vartanian.",20,62,213,623);
    text("It is based off the old school frogger game with 5 playable charaters, 4 stages and a boss stage.",20,149,371,623);
    launchPyro();
    fill(255, 255, 255);
    textSize(15);
    text("Contact us at cowens@my.uri.edu.",0,329,371,623);
    text("or chrisvartanian@my.uri.edu.",0,351,371,623);
    launchSparky();
    mainMenuAboutButton.draw();
    levelSelectAbout.draw();
};

////player stuff
    var choseplayer = function() //Player selection scene
{
    background(0, 0, 0);
    fill(255, 250, 250);
    text("Choose Your Player",137,sin(frameCount * 10) *3 + 44,200,200);
    image(getImage("avatars/piceratops-ultimate"), 8, sin(frameCount * 10) *5 + 85, 109, 109);
    pyroButton.draw();
    image(getImage("avatars/aqualine-ultimate"), 151, sin(frameCount * 10) *5 + 85, 109, 109);
    coveButton.draw();
    image(getImage("avatars/duskpin-ultimate"), 294, sin(frameCount * 10) *5 + 85, 109, 109);
    duskButton.draw();
    image(getImage("avatars/starky-ultimate"), 63, sin(frameCount * 10) *5 + 245, 109, 109);
    rhinoButton.draw();
    image(getImage("avatars/primosaur-ultimate"), 245, sin(frameCount * 10) *5 + 247, 109, 109);
    sparkyButton.draw();
};
    var beginPyro= function ()//start scene for pyro
{
    background(0,0,0);
    textSize(99);
    fill(255, 255, 250);
    fill(255, 0, 0);
    image(getImage("avatars/piceratops-ultimate"), 225, sin(frameCount * 10) *30 + 174, 125, 125);
    logoPyro();
    start.draw();
    learingthegame.draw();
    levelSelectButton.draw();
    playerSelect.draw();
    about.draw();
    
};
    var beginCove= function ()//start scene for Cove
{
    background(0,0,0);
    textSize(99);
    fill(255, 255, 250);
    fill(255, 0, 0);
    image(getImage("avatars/aqualine-ultimate"), 225, sin(frameCount * 10) *30 + 174, 125, 125);
    logoCove();
    learingthegame.draw();
    levelSelectButton.draw();
    start.draw();
    about.draw();
    playerSelect.draw();
};
    var beginDusk= function ()// start scene for dusk
{
    background(0,0,0);
    textSize(99);
    fill(255, 255, 250);
    fill(255, 0, 0);
    image(getImage("avatars/duskpin-ultimate"), 250, sin(frameCount * 10) *19 + 174, 125, 125);
    logoDusk();
    learingthegame.draw();
    levelSelectButton.draw();
    start.draw();
    about.draw();
    playerSelect.draw();
};
    var beginRhino= function ()//start scene for rhino
{
    background(0,0,0);
    textSize(99);
    fill(255, 255, 250);
    fill(255, 0, 0);
    image(getImage("avatars/starky-ultimate"), 235, sin(frameCount * 10) *19 + 174, 150, 151);
    logoRhino();
    learingthegame.draw();
    levelSelectButton.draw();
    start.draw();
    about.draw();
    playerSelect.draw();
};
    var beginSparky= function ()//start scene for sparky
{
    background(0,0,0);
    textSize(99);
    fill(255, 255, 250);
    fill(255, 0, 0);
    image(getImage("avatars/primosaur-ultimate"), 225, sin(frameCount * 10) *11 + 174, 142, 153);
    logoSparky();
    learingthegame.draw();
    levelSelectButton.draw();
    start.draw();
    about.draw();
    playerSelect.draw();
};
    var scoringsystem1 = function()// scoring system pyroSmall
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text("/ 7",74,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        pyroSmall.hop();
    } else {
        pyroSmall.fall();
    }
        pyroSmall.draw();
        
};
    var scoringsystem2 = function()// scoring system pyroMed
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 15",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        pyroMed.hop();
    } else {
        pyroMed.fall();
    }
        pyroMed.draw();
};
    var scoringsystem3 = function()// scoring system pyroLarge
{   
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 32",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        pyroLarge.hop();
    } else {
        pyroLarge.fall();
    }
        pyroLarge.draw();
};
    var scoringsystem4 = function()// scoring system coveSmall
{
    
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 7",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        coveSmall.hop();
    } else {
        coveSmall.fall();
    }
        coveSmall.draw();
 
};
    var scoringsystem5 = function()// scoring system coveMed
{
    
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 15",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        coveMed.hop();
    } else {
        coveMed.fall();
    }
        coveMed.draw();
};
    var scoringsystem6 = function()// scoring system coveLarge
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 32",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        coveLarge.hop();
    } else {
        coveLarge.fall();
    }
        coveLarge.draw();
};
    var scoringsystem7 = function()// scoring system duskSmall
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 7",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        duskSmall.hop();
    } else {
        duskSmall.fall();
    }
        duskSmall.draw();
};
    var scoringsystem8 = function()// scoring system duskMed
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 15",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        duskMed.hop();
    } else {
        duskMed.fall();
    }
        duskMed.draw();
};
    var scoringsystem9 = function()// scoring system duskLarge
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 32",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        duskLarge.hop();
    } else {
        duskLarge.fall();
    }
        duskLarge.draw();
};
    var scoringsystem10 = function()// scoring system rhinoSmall
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 7",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        rhinoSmall.hop();
    } else {
        rhinoSmall.fall();
    }
        rhinoSmall.draw();
};
    var scoringsystem11 = function()// scoring system rhinoMed
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 15",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        rhinoMed.hop();
    } else {
        rhinoMed.fall();
    }
        rhinoMed.draw();
};
    var scoringsystem12 = function()// scoring system rhinoLarge
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 32",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        rhinoLarge.hop();
    } else {
        rhinoLarge.fall();
    }
        rhinoLarge.draw();
};
    var scoringsystem13 = function()// scoring system sparkySmall
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 7",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        sparkySmall.hop();
    } else {
        sparkySmall.fall();
    }
        sparkySmall.draw();
};
    var scoringsystem14 = function()// scoring system sparkyMed
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 15",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        sparkyMed.hop();
    } else {
        sparkyMed.fall();
    }
        sparkyMed.draw();
};
    var scoringsystem15 = function()// scoring system sparkyLarge
{
    fill(0, 0, 0);
    rect(0,0,135,50);
    fill(255, 255, 255);
    textSize(18);
    text("Start Side",305,370,100,100);
    text("Score: "+ score, 5, 14);
    textSize(18);
    text(" / 32",73,14,100,100);
    
    if (keyIsPressed && keyCode === 0) {
        sparkyLarge.hop();
    } else {
        sparkyLarge.fall();
    }
        sparkyLarge.draw();
};
////
draw= function() {
    if(currentscene===1)
{   beginPyro();
    launchPyro();
}
    if(currentscene===2)
{
      instructionsPyro();
}
    if(currentscene===3)
{    stageLVL1();
     scoringsystem1();
     if(currentscene===3 && score===3)
{   
     playSound(getSound("rpg/metal-chime"));
     currentscene=4;
     stageLVL2();
}
    if(currentscene===3 && score===-3)
{   
     playSound(getSound("retro/whistle1"));
     currentscene=101;
     
}
    
}
    if(currentscene===4)
{
    stageLVL2();
    scoringsystem1();
    if(currentscene===4 && score===7)
{   
     playSound(getSound("rpg/metal-chime"));  
     currentscene=5;
     stageLVL3();
}
 if(currentscene===4 && score===-1)
{       
     currentscene=101;
     playSound(getSound("retro/whistle1"));
     
}
}
    if(currentscene===5)
{
     stageLVL3();
     scoringsystem2();
     if(currentscene===5 && score===15)
     {  
         playSound(getSound("rpg/metal-chime"));
         currentscene=6;
     }
    if(currentscene===5 && score===-1)
{
         currentscene=101;
         playSound(getSound("retro/whistle1"));
     }
    }
    if(currentscene===6)
{
     stageLVL4();
     scoringsystem2();
     if(currentscene===6 && score===30)
     {   
         playSound(getSound("rpg/metal-chime"));
         currentscene=7;
     }
     if(currentscene===6 && score===-1)
     {
         gameover();
         playSound(getSound("retro/whistle1"));
     }
}
    if(currentscene===7)
{
     stageLVL5();
     scoringsystem3();
     if(currentscene===7 && score===32)
     {
         playSound(getSound("rpg/metal-chime"));
         currentscene=102;
     }
     if(currentscene===7 && score===10)
     {
         currentscene=101;
         playSound(getSound("retro/whistle1"));
     }
}
    if(currentscene===11)
{  
        beginCove();
        launchCove();
}
    if(currentscene===12)
{
        instructionsCove();
    }
    if(currentscene===13)
{
    stageLVL1();
    scoringsystem4();
    if(currentscene===13 && score===3)
    {
        currentscene=14;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===13 && score===-3)
    {
         currentscene=101;
         playSound(getSound("retro/whistle1"));
    }
    }
    if(currentscene===14)
{       stageLVL2();
        scoringsystem4();
   if(currentscene===14 && score===7)
   {
       currentscene=15;
       playSound(getSound("rpg/metal-chime"));
   }
   if(currentscene===14 && score===-1)
   {
       currentscene=101;
       playSound(getSound("retro/whistle1"));
   }
   }
    if(currentscene===15)
{       stageLVL3();
        scoringsystem5();
    if(currentscene===15 && score===15)
    {
        currentscene=16;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===15 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
    }
    if(currentscene===16)
{       stageLVL4();
        scoringsystem5();
    if(currentscene===16 && score===30)
    {
        currentscene=17;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===17 && score===-1)
    {
       currentscene=101; 
       playSound(getSound("retro/whistle1"));
    }
    }
    if(currentscene===17)
{       stageLVL5();
        scoringsystem6();
    if(currentscene===17 && score===32)
    {
        currentscene=102;
        
    }
    if(currentscene===17 && score===15)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
    
    }
    if(currentscene===21)
{
        beginDusk();
        launchDusk();
    }
    if(currentscene===22)
{
        instructionsDusk();
    }
    if(currentscene===23)
{       stageLVL1();
        scoringsystem7();
    if(currentscene===23 && score===3)
    {
        currentscene=24;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===23 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
    }
    if(currentscene===24)
{       stageLVL2();
        scoringsystem7();
    if(currentscene===24 && score===7)
    {
        currentscene=25;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===24 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===25)
{       stageLVL3();
        scoringsystem8();
    if(currentscene===25 && score===15)
    {
        currentscene=26;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===25 && score===-1)     
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===26)
{       stageLVL4();
        scoringsystem8();
    if(currentscene===26 && score===30)
    {
        currentscene=27;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===26 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===27)
{       stageLVL5();
        scoringsystem9();
    if(currentscene===27 && score===32)
    {
        currentscene=104;
    }
    if(currentscene===27 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===31)
{
        beginRhino();
        launchRhino();
    }
    if(currentscene===32)
{
        instructionsRhino();
    }
    if(currentscene===33)
{       stageLVL1();
        scoringsystem10();
    if(currentscene===33 && score===3)
    {
        currentscene=34;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===33 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===34)
{       stageLVL2();
        scoringsystem10();
    if(currentscene===34 && score===7)
    {
        currentscene=35;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===34 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===35)
{       stageLVL3();
        scoringsystem11();
    if(currentscene===35 && score===15)
    {
        currentscene=36;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===25 && score===-1)
    {
       currentscene=101; 
       playSound(getSound("retro/whistle1"));
    }
    }
    if(currentscene===36)
{       stageLVL4();
        scoringsystem11();
    if(currentscene===36 && score===30)
    {
        currentscene=37;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===36 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===37)
{       stageLVL5();
        scoringsystem12();
    if(currentscene===37 && score===32)
    {  
        currentscene=105;
    }
    if(currentscene===37 && score === 15)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===41)
{
        beginSparky();
        launchSparky();
}
    if(currentscene===42)
{
       instructionsSparky();
}
    if(currentscene===43)
{       stageLVL1();
        scoringsystem13();
    if(currentscene===43 && score===3)
    {
        currentscene=44;
        playSound(getSound("rpg/metal-chime"));
    }
    if(currentscene===43 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===44)
{       stageLVL2();
        scoringsystem13();
    if(currentscene===44 && score===7)
    {  
        playSound(getSound("rpg/metal-chime"));
        currentscene=45;
    }
    if(currentscene===44 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===45)
{       stageLVL3();
        scoringsystem14();
    if(currentscene===45 && score===15)
    {
        playSound(getSound("rpg/metal-chime"));
        currentscene=46;
    }
    if(currentscene===45 && score===-1)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
    
}
    if(currentscene===46)
{       stageLVL4();
        scoringsystem14();
    if(currentscene===46 && score===30)
    {   
        playSound(getSound("rpg/metal-chime"));
        currentscene=47;
    }
    if(currentscene===46 && score===15)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
}
    if(currentscene===47)
{       stageLVL5();
        scoringsystem15();
    if(currentscene===47 && score===32)
    {
        currentscene=106;
    }
    if(currentscene===47 && score===15)
    {
        currentscene=101;
        playSound(getSound("retro/whistle1"));
    }
   
}
    if(currentscene===74)
{
        pause1();
    }
    if(currentscene===75)
{
        pause2();
    }
    if(currentscene===76)
{
        pause3();
}
    if(currentscene===77)
{
        pause4();
}
    if(currentscene===78)
{
        pause5();
}
    if(currentscene===84)
{
        aboutPyro();
}
    if(currentscene===85)
{
        aboutCove();
}
    if(currentscene===86)
{
        aboutDusk();
}
    if(currentscene===87)
{
        aboutRhino();
}
    if(currentscene===88)
{
        aboutSparky();
}
    if(currentscene===94)
{
        levelselectionPyro();
    
}
    if(currentscene===95)
{
        levelselectionCove();
}
    if(currentscene===96)
{
        levelselectionDusk();
}
    if(currentscene===97)
{
        levelselectionRhino();
}
    if(currentscene===98)
{
        levelselectionSparky();
}
    if(currentscene===99)
{
        choseplayer();
}
    if(currentscene===100)
{
        logoSplash();
        splashButton.draw();
        splash();
}
    if(currentscene===101)
{
        gameover();
    }
    if(currentscene===102)
{
        congratsPyro();
    }
    if(currentscene===103)
{
        congratsCove();
    }
    if(currentscene===104)
{
        congratsDusk();
    }
    if(currentscene===105)
{
        congratsRhino();
    }
    if(currentscene===106)
{
        congratsSparky();
}
};

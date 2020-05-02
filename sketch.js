var form,game,player;
var database,playerCount=0,gameState=0;
var allPlayers
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
game.getState();
game.start();
}

function draw(){
    background("white");

}




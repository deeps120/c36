class Form {
    constructor(){
        this.input= createInput("name");
        this.button= createButton('play');
        this.greeting= createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("car racing game");
        title.position(130,50);
        
        this.input.position(130,160);
        this.button.position(250,200);
this.button.mousePressed(function( ){
    this.input.hide();
    this.button.hide();
     player.name=this.input.value();
    playerCount++;
    player.update(name);
    player.updateCount(playerCount);
    greeting.html("hello "+ name);
    greeting.position(130,160);

})
    }
}
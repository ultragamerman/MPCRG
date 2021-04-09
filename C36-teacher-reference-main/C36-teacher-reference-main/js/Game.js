class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref = await database.ref('playerCount').once("value");
      if(playerCountref.exists()){
        playerCount = playerCountref.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(32);
    text("GAME START",100,50);
    Player.getPlayerInfo();
    if(allPlayers!=undefined){
      var displayPosition = 130;
      for(var p1 in allPlayers){
        if(p1 == "Player" + player.index)
          fill("red");
          else
          fill("black");
          displayPosition += 20;
          textSize(15);
          text(allPlayers[p1].name + ":" + allPlayers[p1].distance,120,displayPosition);
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index != null){
      player.distance+=50;
      player.update();
    }
  }
}
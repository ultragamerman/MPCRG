class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var plyrCnt = database.ref('playerCount');
        plyrCnt.on("value",(data)=>{
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "Players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfo = database.ref('Players');
        playerInfo.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}
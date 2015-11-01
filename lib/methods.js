Meteor.methods({
  
  updatePlayerStatus: function (playerId, statusVal) {
    Players.update({
  		player_id: playerId
  	},{
  		$set: {status: statusVal}
  	});
  	console.log("status of player "+playerId +" is updated to "+statusVal);
  },

  updatePlayerChoice: function (playerId, choiceVal) {
    Players.update({
  		player_id: playerId
  	},{
  		$set: {choice: choiceVal}
  	});
  	console.log("choice of player "+playerId +" is updated to "+choiceVal);
  },

  findPlayer: function (playerId) {
    var player = Players.findOne({player_id: playerId});
    if(player.status==0){
    	updatePlayer(playerId,1);
    }
    // return player;
  }


});
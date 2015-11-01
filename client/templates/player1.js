var compare = function(x, y) {
	 //1 means x>y, -1 mean x<y, 0 means x=y
	 //if y invalid, x valid,  then x>y
	 //if x invalid, y valid, then x<y
	 //if both invalid, then x=y
		if(x==='rock'){
			if(y==='scissors') return 1;
			else if(y==='paper') return -1;
			else if(y==='rock') return 0;
			else return 1; 
		}
		if(x==='paper') {
			if(y==='scissors') return -1;
			else if(y==='paper') return 0;
			else if(y==='rock') return 1;
			else return 1;			
		}
		if(x==='scissors') {
			if(y==='scissors') return 0;
			else if(y==='paper') return 1;
			else if(y==='rock') return -1;
			else return 1;			
		}
		else{
			if(y==='rock'||y==='paper'||y==='scissors') return -1;
			else return 0;
		}

};

var showResult = function(){
	  var player1 = Players.findOne({'player_id': 1});    
	  var player2 = Players.findOne({'player_id': 2});
	  var result;
	  var result_message;	  
  	console.log("player1 choice is "+player1.choice);
  	console.log("player2 choice is "+player2.choice);
  	result = compare(player1.choice, player2.choice);
  	console.log(result);
  	if(result==1){
  		result_message = "player 1 win";
  		console.log("player 1 win");
  	}
  	else if (result==-1){
  		result_message = "player 2 win";
  		console.log("player 2 win");
  	}
  	else{
  		result_message = "it's a tie";
  		console.log("it's a tie");
  	}
  	$("#result_panel_body").html(result_message);
    $('#resultboard').show();
    Meteor.call("updatePlayerStatus", 1, 0);
    // Meteor.call("updatePlayerStatus", 2, 0);

};

var observePlayer = function(playerId){
        Players.find({player_id: playerId}).observe({
          changed: function() {
             console.log('player '+playerId+' changed');
			  			$("#status").hide(); 			
              showResult();
              return true;
          }
        })    
};



Template.player1.onRendered(function() {
		$("#resultboard").hide();
    $("#status").hide();      
    $("#playboard").show();

});


Template.player1.events({

	'submit .choice': function(event, template) {
    event.preventDefault();
    var choice = template.find('input:radio[name=choice]:checked');

    console.log("got choice "+choice.value);
    Meteor.call("updatePlayerChoice", 1, choice.value);
    Meteor.call("updatePlayerStatus", 1, 1);

    var player2 = Players.findOne({'player_id': 2});
    console.log("current status of player2 is: "+  player2.status);
    if(player2.status==1){
      showResult();
    }
    else{
      $("#status").show(); 
      // $("#resultboard").hide();
      observePlayer(2);
    }



  },

  
});



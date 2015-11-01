var compare = function(x, y) {
	 //1 means x>y, -1 mean x<y, 0 means x=y
	 //if y invalid, x valid,  then x>y
	 //if x invalid, y valid, then x<y
	 //if both invalid, then x=y
		if(x==='rock'){
			if(y==='scissors') return 1;
			else if(y==='papers') return -1;
			else if(y==='rock') return 0;
			else return 1; 
		}
		if(x==='papers') {
			if(y==='scissors') return -1;
			else if(y==='papers') return 0;
			else if(y==='rock') return 1;
			else return 1;			
		}
		if(x==='scissors') {
			if(y==='scissors') return 0;
			else if(y==='papers') return 1;
			else if(y==='rock') return -1;
			else return 1;			
		}
		else{
			if(y==='rock'||y==='papers'||y==='scissors') return -1;
			else return 0;
		}

};

var startCountDown = function(){
  var counter = 10;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
    	// Display 'counter' 
			$("#count").html(counter);
    }    
    if (counter === 0) {
        // alert('this is where it happens');
        showResult();
        clearInterval(counter);
    }
  }, 1000);

};

var showResult = function(){
	  var player1 = Players.findOne({'player_id': 1});    
	  var player2 = Players.findOne({'player_id': 2});
	  var result;
	  var result_message;
	  if(player2.status==0){
	  	console.log("player2 not activated");
	  }
	  
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
  	// show result message in both player1 and player2 play_board


  	$("#result_panel_body").html(result_message);
    $('#resultboard').show();

};

var observePlayer2Activated = function(){
        Players.find({player_id:2}).observe({
          changed: function() {
             console.log('player2 activated');
               //start count down
			  			$("#countdownboard").show();
			  			startCountDown();
			  			$("#status").hide(); 			
			  			$("#playboard").show();
              return true;
          }
        })    
};



Template.player1.onRendered(function() {
		$("#resultboard").hide();
  	//update status of player1 to active
  	Meteor.call("updatePlayerStatus", 1, 0);
  	//observe the status of player2
  	var p2active = observePlayer2Activated();
    p2active=true;
  	
  	var player2 = Players.find({'player_id': 2});
    console.log(player2.status);
  	//once player2 status got changed to activate
  	//show playboard on both side and start countdown

  	if (!p2active){ 	//not activate
        console.log('player2 is not activated');	
  			//show waiting page	
  	  	$("#status").show();
  			$("#playboard").hide();
  			$("#countdownboard").hide();
  	}
  	else{ //is activate
        console.log('player2 is activated');
         //start count down
        $("#countdownboard").show();
        startCountDown();
        $("#status").hide();      
        $("#playboard").show();

  	}

});

Template.player1.helpers({
	'observePlayer2': function(){
        Players.find({player_id:2}).observe({
          changed: function() {
             console.log('player2 changed');
              return "player2 has changed";
          }
        })    
  },

});



Template.player1.events({

	'submit .choice': function(event, template) {
    event.preventDefault();
    var choice = template.find('input:radio[name=choice]:checked');

    console.log("got choice "+choice.value);
    Meteor.call("updatePlayerChoice", 1, choice.value);


  },

  
});



// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Players.find().count() === 0) {
    var data = [
      {playerId: 1,
       chocie: 0,
       status: 0
      },
      {playerId: 2,
       chocie: 0,
       status: 0
      },
      
    ];

    _.each(data, function(player) {      
        Players.insert({
                      player_id: player.playerId,
                      choice: player.choice,
                      status: player.status,
                      updatedAt: new Date()});
    });
  }
});

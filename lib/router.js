Router.route('/player1', {
	template: 'player1'
});

Router.route('/player2', {
	template: 'player2'
});

Router.route('/player/:_id', {
	template: 'player'

});

Router.route('/', {
  template: 'home'
});


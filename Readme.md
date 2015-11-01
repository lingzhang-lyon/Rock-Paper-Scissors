# Rock Paper Scissors Game

## Logic Design

homepage start game as palyer 1

update status of player1 to active

check the status of player2, 
  if p2 not active, show waiting
  if active, show playerboard for player1
  
  start count down,  // how to make the countdown at the same time?
  end of count down
    check the choice of both players
      if both have choice, calcu with rules
      if just one have choice, this one win
      if both don't have choice, tie
  restart count down
# Rock Paper Scissors Game

## Logic Design 1

homepage start game as palyer 1

update status of player1 to active(1)

check the status of player2, 
  if p2 inactive, 
  	show waiting
  if p2 already active, 

	  show playerboard for player1

	  start count down

	  end of count down
	    check the choice of both players
	      if both have choice, calcu with rules
	      if just one have choice, this one win
	      if both don't have choice, tie
	  restart count down

if close page
	set status of player1 to inactive(0)	  

## Logic Design 2

homepage start game as palyer 1

p1 submit choice, set status to active 

check p2 status
if p2 active
	show result
	then set p1, p2 both to inactive
	
if p2 inactive
	show waiting and listen to p2 status
	until p2 status changed, show result
	then set p1,p2 both to inactive


# Rock Paper Scissors Game

## Logic Design 

1) homepage start game as palyer 1

2) p1 submit choice, set status to active 

3) check p2, p1 status

if p2 p1 both active
	
	show result
	
	then set p1, p2 both to inactive
	
if not
	
	show waiting and listen to p2 status
	
	until p2 changed, check p1, p2 status, if both active, show result
	
	then set p1,p2 both to inactive


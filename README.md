This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
##Scripts used in project
In the project directory, you can run:

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

# Welcome to React Bowling
The local bowling alley needs an app to keep a score on their bowling games. 
You figure this could be your big break into the world of Bowling Software!

You show up at the Bowling alley and see that they have an initial design up for their app, 
but with no functionality :O

Luckily for you they have an extensive list of requirements ready:

##Requirements
* `rolling` Clicking any of the turquiose buttons will add the roll to the ScoreBoard

* `game score` The game consists of 10 frames.  In each frame the player has
               two opportunities to knock down 10 pins.  The score for the frame is the total
               number of pins knocked down, plus bonuses for strikes and spares.
               
* `spare` A spare is when the player knocks down all 10 pins in two tries.  The bonus for
          that frame is the number of pins knocked down by the next roll.  So in frame 3
          above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
          number of pins knocked down on the next roll.)
          
* `strike` A strike is when the player knocks down all 10 pins on his first try.  The bonus
           for that frame is the value of the next two balls rolled.
           
* `10th frame` In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
               balls to complete the frame.  However no more than three balls can be rolled in
               tenth frame.

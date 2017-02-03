This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
It's created with the purpose of practicing Test-driven development in React with Jest+Enzyme.
Inspired by Uncle Bob's famous [Bowling Game Kata](http://butunclebob.com/files/downloads/Bowling%20Game%20Kata.ppt)

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

##Scripts used in project
In the project directory, you can run:

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

##Tools for testing
The project uses two frameworks to allow Test-driven development
* `jest` Painless javascript testing [api documentation](https://facebook.github.io/jest/docs/api.html)
* `enzyme` Javascript Testing Utilities for React [api documentation](http://airbnb.io/enzyme/)

Jest is the default test runner with `create-react-app`. Combined with Enzyme it's a powerful toolbox to create unit tests for React Components:

```js
it('App should render a ScoreBoard component', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find(ScoreBoard)).toBeDefined();
});

it('ScoreBoard should render ten Frame components', () => {
  var wrapper = shallow(<ScoreBoard/>)
  expect(wrapper.find(Frame).length).toEqual(10);
});
```
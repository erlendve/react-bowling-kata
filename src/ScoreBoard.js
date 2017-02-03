import React, {PropTypes} from 'react';
import Frame from './Frame';

const ScoreBoard = ({rolls}) => {
  const frames = [];
  let sum = 0;
  let i = 0;

  let isTen = function (pins) {
    return pins === 10;
  };

  for (let frame = 0; frame < 10; frame++) {
    let rollOne = rolls[i];
    let rollTwo = isTen(rollOne) ? 0 : rolls[i+1];

    let frameScore = rollOne+rollTwo;

    if(isTen(rollOne))
      frameScore += rolls[i+1] + rolls[i+2];
    else if (isTen(frameScore))
      frameScore += rolls[i+2];

    sum += frameScore ? frameScore : 0;
    i += isTen(rollOne) ? 1 : 2;

    frames.push(<Frame key={i} rollOne={rollOne} rollTwo={rollTwo} score={frameScore ? sum: null}/>)
  }

  return (
    <div className="scoreboard">
      <div className="frames">{frames}</div>
      <h1>Game Score = {sum}</h1>
    </div>
  );
};

ScoreBoard.propTypes = {
  rolls: PropTypes.array.isRequired
};

export default ScoreBoard;
import React from 'react';
import Frame from './Frame';


const ScoreBoard = ({rolls}) => {
  const frames=()=>{
    let array = [];
    let sum= 0;

    for (let frame=0; frame<10 ; frame++){
      let counterRolle=frame*2;
      if (frame*2<rolls.length) {

        sum += rolls[frame*2]
      }
      if (frame*2+1<rolls.length) {
        sum += rolls[frame*2 + 1];
      }
      array.push(<Frame key={frame} rollOne={rolls[counterRolle]} rollTwo={rolls[counterRolle + 1]}
                        score={frame < rolls.length/2 ? sum : null}/>);
      counterRolle+=1
    }

    return array;
  };

  return (
    <div className="scoreboard">
      <div className="frames">
        {frames()}
      </div>
      <h1>Game Score = ~</h1>
    </div>
  );
};

export default ScoreBoard;
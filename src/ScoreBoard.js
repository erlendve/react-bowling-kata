import React from 'react';
import Frame from './Frame';

const ScoreBoard = () => {
  return (
    <div className="scoreboard">
      <div className="frames">
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
      </div>
      <h1>Game Score = 133</h1>
    </div>
  );
};

export default ScoreBoard;
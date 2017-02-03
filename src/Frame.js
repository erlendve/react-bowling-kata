import React, {PropTypes} from 'react';

const Frame = ({rollOne, rollTwo, score}) => {
  const lastRoll = () => {
    if (rollOne === 10) {
      return <span className="strike"/>
    } else if ((rollOne + rollTwo) === 10) {
      return <span className="spare"/>
    }

    return <span>{rollTwo === 0 ? "-" : rollTwo}</span>;
  };

  return (
  <div className="frame">
    <span>{rollOne === 0 ? "-" : rollOne}</span>
    {lastRoll()}
    <p>{score ? score : ""}</p>
  </div>
  );
};

Frame.propTypes = {
  rollOne: PropTypes.number,
  rollTwo: PropTypes.number,
  score: PropTypes.number
}

export default Frame;
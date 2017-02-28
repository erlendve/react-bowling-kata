import React, {PropTypes} from 'react';

const Frame = ({score, rollOne, rollTwo}) => {
  return (
  <div className="frame">
    <span>{rollOne}</span>
    <span>{rollTwo}</span>
    <p>{score !== null ? score : ""}</p>
  </div>
  );
};

Frame.propTypes = {
  score: PropTypes.number,
  rollOne: PropTypes.number,
  rollTwo: PropTypes.number
};

export default Frame;
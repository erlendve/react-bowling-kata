import React, {PropTypes} from 'react';

const Roll = ({number,onClick}) => (
  <button
    type="button"  onClick={onClick}>
    {number}
  </button>
);

Roll.propTypes = {
  number: PropTypes.number.isRequired,
  onClick:PropTypes.func.isRequired
};

export default Roll;
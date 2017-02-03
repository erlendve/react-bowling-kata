import React, {PropTypes} from 'react';

const Roll = ({number}) => (
  <button
    type="button">
    {number}
  </button>
);

Roll.propTypes = {
  number: PropTypes.number.isRequired
};

export default Roll;
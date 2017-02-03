import React, {PropTypes} from 'react';

const Roll = ({number, onClick, deActivated}) => (
  <button
    type="button"
    disabled={deActivated}
    onClick={() => {
      onClick(number)
    }}>
    {number}
  </button>
);

Roll.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  deActivated: PropTypes.bool
};

export default Roll;
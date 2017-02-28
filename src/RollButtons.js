import React, {PropTypes} from 'react';
import Roll from './Roll';


const RollButtons = ({onClick}) =>  {
  return (<div className="rolls">
    <Roll number={0} onClick={onClick}/>
    <Roll number={1} onClick={onClick}/>
    <Roll number={2} onClick={onClick}/>
    <Roll number={3} onClick={onClick}/>
    <Roll number={4} onClick={onClick}/>
    <Roll number={5} onClick={onClick}/>
    <Roll number={6} onClick={onClick}/>
    <Roll number={7} onClick={onClick}/>
    <Roll number={8} onClick={onClick}/>
    <Roll number={9} onClick={onClick}/>
    <Roll number={10} onClick={onClick}/>
  </div>);
};


RollButtons.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default RollButtons;
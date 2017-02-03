import React from 'react';
import Roll from './Roll';

const RollButtons = () =>  {
  return (<div className="rolls">
    <Roll number={0} />
    <Roll number={2} />
    <Roll number={1} />
    <Roll number={3} />
    <Roll number={4} />
    <Roll number={5} />
    <Roll number={6} />
    <Roll number={8} />
    <Roll number={9} />
    <Roll number={10} />
  </div>);
};

export default RollButtons;
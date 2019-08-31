import React from 'react';

export const HowToUsePackLayouts = props => {
  const display = props.show ? 'initial' : 'none';
  return (
    <div style={{ textAlign: 'left', display: display }}>
      <h3>How To Use</h3>
      <p> * Layout packs for each column</p>
      <p> * Stack cards on each pack for each row</p>
      <p> * Fill in cards for last row on Commons with a random selection</p>
    </div>
  );
};

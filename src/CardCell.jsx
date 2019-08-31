import React from 'react';

import { CardColors } from './CardColors';
import { CardTypes } from './CardTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCardColorIdentity, getPackCount } from './cardUtilities';

export const CardCell = props => {
  const getCardStyle = () => ({
    gridColumn: props.index % getPackCount(props.code),
    gridRow: Math.floor((props.index - 1) / getPackCount(props.code)) + 1,
    background: CardColors[getCardColorIdentity(props.card)].background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  });

  const getCardIconClass = type => {
    if (!CardTypes.hasOwnProperty(type)) {
      return <FontAwesomeIcon icon="question-circle" title={type} />;
    }

    const className = `mi ${CardTypes[type].mtgFont} mi-lg`;
    return <i className={className} title={type} />;
  };

  return (
    <div
      style={getCardStyle(props.card, props.index)}
      key={`grid-${props.card.nameHash}-${props.index}`}
    >
      {props.card.types.map(type => (
        <div
          key={`card-types-${type}-${props.card.nameHash}-${props.index}`}
          style={{ fontSize: '3rem' }}
        >
          {getCardIconClass(type)}
        </div>
      ))}
    </div>
  );
};

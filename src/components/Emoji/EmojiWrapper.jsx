import React from 'react';

const EmojiWrapper = ({ className, symbol, label }) => {
  return (
    <>
      <span
        className={className}
        aria-hidden={label ? 'false' : 'true'}
        aria-label={label ? label : ''}
        role='img'
      >
        {symbol}
      </span>
    </>
  );
};

export default EmojiWrapper;

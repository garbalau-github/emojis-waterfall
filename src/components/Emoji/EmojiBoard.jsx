import React, { useState, useEffect } from 'react';
import Emoji from './Emoji';
import EmojiButton from './EmojiButton';
import EmojiBubble from './EmojiBubble';
import EmojiBoardWrapper from './EmojiBoardWrapper';
import AutoExpire from '../AutoExpire';
import { v4 as uuidv4 } from 'uuid';

const EmojiBoard = () => {
  const emojis = [
    {
      label: 'Thumbs Up',
      symbol: '👍',
    },
    {
      label: 'Mind Blown',
      symbol: '🤯',
    },
    {
      label: 'Heart Eyes',
      symbol: '😍',
    },
    {
      label: 'Cat',
      symbol: '🐱',
    },
    {
      label: 'Smiley Poo',
      symbol: '💩',
    },
  ];

  const [emojiQueue, setEmojiQueue] = useState([]);

  useEffect(() => {
    console.log(emojiQueue);
  }, [emojiQueue]);

  const randomNumber = (max, min) => {
    // We want random number between 2 values (Stackoverflow)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomPosOrNeg = (max, min) => {
    // Get random and randomly define it as negative or positive
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumber *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    return randomNumber;
  };

  const handleEmojiClick = (label, symbol) => {
    setEmojiQueue([
      ...emojiQueue,
      {
        label,
        symbol,
        size: randomNumber(3, 2), // Rem values
        left: randomNumber(100, 0),
        one: randomPosOrNeg(200, 50),
        two: randomPosOrNeg(200, 50),
        id: uuidv4(), // Unique ID
      },
    ]);
  };

  const handleEmojiKeydown = (e, label, symbol) => {
    if (e.key === 'Enter') {
      handleEmojiClick(label, symbol);
    }
  };

  return (
    <>
      <EmojiBoardWrapper>
        {emojis.map(({ label, symbol }, index) => (
          <EmojiButton
            key={index}
            onKeyDown={(e) => handleEmojiKeydown(e, label, symbol)}
            onClick={() => handleEmojiClick(label, symbol)}
          >
            <Emoji label={label} symbol={symbol} size='3rem' />
          </EmojiButton>
        ))}
      </EmojiBoardWrapper>
      <>
        {emojiQueue.map(({ id, label, symbol, size, left, one, two }) => (
          // Wrapping arround content we want to expire
          <AutoExpire>
            <EmojiBubble
              key={id}
              label={label}
              symbol={symbol}
              size={size}
              left={left}
              one={one}
              two={two}
            />
          </AutoExpire>
        ))}
      </>
    </>
  );
};

export default EmojiBoard;

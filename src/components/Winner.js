import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Winner() {
  const {
    state: { whoIsWinner },
    dispatch,
  } = useContext(GameContext);

  if (!whoIsWinner) return <></>;

  function handleClick() {
    dispatch({ type: 'RESET' });
  }

  return (
    <div className="winner">
      <p>{whoIsWinner} ganhou!!!</p>
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}

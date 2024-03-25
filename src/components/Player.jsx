import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enterdPlayerName, setPlayerName] = useState(null);

  function handelClick() {
    setPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ?? "unkown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}

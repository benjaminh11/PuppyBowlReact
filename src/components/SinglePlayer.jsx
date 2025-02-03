import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayers] = useState(null);
  useEffect(() => {
    fetch(
      ` https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPlayers(json.data.player);
      })
      .catch((err) => console.err(err));
  }, [id]);

  return (
    <div className="singleCard">
      <h2>Details for {player?.name}</h2>
      <p>Name: {player?.name}</p>
      <p>Breed: {player?.breed}</p>
      <img src={player?.imageUrl} alt="picure of ${player.name}" />
    </div>
  );
}

export default SinglePlayer;

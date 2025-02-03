import React, { useEffect, useState } from "react";
import "../App.css";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(
      " https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPlayers(json.data.players);
      })
      .catch((err) => console.err(err));
  }, []);

  return (
    <div className="players-grid">
      {players.map((player) => {
        return (
          <div className="allCards">
            <h4>{player.name}</h4>
            <h4>{player.breed}</h4>
            <img src={player.imageUrl} alt="picure of ${player.name}" />
            <button>View Details</button>
          </div>
        );
      })}
    </div>
  );
}

export default AllPlayers;

import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPlayers(json.data.players);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const handleClick = (id) => {
    navigate(`/singleplayer/${id}`);
  };

  const deletePlayer = async (id) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete player");
      }
      setPlayers(players.filter((player) => player.id !== id));
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <>
      <NewPlayerForm onAddPlayer={handleAddPlayer} />
      <div className="players-grid">
        {players.map((player) => {
          return (
            <div key={player.id} className="allCards">
              <h4>{player.name}</h4>
              <h4>{player.breed}</h4>
              <img src={player.imageUrl} alt={`Picture of ${player.name}`} />
              <button
                onClick={() => {
                  handleClick(player.id);
                }}
              >
                View Details
              </button>
              <button
                onClick={() => {
                  deletePlayer(player.id);
                }}
              >
                Delete Player
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllPlayers;

// import React, { useEffect, useState } from "react";
// import "../App.css";
// import { useNavigate } from "react-router-dom";
// import NewPlayerForm from "./NewPlayerForm";

// function AllPlayers() {
//   const [players, setPlayers] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetch(
//       " https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players"
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setPlayers(json.data.players);
//       })
//       .catch((err) => console.err(err));
//   }, []);

//   const handleClick = (id) => {
//     navigate(`/singleplayer/${id}`);
//   };

//   const deletePlayer = (id) => {
//     try {
//       fetch(
//         `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <NewPlayerForm />
//       <div className="players-grid">
//         {players.map((player) => {
//           return (
//             <div key={player.id} className="allCards">
//               <h4>{player.name}</h4>
//               <h4>{player.breed}</h4>
//               <img src={player.imageUrl} alt="picure of ${player.name}" />
//               <button
//                 onClick={() => {
//                   handleClick(player.id);
//                 }}
//               >
//                 View Details
//               </button>
//               <button
//                 onClick={() => {
//                   deletePlayer(player.id);
//                 }}
//               >
//                 Delete Player
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default AllPlayers;

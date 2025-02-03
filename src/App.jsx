import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>PuppyBowl</h1>
        <NavBar />
        <Routes>
          <Route path="/newplayerform" element={<NewPlayerForm />} />
          <Route path="/" element={<AllPlayers />} />
          <Route path="/singleplayer/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import AllPlayers from "./components/AllPlayers";
// import NavBar from "./components/NavBar";
// import NewPlayerForm from "./components/NewPlayerForm";
// import SinglePlayer from "./components/SinglePlayer";

// function App() {
//   return (
//     <>
//       PuppyBowl
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/newplayerform" element={<NewPlayerForm />} />
//           <Route path="/" element={<AllPlayers />} />
//           <Route path="/singleplayer/:id" element={<SinglePlayer />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

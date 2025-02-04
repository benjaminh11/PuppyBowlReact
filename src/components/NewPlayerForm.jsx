import React from "react";

function NewPlayerForm({ onAddPlayer }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            breed: formData.get("breed"),
            imageUrl: formData.get("imageUrl"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error adding player");
      }

      const result = await response.json();
      console.log("Player added successfully:", result.data.newPlayer);

      onAddPlayer(result.data.newPlayer);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>

      <label>
        Breed:
        <input type="text" name="breed" required />
      </label>

      <label>
        Image URL:
        <input type="text" name="imageUrl" required />
      </label>

      <button type="submit">Add Player</button>
    </form>
  );
}

export default NewPlayerForm;

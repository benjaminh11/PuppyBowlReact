const cohortName = "2412-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    const json = await response.json();
    return json.data.players; // Return players instead of modifying state
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
    return [];
  }
};

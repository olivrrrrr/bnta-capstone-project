import { ReactChild, useState, useEffect } from "react";
import { getAllPlayers } from "../adaptors/BackendAdapter";
import Table from "react-bootstrap/Table";
import "./PlayerSelection.css";

function PlayerSelector({ addPlayerToPitch }) {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPlayers().then((resp) => {
      setPlayers(resp);
      setFilteredPlayers(resp);
    });
  }, []);

  //   console.log(players);

  //   const handleType = (e) =>{
  //       setFilteredPlayers(e.target.value)
  //   }

  //   const searchPlayer = (players) => {
  //     return players.filter(
  //       (player) =>
  //         player.name.toLowerCase().indexOf(filteredPlayers.toLowerCase().trim()) > -1
  //     );
  //   };

  const onSearchChange = (event) => {
    //console.log(event.target.value);
    setSearchTerm(event.target.value);
    let targetName = event.target.value.toLowerCase().replace(/\s+/g, "");
    //const filteredUsers = this.state.myUsers.filter(user => user.name.toLowerCase().includes(targetName)
    let temp = players;
    if (targetName === "") {
      setFilteredPlayers(temp);
    } else if (targetName === ("attacker")) {
      temp = players.filter((player) =>
        player.position.toLowerCase().replace(/\s+/g, "").includes(targetName)
      );
      setFilteredPlayers(temp);
    } else if (targetName === "midfielder") {
      temp = players.filter((player) =>
        player.position.toLowerCase().replace(/\s+/g, "").includes(targetName)
      );
      setFilteredPlayers(temp);
    } else if (targetName === "defender") {
      temp = players.filter((player) =>
        player.position.toLowerCase().replace(/\s+/g, "").includes(targetName)
      );
      setFilteredPlayers(temp);
    } else if (targetName === "goalkeeper") {
      temp = players.filter((player) =>
        player.position.toLowerCase().replace(/\s+/g, "").includes(targetName)
      );
      setFilteredPlayers(temp);
    } else {
      temp = players.filter((player) =>
        player.leagueName.toLowerCase().replace(/\s+/g, "").includes(targetName)
      );
      if (temp.length > 0) {
        setFilteredPlayers(temp);
      } else {
        temp = players.filter((player) =>
          player.teamName.toLowerCase().replace(/\s+/g, "").includes(targetName)
        );
        if (temp.length > 0) {
          setFilteredPlayers(temp);
        } else {
          temp = players.filter((player) =>
          player.name.toLowerCase().replace(/\s+/g, "").includes(targetName))
          setFilteredPlayers(temp)
        }
      }
    }
  };

  return players ? (
    <div>
      <input
        onChange={onSearchChange}
        style={{ position: "absolute", top: "10em", right: "56em" }}
        type="search"
      />
      <div class="container">
        {/* <input type="search"/> */}
        <div class="row table-box">
          <table class="col-xs-7 table-bordered table-striped table-condensed table-fixed table sticky">
            <thead>
              <tr>
                <th class="col">Player</th>
                <th class="col">Player Name</th>
                <th class="col">Position</th>
                <th class="col">League</th>
                <th class="col">Team</th>
                <th class="col">Total Points</th>
                {/* <th class="col">App</th>
                        <th class="col">Goals</th>
                        <th class="col">Assists</th>
                        <th class="col">Conceded</th>
                        <th class="col">Yellows</th>
                        <th class="col">Reds</th> */}
              </tr>
            </thead>
            {/* <tbody> */}
            {filteredPlayers.map((player) => (
              <tr class="col">
                <img style={{ width: "5.1em" }} src={player.photo} />
                <td class="col">{player.name}</td>
                <td class="col">{player.position}</td>
                <td class="col">{player.leagueName}</td>
                <td class="col">{player.teamName}</td>
                <td class="col">{player.totalPoints}</td>
                {/* <td class="col">{player.appearances}</td>
                   <td class="col">{player.goals}</td>
                   <td class="col">{player.assists}</td>
                   <td class="col">{player.conceded}</td>
                   <td class="col">{player.yellows}</td>
                   <td class="col">{player.reds}</td> */}
                <td class="col">
                  <button
                    onClick={() => {
                      addPlayerToPitch(player);
                    }}
                  >
                    SELECT PLAYER
                  </button>
                </td>
              </tr>
            ))}
            {/* </tbody> */}
          </table>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default PlayerSelector;

{
  /* <Table  striped bordered hover responsive>
<thead>
    <tr>
        <th>Rank</th>
        <th>Username</th>
        <th>Team Name</th>
        <th>Points</th>
    </tr>
</thead>
<tbody>
{leaderboard.map((user, i) => 
    <tr>
        <td>{i+1}</td>
        <td>{user.username}</td>
        <td>{user.teamName}</td>
        <td>{user.totalPoints}</td>
    </tr>
)}
</tbody>
</Table> */
}

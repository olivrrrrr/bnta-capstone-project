import { ReactChild, useState, useEffect , useContext} from "react";
import { getAllPlayers } from "../adaptors/BackendAdapter";
import Table from "react-bootstrap/Table"
import "./PlayerSelection.css";
import {ThemeContext} from '../contexts/ThemeContext'
import { Container } from "react-bootstrap";

function PlayerSelector({ addPlayerToPitch }) {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
      <input className={`player-search ${darkMode ? "search-dark" : "search-light"}`}
        onChange={onSearchChange}
        style={{ position: "relative", top: "10em", right: "56em" }}
        type="search"
        placeholder="search"
      />
      <div className={`container ${darkMode? "container-dark" : "container-light" }`}>
        {/* <input type="search"/> */}
        <div className="row table-box">
          <table className={`col-xs-7 table-bordered table-striped table-condensed table-fixed table sticky" ${darkMode? "container-dark" : "container-light" }`}>
            <thead>
              <tr>
                <th className="col">Player</th>
                <th className="col">Player Name</th>
                <th className="col">Position</th>
                <th className="col">League</th>
                <th className="col">Team</th>
                <th className="col">Total Points</th>
                {/* <th className="col">App</th>
                        <th className="col">Goals</th>
                        <th className="col">Assists</th>
                        <th className="col">Conceded</th>
                        <th className="col">Yellows</th>
                        <th className="col">Reds</th> */}
              </tr>
            </thead>
            {/* <tbody> */}
            {filteredPlayers.map((player) => (
              <tr className="col">
                <img style={{ width: "5.1em" }} src={player.photo} />
                <td className="col">{player.name}</td>
                <td className="col">{player.position}</td>
                <td className="col">{player.leagueName}</td>
                <td className="col">{player.teamName}</td>
                <td className="col">{player.totalPoints}</td>
                {/* <td className="col">{player.appearances}</td>
                   <td className="col">{player.goals}</td>
                   <td className="col">{player.assists}</td>
                   <td className="col">{player.conceded}</td>
                   <td className="col">{player.yellows}</td>
                   <td className="col">{player.reds}</td> */}
                <td className="col">
                  <button className={`select-button ${darkMode ? "button-dark" : "button-light"}`}
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

// {
//    <Table  striped bordered hover responsive>
// <thead>
//     <tr>
//         <th>Rank</th>
//         <th>Username</th>
//         <th>Team Name</th>
//         <th>Points</th>
//     </tr>
// </thead>
// <tbody>
// {leaderboard.map((user, i) => 
//     <tr>
//         <td>{i+1}</td>
//         <td>{user.username}</td>
//         <td>{user.teamName}</td>
//         <td>{user.totalPoints}</td>
//     </tr>
// )}
// </tbody>
// </Table> 
// }

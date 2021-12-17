import Player from "../classes/Player"
import axios from 'axios';

// constructor(id, name, photo, teamName, appearances, position, goals, assists, yellows, reds, conceded,
//     totalPoints, weeklyPoints, leagueName) 

const headers = {
    "x-rapidapi-host" :
    "x-rapidapi-key" :
}


function fetchPlayerData(league, page) {

    const query = {
        "league" : league,
        "page"   : page,
    }

    let playerList = [];

    return (
        axios.get(`https://api-football-v1.p.rapidapi.com/v3/players?league=${league}&season=2021&page=${page}`, {
            headers: {
                "x-rapidapi-host": 
                "x-rapidapi-key" : 
            }
          })
            .then(

                //Map through data
                //for each player, create new instance of the player and push to player list/array
                //Return list of players (post request in adminPage)
                result => {
                    //console.log(result.data.response)
                    result.data.response.forEach(player => {
                        const playerObject = new Player(player.player.id,
                            player.player.name,
                            player.player.photo,
                            player.statistics[0].team.name,
                            player.statistics[0].games.appearances,
                            player.statistics[0].games.position,
                            player.statistics[0].goals.total,
                            player.statistics[0].goals.assists,
                            player.statistics[0].cards.yellow,
                            player.statistics[0].cards.red + player.statistics[0].cards.yellowred,
                            player.statistics[0].goals.conceded,
                            player.statistics[0].league.name,
                        );
                        playerList.push(playerObject);
                    });
                    return playerList;
                }
            )
    )

}

export {fetchPlayerData};

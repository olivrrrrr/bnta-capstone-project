import Player from "../classes/Player"

// constructor(id, name, photo, teamName, appearances, position, goals, assists, yellows, reds, conceded,
//     totalPoints, weeklyPoints, leagueName) 


function fetchPlayerData() {

    let playerList = [];

    return (
        axios.get("https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2021&page=2")
            .then(
                //Map through data
                //for each player, create new instance of the player and push to player list/array
                //Return list of players (post request in adminPage)
                result => {
                    result.response.forEach(player => {
                        const playerObject = new Player(player.player.id,
                            player.player.name,
                            player.player.photo,
                            player.statistics[0].team.name,
                            player.statistics[2].games.appearances,
                            player.statistics[2].games.position,
                            player.statistics[3].goals.total,
                            player.statistics[3].goals.assists,
                            player.statistics[12].cards.yellow,
                            player.statistics[12].cards.red + player.statistics[12].cards.yellowred,
                            player.statistics[3].goals.conceded,
                            player.statistics[1].league.name,
                        );
                        playerList.push(playerObject);
                    });
                    return playerList;
                }
            )
    )

}

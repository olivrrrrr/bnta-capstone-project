

function fetchPlayerData () {

    return (
        axios.get("https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2021&page=2")
        .then(
            //Map through data
            //for each player, create new instance of the player and push to player list/array
            //Return list of players (post request in adminPage)
            

        )
    )

}

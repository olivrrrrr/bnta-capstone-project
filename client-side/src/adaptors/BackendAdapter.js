import axios from 'axios'

const postAllPlayers = (players) => {
    return(
        axios.post("http://localhost:8080/api/v1/players/addMany", players)
        .catch(e => {
            console.log(e)
        })
    )
}


export {postAllPlayers}
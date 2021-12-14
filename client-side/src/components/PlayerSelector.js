import {ReactChild, useState, useEffect} from 'react'
import {getAllPlayers} from '../adaptors/BackendAdapter'; 
import Table from 'react-bootstrap/Table'; 
import './PlayerSelection.css'

function PlayerSelector() {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        getAllPlayers().then(resp=> setPlayers(resp)) 
    }, [])

    console.log(players)


    return (
    
        <div class="container">
            <div class="row table-box">
            { players ? 
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
                {players.map(player=>
                 <tr class="col">   
                   <img style={{width:"5.1em"}} src={player.photo}/>
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
                   <td class="col"><button>SELECT PLAYER</button></td>
                </tr>
                )}
                </table>

                :
                <p>Loading...</p>
            }
            </div>
        </div>
        
    )
}

export default PlayerSelector


{/* <Table  striped bordered hover responsive>
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
</Table> */}
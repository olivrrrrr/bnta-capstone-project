import {React, useEffect,useState} from 'react'; 
import { getLeaderboard } from '../adaptors/BackendAdapter';

function Leaderboard() {
   

   const [leaderboard, setLeaderboard] = useState([]) 

   useEffect(()=>{
        getLeaderboard().then(resp=> setLeaderboard(resp)) 
   },[])

    // console.log(leaderboard)
   
    return (
        
        leaderboard ?

        <div>
            {leaderboard.map(user =>{
                <div>
                    <p>hello</p>
                    <p>{user.username}</p>
                    <p>{user.teamName}</p>
                    <p>{user.totalPoints}</p>
                </div>
            })}
        </div>

    : 

    <p>Loading...</p>
    )
}

export default Leaderboard

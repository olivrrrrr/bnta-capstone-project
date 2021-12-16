import {React, useEffect,useState} from 'react'; 
import { getLeaderboard } from '../adaptors/BackendAdapter';
import './Leaderboard.css'
import Table from 'react-bootstrap/Table'
import Navbar from '../components/Navbar'


function Leaderboard() {
   

   const [leaderboard, setLeaderboard] = useState(['']) 

   useEffect(()=>{
        getLeaderboard().then(resp=> setLeaderboard(resp)) 
   },[])

     console.log(leaderboard)
   
    return (
        
        leaderboard ?
        <section>
        <Navbar/>
        <div style={{marginTop:"7em"}}>
               <Table  striped bordered hover responsive>
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
            </Table>
        </div>
        </section> 

    : 

    <p>Loading...</p>
    )
}

export default Leaderboard

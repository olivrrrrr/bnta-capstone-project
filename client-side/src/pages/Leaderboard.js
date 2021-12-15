import {React, useEffect,useState, useContext} from 'react'; 
import { getLeaderboard } from '../adaptors/BackendAdapter';
import './Leaderboard.css'
import Table from 'react-bootstrap/Table'
import {ThemeContext} from '../contexts/ThemeContext'
import { Tab } from 'react-bootstrap';


function Leaderboard() {
   

   const [leaderboard, setLeaderboard] = useState(['']) 

   useEffect(()=>{
        getLeaderboard().then(resp=> setLeaderboard(resp)) 
   },[])

     console.log(leaderboard)

     const theme = useContext(ThemeContext);
     const darkMode = theme.state.darkMode;
   
    return (
        
        leaderboard ?

        <div style={{marginTop:"7em"}}>
               <Table  striped bordered hover responsive className={`${darkMode? "table-dark" : "table-light"}`}>
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

    : 

    <p>Loading...</p>
    )
}

export default Leaderboard

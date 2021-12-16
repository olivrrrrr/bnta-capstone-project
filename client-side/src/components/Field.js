import { React, useState, useEffect, useContext } from 'react'
import field from '../assets/pitch.png'
import './Field.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { getUser } from '../adaptors/BackendAdapter';
import {ThemeContext} from '../contexts/ThemeContext'

function Field({ pitch, removePlayer, saveTeam, userId}) {

    // const [players, setPlayers] = useState([]);

    // useEffect(()=>{

    //     const pitch = {
    //         FWD: [null,null], 
    //         MID: [null, null, null, null, null], 
    //         DEF: [null,null,null, null], 
    //         GK:  [null],
    //         Clubs: [],
    //         Leagues: [],
    //     }

    // },[])

    //console.log(pitch)

    const [user, setUser] = useState(null) 
    useEffect(()=>{
        getUser(userId)
        .then(response => setUser(response.data))
    })

    //console.log(user);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (

        <div style={{marginLeft:"-50em"}}>
            {user ?
            <div style={{marginTop: "2em"}} className={`${darkMode ? "user-info-dark" : "user-info-light"}`}>
                <h2>{user.teamName}</h2>
                <p>Total Points: {user.totalPoints}</p>
                <p>Weekly Points: {user.weeklyPoints}</p>
            </div>
            :
                <></>
            }
            <img style={{width: "47em", marginTop:"1em"}} src={field} />
            {Object.entries(pitch.position)
                .map(
                    ([pos, val], i) =>
                    <div key={i}
                        style={{ display: "flex", alignItems: "center" , justifyContent: "space-between", height: "120px", marginTop: "7em", width: "25%", position: "relative", top: 0, alignItems: "center", margin: "0 auto" }}
                    >
                        {
                            pitch.position[pos]
                                .map(
                                    (player, i) =>

                                        <div key={i} style={{fontFamily: "Gill Sans", width: "100%", textAlign: "center", position: "relative", bottom: "540px", marginRight:"-1em", margin: "auto", marginTop: "2em"}}>
                                            <div class="card" style={{backgroundColor: "#EEBC1D", borderRadius: "10px", borderWidth: "2px", boxShadow: "1px 3px black"}}>
                                            {/* <div class="card"> style={{height: "7em", width: "5em", position: "relative", marginLeft: "2em", borderRadius: "10px", borderWidth: "2px", boxShadow: "1px 3px black", backgroundColor: "#EEBC1D", color: "white"}}> */}
                                            <div>{player ? <img style={{width:"3em", height:"auto", marginLeft: "0em"}} src={player.photo}/> : ""}</div>
                                            <div class="position">{pos}</div>
                                            <div class="name">{player ? player.name : "ADD"}</div>
                                            <div class="totalPoints">{player ? player.totalPoints : ""}</div>
                                            <button class="remove-player" onClick={() => removePlayer(player)}><AiFillCloseCircle /></button>
                                        </div>
                                        </div>
                                )
                        }
                    </div>
                )}
                <button onClick={saveTeam} style={{position: "relative", bottom: "50em", borderRadius: "2px", border: "none", border: "1px solid black", right: "19.5em", padding: "1px"}}>Save Team</button>
        </div>

    
    )

    
}

export default Field

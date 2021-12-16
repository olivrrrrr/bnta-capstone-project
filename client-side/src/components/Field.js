import { React, useState, useEffect } from 'react'
import field from '../assets/pitch.png'
import './Field.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Field({ pitch, removePlayer, saveTeam}) {

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


    return (

        <div style={{marginLeft:"-50em"}}>
            <img style={{width: "47em", marginTop:"4em"}} src={field} />
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

                                        <div key={i} style={{fontFamily: "Gill Sans", width: "100%", textAlign: "center", position: "relative", bottom: "510px", marginRight:"-1em", margin: "auto", marginTop: "2em"}}>
                                            <div class="card" style={{backgroundColor: "#EEBC1D", borderRadius: "10px", borderWidth: "2px", boxShadow: "1px 3px black"}}>
                                            {/* <div class="card"> style={{height: "7em", width: "5em", position: "relative", marginLeft: "2em", borderRadius: "10px", borderWidth: "2px", boxShadow: "1px 3px black", backgroundColor: "#EEBC1D", color: "white"}}> */}
                                            <div>{player ? <img style={{width:"3em", height:"auto", marginLeft: "0em"}} src={player.photo}/> : ""}</div>
                                            <div class="position">{pos}</div>
                                            <div class="name">{player ? player.name : "ADD"}</div>
                                            <div class="weeklyPoints">{player ? player.weeklyPoints : ""}</div>
                                            <button class="remove-player" onClick={() => removePlayer(player)}><AiFillCloseCircle /></button>
                                        </div>
                                        </div>
                                )
                        }
                    </div>
                )}
                <button onClick={saveTeam} style={{position: "relative", bottom: "50em", borderRadius: "8px", border: "none", border: "1px solid black", right: "19.5em"}}>Save Team</button>
        </div>

    )

    
}

export default Field

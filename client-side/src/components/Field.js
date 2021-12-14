import { React, useState, useEffect } from 'react'
import field from '../assets/pitch.png'
import './Field.css';

function Field({ pitch }) {

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
            <img style={{width: "32em", marginTop:"2em"}} src={field} />
            {Object.entries(pitch.position)
                .map(
                    ([pos, val], i) =>
                    <div key={i}
                        style={{ display: "flex", justifyContent: "space-between", height: "120px", marginTop: "7em", width: "25%", position: "relative", top: 0, alignItems: "center", margin: "0 auto" }}
                    >
                        {
                            pitch.position[pos]
                                .map(
                                    (player, i) =>
                                        <div key={i} style={{ fontFamily: "Gill Sans", width: "100%", textAlign: "center", position: "relative", bottom: "525px", marginRight:"-1em", margin: "0 auto"}}>
                                            <div class="card" style={{height: "7em", width: "5em", position: "relative", marginLeft: "2em", borderRadius: "10px", borderWidth: "2px", boxShadow: "1px 3px black", backgroundColor: "#EEBC1D", color: "white"}}>
                                            <div>{player ? <img style={{width:"2em", height:"auto" }} src={player.photo}/> : ""}</div>
                                            <div class="position">{pos}</div>
                                            <div class="name">{player ? player.name : "add"}</div>
                                            <div class="weeklyPoints">{player ? player.weeklyPoints : ""}</div>
                                        </div>
                                        </div>
                                )
                        }
                    </div>
                )}
        </div>

    )


}

export default Field

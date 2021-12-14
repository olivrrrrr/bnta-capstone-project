import { React, useState, useEffect } from 'react'
import field from '../assets/pitch.png'

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
                                        <div key={i} style={{ width: "100%", textAlign: "center", position: "relative", bottom: "525px", marginRight:"-1em", border:"1px solid black"}}>
                                            <div>{player ? <img style={{width:"2em", height:"auto" }} src={player.photo}/> : ""}</div>
                                            <div>{pos}</div>
                                            <div >{player ? player.name : "add"}</div>
                                            <div>{player ? player.weeklyPoints : ""}</div>
                                        </div>
                                )
                        }
                    </div>
                )}
        </div>

    )


}

export default Field

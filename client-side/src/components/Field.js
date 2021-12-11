import React from 'react'
import pitch from '../assets/pitch.png'

function Field() {

    const players = {
        FWD: [null,null], 
        MID: [null,null,null, null], 
        DEF: [null,null,null, null], 
        GK: [null]
    }

    return (
        <div>
            <img src={pitch} sytle={{}}/>
            {/* {Object.keys(players).map(position=> <p>{players[position].map(player=>{<p>hi</p>})}</p>)} */}
            {Object.entries(players).map(([k,v])=><p style={{display: "flex", justifyContent:"space-between", height: "120px" , marginTop:"7em",width: "30%", position:"relative", top: 0, alignItems:"center",margin: "0 auto"}}>{
                players[k].map(n => <p style={{width: "100%", textAlign:"center", position: "relative", bottom:"500px"}}>{k}</p>) 
            }</p>)}
        </div>
    )
}

export default Field

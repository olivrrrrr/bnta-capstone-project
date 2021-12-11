import React from 'react'
import pitch from '../assets/pitch.png'

function Field() {


    // useEffect(()=>{

    // },[])

    const players = {
        FWD: ["Oli","Anand"], 
        MID: ["Luke","Rashid","Yonis", null], 
        DEF: [null,null,null, null], 
        GK:  [null]
    }

    return (
        <div> 
            <img src={pitch} sytle={{}}/>
            {Object.entries(players).map(([key,val])=><p style={{display: "flex", justifyContent:"space-between", height: "120px" , marginTop:"7em",width: "25%", position:"relative", top: 0, alignItems:"center",margin: "0 auto"}}>{
                players[key].map(n => <p style={{width: "100%", textAlign:"center", position: "relative", bottom:"500px"}}>{key}: {n}</p>) 
            }</p>)}
        </div>
    )
}

export default Field

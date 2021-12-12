import {React,useState,useEffect} from 'react'
import field from '../assets/pitch.png'

function Field() {

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/players/allPlayer")
        .then(resp=>resp)
        .then(data=>setPlayers(data))
    },[])

    console.log(players)

    const pitch = {
        FWD: ["Oli","Anand"], 
        MID: ["Luke","Rashid","Yonis", "Ronaldo"], 
        DEF: [null,null,null, null], 
        GK:  [null]
    }

    return (
        <div> 
            <img src={field}/>
            {Object.entries(pitch).map(([key,val])=><div key={val} style={{display: "flex", justifyContent:"space-between", height: "120px" , marginTop:"7em",width: "25%", position:"relative", top: 0, alignItems:"center",margin: "0 auto"}}>{
                pitch[key].map((player,i) => <p key={i} style={{width: "100%", textAlign:"center", position: "relative", bottom:"500px"}}>{key}: {player}</p>) 
            }</div>)}
        </div>
    )
}

export default Field

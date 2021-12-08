import React from 'react'
import {fetchPlayerData} from '../adaptors/PlayerAdaptor';
import {useState, useEffect} from 'react';

function AdminPage() {


    const[players, setPlayers] = useState([]);

    useEffect(() => {fetchPlayerData(61, 2021, 1)
    .then(response => setPlayers(response))}, [])


    console.log(players);

    return (

        players.length > 0 ?


        <div>

           {players[0].name}
        </div>

        : 
        <div>loading...</div>
    )
}

export default AdminPage

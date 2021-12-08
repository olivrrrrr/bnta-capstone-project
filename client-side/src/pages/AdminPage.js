import React from 'react'
import {fetchPlayerData} from '../adaptors/PlayerAdaptor';
import {useState, useEffect} from 'react';
import Button from '../components/Button';
import {postAllPlayers} from '../adaptors/BackendAdapter'

function AdminPage() {



    const[players, setPlayers] = useState([]);

    useEffect(() => {fetchPlayerData(61, 2021, 1)
    .then(response => setPlayers(response))}, [])


    const postPlayersToDb = () => {
        postAllPlayers(players)
    }

    console.log(players);

    return (

        players.length > 0 ?


        <div>
            <Button clickMethod={postPlayersToDb} name="Post players to db" />
           {players[0].name}
        </div>

        : 
        <div>loading...</div>
    )
}

export default AdminPage

import React from 'react'
import { fetchPlayerData } from '../adaptors/PlayerAdaptor';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { postAllPlayers, updateAllPlayers } from '../adaptors/BackendAdapter'

function AdminPage() {

    const [players, setPlayers] = useState([]);
    // prem, bunds, seriaa, ligue1, laliga
    // const leagues = [39, 78, 135, 61, 140]
    // const pages = [36, 33, 44, 40, 35]

    // useEffect(() => {
    //     getAllPlayersPrem();
    //     getAllPlayersBundesliga();
    //     for (let i = 0; i <= leagues.length; i++) {
    //         const league = leagues[i]
    //         const page = pages[i]
    //         for (let i = 1; i <= page; i++) {
    //             fetchPlayerData(league, i)
    //                 .then(response => {
    //                     // console.log(response);
    //                     setPlayers(players => players.concat(response));
    //                     console.log(players)
    //                     return 
    //                 })
    //         }
    //     } return 
    // }, [])

    useEffect(() => console.log(players), [players])


    const postPlayersToDb = () => {
        postAllPlayers(players)

    }

    const updatePlayersInDb = () => {
        updateAllPlayers(players)
    }



    const getAllFromLeague = () => {
        // prem, bunds, seriaa, ligue1, laliga
        const leagues = [39, 78, 135, 61, 140]
        const pages = [36, 33, 44, 40, 35]
        for (let i = 0; i <= leagues.length; i++) {
            const league = leagues[i]
            const page = pages[i]
            for (let i = 1; i <= page; i++) {
                fetchPlayerData(league, i)
                    .then(response => {
                        // console.log(response);
                        setPlayers(players => players.concat(response));
                        //console.log(players)
                        return 
                    })
            }
        }
    }



    return (

        players.length > 0 ?

            <div>
                <Button clickMethod={getAllFromLeague} name="fetch all player data" />
                <Button clickMethod={postPlayersToDb} name="Post players to db" />
                <Button clickMethod={updatePlayersInDb} name="Update player stats" />
                {players[0].name}
            </div>

            :
            // <div>loading...</div>
            <div>
                <Button clickMethod={getAllFromLeague} name="fetch all player data" />
                <Button clickMethod={postPlayersToDb} name="Post players to db" />
                <Button clickMethod={updatePlayersInDb} name="Update player stats" />
            </div>
    )
}

export default AdminPage

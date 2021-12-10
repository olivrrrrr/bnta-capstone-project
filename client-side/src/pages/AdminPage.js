import React from 'react'
import { fetchPlayerData } from '../adaptors/PlayerAdaptor';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { postAllPlayers, updateAllPlayers } from '../adaptors/BackendAdapter'

function AdminPage() {

    const [players, setPlayers] = useState([]);
    // prem, bunds, seriaa, ligue1, laliga
    const leagues = [39, 78, 135, 61, 140]
    const pages = [36, 33, 44, 40, 35]

    useEffect(() => {
        // getAllPlayersPrem();
        // getAllPlayersBundesliga();
        for (let i = 0; i <= leagues.length; i++) {
            const league = leagues[i]
            const page = pages[i]
            for (let i = 1; i <= page; i++) {
                fetchPlayerData(league, i)
                    .then(response => {
                        // console.log(response);
                        setPlayers(players => players.concat(response));
                        console.log(players)
                        return 
                    })
            }
        } return 
    }, [])

    useEffect(() => console.log(players), [players])


    // useEffect(() => {
    //     getAllPlayersBundesliga();
    // }, [])

    const postPlayersToDb = () => {
        postAllPlayers(players)

    }

    const updatePlayersInDb = () => {
        updateAllPlayers(players)
    }

    const getAllFromLeague = (theLeague, noPages) => {
        const league = theLeague
        const pages = noPages
        for (let i = 1; i <= pages; i++) {
            fetchPlayerData(league, i)
                .then(response => {
                    // console.log(response);
                    setPlayers(players.concat(response));
                    console.log(players)
                    return players
                })
        }
    }

    const getAllPlayersPrem = () => {
        const league = 39
        const pages = 3
        for (let i = 1; i <= pages; i++) {
            fetchPlayerData(league, i)
                .then(response => {
                    setPlayers(players.concat(response))
                    return players
                })
        }
    }

    // console.log(players);


    const getAllPlayersBundesliga = () => {
        const league = 78
        const pages = 3
        for (let i = 1; i <= pages; i++) {
            fetchPlayerData(league, i)
                .then(response => {
                    setPlayers(players.concat(response))
                    return players
                })
        }
    }


    // const getAllPlayersPrem = () => {
    //     const league = 39
    //     const pages = 3
    //     for (let i=1 ; i<=pages ; i++){
    //         fetchPlayerData(league, i)
    //         .then(response =>{ 
    //             setPlayers(players.concat(response)) 
    //             return players
    //             })
    //     }
    // }

    return (

        players.length > 0 ?


            <div>
                <Button clickMethod={postPlayersToDb} name="Post players to db" />
                <Button clickMethod={updateAllPlayers} name="Update player stats" />
                {players[0].name}
            </div>

            :
            <div>loading...</div>
    )
}

export default AdminPage

import React from 'react'
import {useState, useEffect} from  'react'
import {getAllPlayers, getTeam, getUser} from '../adaptors/BackendAdapter'
import PlayerSelector from '../components/PlayerSelector'
import Field from '../components/Field'


function UserPage({userId}) {

    const emptyPitch = {
        position: {
            FWD: [null, null],
            MID: [null, null, null, null],
            DEF: [null, null, null, null],
            GK: [null]
        },
        Clubs: {},
        Leagues: {
            "La Liga": 0,
            "Ligue 1": 0,
            "Bundesliga 1": 0,
            "Serie A": 0,
            "Premier League": 0,
        }
    }

    const [players, setPlayers] = useState([]);
    const [pitch, setPitch] = useState(emptyPitch);

    useEffect(() => {
        // getAllPlayers()
        //     .then(response => setPlayers(response))
        getTeam(userId)
            .then(response => {
                if (response)
                {
                    response.forEach(player => loadPlayer(player))
                }
            })

    }, [])



    const loadPlayer = (player) => {

        // console.log(player)

        if (!pitch.Clubs[`${player.teamName}`]) {
            // pitch.Clubs[`${player.teamName}` = 1]
            if (pitch.Leagues[`${player.leagueName}`] < 3) {
                if (player.position === 'Attacker' ) {
                    const index = pitch.position.FWD.indexOf(null)
                    if (index !== -1){
                        let tempPitch = Object.assign({}, pitch);
                        tempPitch.position.FWD[index] = player
                        tempPitch.Clubs[`${player.teamName}`] = 1;
                        tempPitch.Leagues[`${player.leagueName}`] += 1
                    setPitch(
                        tempPitch
                    )}
                }
                else if (player.position === 'Midfielder') {
                    const index = pitch.position.MID.indexOf(null)
                    if (index !== -1){
                        let tempPitch = Object.assign({}, pitch);
                        tempPitch.position.MID[index] = player
                        tempPitch.Clubs[`${player.teamName}`] = 1;
                        tempPitch.Leagues[`${player.leagueName}`] += 1
                    setPitch(
                        tempPitch
                    )}
                }
                else if (player.position === 'Defender') {
                    const index = pitch.position.DEF.indexOf(null)
                    if (index !== -1){
                        let tempPitch = Object.assign({}, pitch);
                        tempPitch.position.DEF[index] = player
                        tempPitch.Clubs[`${player.teamName}`] = 1;
                        tempPitch.Leagues[`${player.leagueName}`] += 1
                    setPitch(
                        tempPitch
                    )}
                }
                else if (player.position === 'Goalkeeper') {
                    const index = pitch.position.GK.indexOf(null)
                    if (index !== -1){
                        let tempPitch = Object.assign({}, pitch);
                        tempPitch.position.GK[index] = player
                        tempPitch.Clubs[`${player.teamName}`] = 1;
                        tempPitch.Leagues[`${player.leagueName}`] += 1
                    setPitch(
                        tempPitch
                    )}
                }
                else {
                    alert(`Too many ${player.position}s`)
                }
            }
            else {
                alert(`Too many players from ${player.leagueName}. Maximum of three players allowed from any one league.`)
            }
        }
        else {
            alert(`Too many player from ${player.teamName}. Maximum of one player allowed from any one team.`)
        }
    }

    
    // getTeam(1).then(response => console.log(response));


    return (

            pitch

            ?

            <div>
                <Field pitch={pitch} />
                {/* <PlayerSelector players={players} /> */}
            </div>


            :

            <p>loading...</p>
    )
}

export default UserPage

import React from 'react'
import {useState, useEffect} from  'react'
import {getAllPlayers, getTeam} from '../adaptors/BackendAdapter'
import PlayerSelector from '../components/PlayerSelector'
import Field from '../components/Field'

function UserPage() {

    const emptyPitch = {
        Position: {
            FWD: ['Benteke', 'Benteke'],
            MID: ['Benteke','Benteke','Benteke','Benteke'],
            DEF: ['Benteke','Benteke','Benteke','Benteke'],
            GK: ['Benteke']
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
        getAllPlayers()
            .then(response => setPlayers(response))
        getTeam(1)
            .then(response => {
                if (response)
                {
                    response.forEach(player => loadPlayer(player))
                }
            })

    }, [])


    const loadPlayer = (player) => {

        if (!pitch.Clubs[`${player.teamName}`]) {
            // pitch.Clubs[`${player.teamName}` = 1]
            if (pitch.Leagues[`${player.leagueName}`] < 3) {
                if (player.position === 'Attacker' && pitch.FWD.length < 2) {
                    setPitch(pitch => {
                        pitch.FWD.push(player)
                        pitch.Clubs[`${player.teamName}`] = 1;
                        pitch.Leagues[`${player.leagueName}`] += 1
                    })
                }
                else if (player.position === 'Midfielder' && pitch.MID.length < 4) {
                    setPitch(pitch => {
                        pitch.MID.push(player)
                        pitch.Clubs[`${player.teamName}`] = 1;
                        pitch.Leagues[`${player.leagueName}`] += 1
                    })
                }
                else if (player.position === 'Defender' && pitch.DEF.length < 4) {
                    setPitch(pitch => {
                        pitch.DEF.push(player)
                        pitch.Clubs[`${player.teamName}`] = 1;
                        pitch.Leagues[`${player.leagueName}`] += 1
                    })
                }
                else if (player.position === 'Goalkeeper' && pitch.GK.length < 1) {
                    setPitch(pitch => {
                        pitch.GK.push(player)
                        pitch.Clubs[`${player.teamName}`] = 1;
                        pitch.Leagues[`${player.leagueName}`] += 1
                    })
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

    console.log(pitch);

    return (


            <div>
                <Field pitch={pitch} />
                {/* <PlayerSelector players={players} /> */}
            </div>

    )
}

export default UserPage

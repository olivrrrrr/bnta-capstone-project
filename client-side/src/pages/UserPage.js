import React from 'react'
import {useState, useEffect} from  'react'
import {getAllPlayers, getTeam, getUser, saveFantasyTeam} from '../adaptors/BackendAdapter'
import PlayerSelector from '../components/PlayerSelector'
import Field from '../components/Field'
import PlayerChoose from '../components/PlayerSelector'

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




    const mapPlayerPos = (player) => {
        
        if(player.position === "Attacker"){
            return "FWD"
        }
        else if (player.position === "Midfielder") {
            return "MID"
        }

        else if(player.position === "Defender"){
            return "DEF"
        }
        else {
            return "GK"
        }
    } 

    const loadPlayer = (player) => {

        const playerPosition = mapPlayerPos(player)

        if (pitch.position[`${playerPosition}`].indexOf(player) !== -1) {
            alert(`${player.name} already exists in team`)
        }
        else {
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
                        else {
                            alert(`Too many ${player.position}s`)
                        }
                    }
                    if (player.position === 'Midfielder') {
                        const index = pitch.position.MID.indexOf(null)
                        if (index !== -1){
                            let tempPitch = Object.assign({}, pitch);
                            tempPitch.position.MID[index] = player
                            tempPitch.Clubs[`${player.teamName}`] = 1;
                            tempPitch.Leagues[`${player.leagueName}`] += 1
                        setPitch(
                            tempPitch
                        )}
                        else {
                            alert(`Too many ${player.position}s`)
                        }
                    }
                    if (player.position === 'Defender') {
                        const index = pitch.position.DEF.indexOf(null)
                        if (index !== -1){
                            let tempPitch = Object.assign({}, pitch);
                            tempPitch.position.DEF[index] = player
                            tempPitch.Clubs[`${player.teamName}`] = 1;
                            tempPitch.Leagues[`${player.leagueName}`] += 1
                        setPitch(
                            tempPitch
                        )}
                        else {
                            alert(`Too many ${player.position}s`)
                        }
                    }
                    if (player.position === 'Goalkeeper') {
                        const index = pitch.position.GK.indexOf(null)
                        if (index !== -1){
                            let tempPitch = Object.assign({}, pitch);
                            tempPitch.position.GK[index] = player
                            tempPitch.Clubs[`${player.teamName}`] = 1;
                            tempPitch.Leagues[`${player.leagueName}`] += 1
                        setPitch(
                            tempPitch
                        )}
                        else {
                            alert(`Too many ${player.position}s`)
                        }
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
    }

    const saveTeam = () => {
        console.log(pitch)
        let team = [];
        let array = [...pitch.position.FWD];
        console.log(array);
        for (let player of array) {
            console.log(player);
            if(!player) {
                alert('Must have 11 players in team')
                return 1;
            }
            else{
                team.push(player);
            }
        }
        for (let player of pitch.position.MID) {
            if(!player) {
                alert('Must have 11 players in team')
                return 1;
            }
            else{
                team.push(player);
            }
        }
        for (let player of pitch.position.DEF) {
            if(!player) {
                alert('Must have 11 players in team')
                return 1;
            }
            else{
                team.push(player);
            }
        }
        for (let player of pitch.position.GK) {
            if(!player) {
                alert('Must have 11 players in team')
                return 1;
            }
            else{
                team.push(player);
            }
        }

        saveFantasyTeam(team, userId)

    }

    const removePlayer = (playerToRemove) => {
        let tempPitch = Object.assign({}, pitch)

        const playerPosition = mapPlayerPos(playerToRemove);
        const positionArray = tempPitch.position[playerPosition];

        for(let i=0; i < positionArray.length;i ++) {
            if(positionArray[i] === playerToRemove) {
                tempPitch.position[playerPosition][i] = null;
            }
        }

        tempPitch.Leagues[playerToRemove.leagueName] -= 1;
        tempPitch.Clubs[playerToRemove.teamName] -= 1;
        console.log(tempPitch);

        setPitch(tempPitch)
    }

    
    // getTeam(1).then(response => console.log(response));


    return (

            pitch

            ?

            <div style={{marginRight: "15em" }}>
                <Field pitch={pitch} removePlayer={removePlayer}/>  
                <PlayerChoose addPlayerToPitch={loadPlayer}/>
                <button onClick={saveTeam} >Save Team</button>
            </div>
            

            :

            <p>loading...</p>
    )
}

export default UserPage

import React, { useState } from 'react';
import Player from '../modules/Players/Player';
import Header from '../modules/Players/Header';

import AddPlayerForm from '../modules/Players/AddPlayerForm';

export default function Players(props){

    const [players, setPlayers] = useState([])
    const [totalPlayers, setTotalPlayers] = useState(0)

    const handleAddPlayer = (value) => {
        let actualPlayers = players.slice(); //copy the array
        const data = {
            name:  value,
            score: 0,
            id: totalPlayers
          }
        setTotalPlayers(totalPlayers + 1)
        actualPlayers.push(data)
        setPlayers(actualPlayers);
    }

    const handleScoreChange = (index, delta) => {
        const updatedPlayers = players.slice(); //copy the array
        const updatedPlayer = updatedPlayers[index]; //copy the array

        updatedPlayer.score += delta;

        updatedPlayers[index] = updatedPlayer;
        setPlayers(updatedPlayers);
    }

    const handleRemovePlayer = (id) => {
        console.log(players.slice());
        const actualPlayers = players.slice().filter(p => p.id !== id)
        console.log(actualPlayers);
        setPlayers(actualPlayers);
    }

    const getHighScore = () => {
        const scores = players.map( p => p.score );
        const highScore = Math.max(...scores);
        if (highScore) {
          return highScore;
        } 
        return null;
    }

    const highScore = getHighScore();

    return(        

        <div className="scoreboard">

            <Header players={players}/>
    
            {/* Players list */}
            {players.map((player, index) => 
                <Player 
                name={player.name}
                score={player.score}
                id={player.id}
                key={index} 
                index={index}
                changeScore={handleScoreChange}
                removePlayer={handleRemovePlayer}
                isHighScore={highScore === player.score}         
                />
            )}
            <AddPlayerForm addPlayer={handleAddPlayer} />
        </div>
    );
    
}
import React, {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";

function LeaderBoard(props) {
    const [players, updatePlayers] = useState([])

    useEffect(() => {
        axios.get('players/').then(({data}) => {
            updatePlayers(data.sort((a, b) => {return b.clicks - a.clicks}));
        }).catch(error => {console.log(error)})
    })

    const playerLIs = players.map((player) =>
        <li key={player.username} onClick={() => props.setSelectedPlayer(player)}>
            { player.username }: { player.clicks }
        </li>
    )

    return (
        <div className="LeaderBoard">
            <ol>
                { playerLIs }
            </ol>
        </div>
    );
}

export default LeaderBoard;

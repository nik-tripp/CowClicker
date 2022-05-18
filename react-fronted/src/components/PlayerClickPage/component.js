import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function PlayerClickPage(props) {
    const [player, updatePlayer] = useState(props.player)

    // If the correct player is logged in, send a click to the server and update display with server's new count
    const addClick = () => {
        if (props.loggedInPlayerName !== player.username) {
            alert("Cannot add clicks when not logged in as this player!")
        }
        else {
            axios.patch("players/" + player.username + "/addclick/")
                .then(({data, status}) => {
                    if (status === 200) {
                        player.clicks = data.clicks;
                        updatePlayer({...player})
                    } else {
                        console.log("Unexpected response code [" + status + "] with following payload: " + data);
                    }
                }).catch(error => {
                console.log("Error incrementing user clicks: " + error)
            })
        }
    }

    return (
        <div className="ClickTheCow">
            <h3>User: { player.username }</h3>
            <img className="cow-image" onClick={addClick} src={require("./cow_stock_photo.jpg")} alt="A cow in a field"/>
            <h3>Clicks: { player.clicks }</h3>
            <button onClick={props.clearPlayer}>Return to Leaderboard</button>
        </div>
    );
}

export default PlayerClickPage;

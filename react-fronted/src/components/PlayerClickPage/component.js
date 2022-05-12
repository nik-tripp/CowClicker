import React from "react";
import axios from "axios";
import "./style.css";

class PlayerClickPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: props.player
        };

        this.addClick = this.addClick.bind(this)
    }

    addClick() {
        if (this.props.loggedInPlayerName !== this.state.player.username) {
            alert("Cannot add clicks when not logged in as this player!")
        }
        else {
            axios.patch("players/" + this.state.player.username + "/addclick/")
                .then(({data, status}) => {
                    if (status === 200) {
                        let playerCopy = this.state.player
                        playerCopy.clicks = data.clicks;

                        this.setState({player: playerCopy})
                    } else {
                        console.log("Unexpected response code [" + status + "] with following payload: " + data);
                    }
                }).catch(error => {
                console.log("Error incrementing user clicks: " + error)
            })
        }
    }

    render() {
        return (
            <div className="ClickTheCow">
                <h3>User: { this.state.player.username }</h3>
                <img className="cow-image" onClick={this.addClick} src={require("./cow_stock_photo.jpg")} alt="A cow in a field"/>
                <h3>Clicks: { this.state.player.clicks }</h3>
                <button onClick={this.props.clearPlayer}>Return to Leaderboard</button>
            </div>
        );
    }
}

export { PlayerClickPage };

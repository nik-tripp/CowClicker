import React, {useState} from "react";
import Login from "./components/Login"
import LeaderBoard from "./components/LeaderBoard/component";
import PlayerClickPage from "./components/PlayerClickPage/component";
import {Player} from "./types";

function CowClicker() {
    const [currentUsername, setCurrentUsername] = useState("")
    const [selectedPlayer, setSelectedPlayer] = useState<Player>(null)


    let gameArea: JSX.Element;

    if (selectedPlayer == null) {
        gameArea = <LeaderBoard setSelectedPlayer={setSelectedPlayer}/>;
    }
    else {
        gameArea = <PlayerClickPage player={selectedPlayer} clearPlayer={() => setSelectedPlayer(null)} loggedInPlayerName={currentUsername}/>;
    }

    return (
        <div className="CowClicker">
            <Login setUsername={setCurrentUsername}/>
            {gameArea}
        </div>
    );
}

export default CowClicker;

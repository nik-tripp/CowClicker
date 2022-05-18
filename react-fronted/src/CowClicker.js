import React from "react";
import Login from "./components/Login"
import LeaderBoard from "./components/LeaderBoard/component";
import PlayerClickPage from "./components/PlayerClickPage/component";

class CowClicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUsername: null,
            selectedPlayer: null
        };
    }

    render() {
        let gameArea;

        if (this.state.selectedPlayer == null) {
            gameArea = <LeaderBoard setSelectedPlayer={(player) => this.setState({selectedPlayer: player})}/>;
        }
        else {
            gameArea = <PlayerClickPage player={this.state.selectedPlayer} clearPlayer={() => this.setState({selectedPlayer: null})} loggedInPlayerName={this.state.currentUsername}/>;
        }

        return (
            <div className="CowClicker">
                <Login setUser={(user) => this.setState({currentUsername: user})}/>
                <div className="game-area">
                    {gameArea}
                </div>
            </div>
        );
    }
}

export default CowClicker;

import React from "react";
import axios from "axios";
import "./style.css";

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        axios.get('players/').then(({data}) => {
            this.setState({players: data.sort((a, b) => {return b.clicks - a.clicks})});
        }).catch(error => {console.log(error)})
    }

    render() {
        let playerLIs = this.state.players.map((player) =>
            <li key={player.username} onClick={() => this.props.setSelectedPlayer(player)}>
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
}

export { LeaderBoard };

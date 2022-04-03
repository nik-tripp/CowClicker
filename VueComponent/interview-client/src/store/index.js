import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state() {
        return {
            message: "nothing yet",
            username: "",
            selectedPlayer: null
        }
    },
    mutations: {
        setMessage(state, message) {
            state.message = message;
        },
        setUsername(state, username) {
            state.username = username;
        },
        setSelectedPlayer(state, player) {
            state.selectedPlayer = player;
        },
        updateSelectedUserClicks(state, clickCount) {
            state.selectedPlayer.clicks = clickCount;
        }
    },
    actions: {
        fetchAPIRootMessage: async function ({commit}) {
            axios.get().then(({data, status}) => {
                if (status === 200) {
                    commit('setMessage', data);
                }
                else {
                    commit('setMessage', "Oh dear, got a "+status);
                    console.log(data)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        addClick: async function ({commit, state}) {
            // Only send the call if the right user is logged in (can be removed if the API ever
            // gets proper client authentication)
            if (state.username !== state.selectedPlayer.username) {
                alert("Must be signed in as this user to add to their clicks!")
            }
            else {
                axios.patch("players/"+state.selectedPlayer.username+"/addclick/")
                    .then(({data, status}) => {
                        if (status === 200) {
                            commit('updateSelectedUserClicks', data.clicks);
                        }
                        else {
                            console.log("Unexpected response code ["+status+"] with following payload: "+data);
                        }
                    }).catch(error => {
                        console.log("Error incrementing user clicks: "+error)
                })
            }
        }
        // If we get any more axios calls we need to make, may be worthwhile to add an automatic error catch
        // and a simple intermediary function in axios that checks expected statuses by default
    }
})

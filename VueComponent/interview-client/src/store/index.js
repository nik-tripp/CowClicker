import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state() {
        return {
            message: "nothing yet",
            username: "",
        //  TODO selected user, so we can update them wherever
        }
    },
    mutations: {
        setMessage(state, message) {
            state.message = message;
        },
        setUsername(state, username) {
            state.username = username;
        }
    //  TODO  set selected user
        // TODO update user click count
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
        // TODO fetch users
        // TODO send user click to server and update local user's points
    }
})

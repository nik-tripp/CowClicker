<template>
<div id="leaderBoardWrapper">
  <h1>Leaderboard</h1>
  <ul id="leaderList">
    <li v-for="player of players" :key="player.username" @click="setSelectedUser(player)">
      user: {{ player.username }} clicks: {{ player.clicks }}
    </li>
  </ul>
  <button @click="fetchPlayers">Refresh scores</button>
</div>
</template>
<script>
import axios from "axios";
import {mapMutations} from "vuex";

export default {
  name: "LeaderBoard",
  data() {
    return {
      players: []
    }
  },
  methods: {
    ...mapMutations(['setSelectedUser']),
    fetchPlayers: function () {
      axios.get('players/').then(({data}) => {
        this.players = data;
        this.players.sort((a, b) => {return a.clicks - b.clicks})
      }).catch(error => {console.log(error)})
    },
  },
  mounted() {
    this.fetchPlayers();
  }
}
</script>

<style scoped>

</style>
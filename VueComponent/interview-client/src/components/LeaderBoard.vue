<template>
<div id="leaderBoardWrapper">
  <h1>Leaderboard</h1>
  <ul id="leaderList">
<!--   TODO make these entries allow a click to select the user -->
    <li v-for="player of players" :key="player.username">
      user: {{ player.username }} clicks: {{ player.clicks }}
    </li>
  </ul>
  <button @click="fetchPlayers">Refresh scores</button>
<!--  TODO refresh button-->
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "LeaderBoard",
  data() {
    return {
      players: []
    }
  },
  methods: {
    fetchPlayers: function () {
      axios.get('players/').then(({data}) => {
        this.players = data;
        this.players.sort((a, b) => {return a.clicks - b.clicks})
      }).catch(error => {console.log(error)})
    },
  },
  // TODO need to bind in the selected user and set user action
  mounted() {
    this.fetchPlayers();
  }
}
</script>

<style scoped>

</style>
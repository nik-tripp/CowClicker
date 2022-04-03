<template>
<div id="leaderBoardWrapper">
  <h1>Leaderboard</h1>
  <ul id="leaderList">
<!--   TODO order this by user.clicks    -->
<!--   TODO make these entries allow a click to select the user -->
    <li v-for="user in users" :key="user.username">
    user: {{ user.username }} clicks: {{ user.clicks }}
  </li>
  </ul>
<!--  TODO refresh button-->
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "LeaderBoard",
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: () => {
      axios.get('users/').then((data) => {
        this.$data.users = data;
      }).catch(error => {console.log(error)})
    }
  },
  // TODO need to bind in the selected user and set user action
  mounted() {
    this.fetchUsers();
  }
}
</script>

<style scoped>

</style>
<template>
  <div id="userViewWrapper">
    <h3>User: {{selectedPlayer.username}}</h3>
    <img @click="addClick" src="@/assets/cow_stock_photo.jpg" alt="Stock image of a cow in a field">
    <h3>Clicks: {{selectedPlayer.clicks}}</h3>
    <button @click="setSelectedPlayer(null)">Return to Leaderboard</button>
<!-- TODO Cow picture, onclick adds a point -->
<!-- TODO click count -->
<!-- TODO back to leaderboard button -->
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "UserView",
  methods: {
    ...mapActions(['addClick']),
    ...mapMutations(['setSelectedPlayer'])
  },
  computed: {
    ...mapState(['selectedPlayer']),
  }
}
</script>

<style scoped>

</style>
<template>
  <h1>Welcome to CowClicker!</h1>
  <SignIn/>
  <LeaderBoard v-if="selectedPlayer === null"/>
  <UserView v-else/>
</template>

<script>
import SignIn from "@/components/SignIn";
import LeaderBoard from "@/components/LeaderBoard";
import UserView from "@/components/UserView";
import {mapState} from "vuex";

export default {
  name: 'App',
  components: {
    UserView,
    LeaderBoard,
    SignIn
  },
  computed: mapState(['selectedPlayer']),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

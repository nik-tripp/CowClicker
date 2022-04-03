<template>
  <h1>Welcome to CowClicker!</h1>
  <SignIn/>
<!-- TODO Only show leaderboard if a user is not selected-->
  <LeaderBoard/>
<!-- TODO Only show user view if a user *is* selected -->
  <UserView/>
</template>

<script>
import SignIn from "@/components/SignIn";
import LeaderBoard from "@/components/LeaderBoard";
import UserView from "@/components/UserView";

export default {
  name: 'App',
  components: {
    UserView,
    LeaderBoard,
    SignIn
  }
// TODO mount in selected user from store
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

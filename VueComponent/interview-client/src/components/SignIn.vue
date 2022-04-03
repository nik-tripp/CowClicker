<template>
  <div id="signInWrapper">
    <label>Username: <input type="text" @input="setUsername" placeholder="Enter Username Here"/></label>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    setUsername (e) {
      this.$store.commit('setUsername', e.target.value)
    }
  },
}
</script>

<style scoped>

</style>
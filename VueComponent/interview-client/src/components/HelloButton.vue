<template>
  <div class="hellow-wrapper">
    <h1>Message Is: {{ message }}</h1>
    <button @click="fetchAPIRootMessage()">Fetch message</button>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "HelloButton",
  data() {
    return {}
  },
  methods: mapActions(['fetchAPIRootMessage']),
  computed: mapState({
    message: 'message'
  })
}
</script>

<style scoped>

</style>
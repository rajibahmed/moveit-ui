<template>
  <div class="home ">
    <p class="control">
      <input v-model.number="distance" type="range" min="0" max="1000">
      <input v-model.number="volume" type="range" min="0" max="1000">
    </p>
    <p>{{ distance }}</p>
    <p>{{ volume }}</p>
    <p class="control">
      <button class="button is-large is-primary">Calculate</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      distance: 0,
      volume: 0
    }
  }
}
</script>
<style scoped>
</style>

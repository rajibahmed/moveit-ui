<template>
  <div class="home content">
    <p>
      <input v-model.number="distance" type="range" min="0" max="1000">
      <span>{{ distance }}</span>
    </p>
    <p>
      <input v-model.number="volume" type="range" min="0" max="1000">
      <span>{{ volume }}</span>
    </p>
    <p>
      <label class="checkbox">
        <input v-model="hasPiano" type="checkbox">
        Have a Piano?
      </label>
      {{ hasPiano }}
    </p>
    <button class="button is-large is-primary">Calculate</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      distance: 0,
      volume: 0,
      hasPiano: false
    }
  }
}
</script>
<style scoped>
.home {max-width: 500px }
</style>

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
    <button @click="save()" class="button is-large is-primary">Calculate</button>
  </div>
</template>

<script>
let store = window.localStorage

export default {
  name: 'home',
  data () {
    let data = JSON.parse(store.getItem('data'))

    return data || {
      distance: 0,
      volume: 0,
      hasPiano: false
    }
  },
  methods: {
    save () {
      store.setItem('data', JSON.stringify({
        'distance': this.distance,
        'volume': this.volume,
        'hasPiano': this.hasPiano
      }))
    }
  }
}
</script>

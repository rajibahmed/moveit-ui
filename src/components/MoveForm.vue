<template>
  <div class="content">
    <p>
      <input v-model.number="distance" type="range" min="0" max="1000">
      <span>{{ distance }}</span>
    </p>
    <p>
      <input v-model.number="volume_living" type="range" min="0" max="1000">
      <span>{{ volume_living }}</span>
    </p>
    <p>
      <input v-model.number="volume_storage" type="range" min="0" max="1000">
      <span>{{ volume_storage }}</span>
    </p>
    <p>
      <label class="checkbox">
        <input v-model="has_piano" type="checkbox">
        Have a Piano?
      </label>
      {{ has_piano }}
    </p>
    <button @click="save()" class="button is-large is-primary">Calculate</button>
  </div>
</template>

<script>
const store = window.localStorage

export default {
  name: 'move-form',
  data () {
    let data = JSON.parse(store.getItem('data'))

    return data || {
      distance: 0,
      volume_living: 0,
      volume_storage: 0,
      has_piano: false
    }
  },
  methods: {
    save () {
      store.setItem('data', JSON.stringify({
        'distance': this.distance,
        'volume_living': this.volume_living,
        'volume_storage': this.volume_storage,
        'has_piano': this.has_piano
      }))

      this.$emit('saved')
    }
  }
}
</script>

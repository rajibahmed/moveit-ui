<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <pretty-input labelName="Distance">
        <input class="input" v-model.number="distance" type="number" min="0" max="10000">
      </pretty-input>

      <pretty-input labelName="Attic">
        <input class="input" v-model.number="volume_living" type="number" min="0" max="1000">
      </pretty-input>

      <pretty-input labelName="Celler">
        <input class="input" v-model.number="volume_storage" type="number" min="0" max="1000">
      </pretty-input>

      <p>
      <label class="checkbox">
        <input v-model="has_piano" type="checkbox"> Have a Piano?
      </label>
      </p>

      <button @click="save()" class="button is-large is-primary">Calculate</button>
    </div>
  </div>
</template>

<script>
import PrettyInput from './PrettyInput'

const store = window.localStorage

export default {
  name: 'move-form',
  props: ['distance-data'],
  components: { PrettyInput },
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

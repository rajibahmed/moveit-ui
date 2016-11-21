<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <p>
        <input type="text" class="input" v-model="origin" placeholder="Start from">
      </p>
      <p>
        <input type="text" class="input" v-model="destination" placeholder="Destiniation">
      </p>
      <p>
        <button @click="distance()" class="button is-success is-large">Next</button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'distance-map',
  data () {
    return {
      origin: null,
      destination: null,
      errors: null
    }
  },
  methods: {
    distance () {
      let vm = this

      axios.get('http://localhost:3000/distance', {
        params: {
          origin: this.origin,
          destination: this.destination
        }
      })
        .then((response) => {
          vm.$emit('distance_found')
        })
        .catch((response) => { vm.errors = response.data })
    }
  }
}
</script>

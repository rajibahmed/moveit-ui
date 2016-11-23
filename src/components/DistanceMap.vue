<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <form v-on:submit.prevent>
        <p>
          <input required type="text" class="input" v-model="origin" placeholder="Start from*">
        </p>
        <p>
          <input required type="text" class="input" v-model="destination" placeholder="Destination*">
        </p>
        <p>
          <button @click="distance()" class="button is-success is-large">Next</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
let store = window.localStorage

export default {
  name: 'distance-map',
  data () {
    let data = JSON.parse(store.getItem('data'))

    return data || {
      distance: null,
      origin: null,
      destination: null
    }
  },
  methods: {
    queryData () {
      return {
        origin: this.origin,
        destination: this.destination,
        distance: this.distance
      }
    },
    save () {
      store.setItem('data', JSON.stringify(this.queryData()))
    },
    distance () {
      if (!this.origin || !this.destination) {
        return
      }

      let vm = this

      axios.get('http://localhost:3000/distance', {
        params: {
          origin: vm.origin,
          destination: vm.destination
        }
      })
        .then((response) => {
          vm.distance = response.data.rows[0].elements[0].distance.value / 1000
          vm.save()
          router.push({path: 'move'})
        })
        .catch((response) => {
          console.log(response)
          window.alert('error happened check console')
        })
    }
  }
}
</script>

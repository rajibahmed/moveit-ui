<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">

      <form v-on:submit.prevent>
        <pretty-input labelName="Email*">
          <input required class="input" v-model="email" required>
        </pretty-input>

        <pretty-input labelName="Distance* (km)">
          <input required class="input" v-model.number="distance" type="number" min="0" max="10000">
        </pretty-input>

        <pretty-input labelName="Apartment (sqm)">
          <input class="input" v-model.number="living_space" type="number" min="0" max="10000">
        </pretty-input>

        <pretty-input labelName="Attic (sqm)">
          <input class="input" v-model.number="attic" type="number" min="0" max="1000">
        </pretty-input>

        <pretty-input labelName="Celler (sqm)">
          <input class="input" v-model.number="celler" type="number" min="0" max="1000">
        </pretty-input>

        <p class="piano">
          <label class="checkbox">
            <input v-model="hasPiano" type="checkbox"> <strong>Have a Piano?</strong>
          </label>
        </p>
        <p>
          <load-button text="Calculate" @click.native="calculate()" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import PrettyInput from './PrettyInput'
import LoadButton from './LoadButton'
import Offer from './Offer'
import router from '../router'
import axios from 'axios'

const store = window.localStorage

export default {
  name: 'move-form',
  props: ['distanceData'],
  components: { PrettyInput, LoadButton, Offer },
  data () {
    let data = JSON.parse(store.getItem('data'))

    return data || {
      origin: null,
      destination: null,
      email: null,
      distance: null,
      living_space: null,
      attic: null,
      celler: null,
      hasPiano: false
    }
  },
  methods: {
    postData () {
      return {
        email: this.email,
        distance: this.distance,
        living_space: this.living_space,
        attic: this.attic,
        celler: this.celler,
        has_piano: this.hasPiano,
        origin: this.origin,
        destination: this.destination
      }
    },
    save () {
      store.setItem('data', JSON.stringify(this.postData()))
    },
    calculate () {
      if (!this.email || !this.distance) {
        return
      }

      let vm = this
      axios.post('http://localhost:3000/offers', { offer: vm.postData() })
      .then((response) => {
        vm.save()
        router.push({name: 'offer', params: {id: response.data.id}})
      })
      .catch((response) => {
        console.log(response)
        window.alert('check console for errors')
      })
    }
  }
}
</script>
<style scoped>
.piano { margin: 10px 0 }
</style>

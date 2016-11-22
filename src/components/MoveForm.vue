<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">

      <div v-if="!submitted">
        <div class="errors" v-for="error in errors">{{ error }}</div>

        <pretty-input labelName="Email*">
          <input class="input" v-model="email" required>
        </pretty-input>

        <pretty-input labelName="Distance* (km)">
          <input class="input" v-model.number="distance" type="number" min="0" max="10000">
        </pretty-input>

        <pretty-input labelName="Apartment Size (sqm)">
          <input class="input" v-model.number="living_space" type="number" min="0" max="10000">
        </pretty-input>

        <pretty-input labelName="Attic Size (sqm)">
          <input class="input" v-model.number="attic" type="number" min="0" max="1000">
        </pretty-input>

        <pretty-input labelName="Celler Size (sqm)">
          <input class="input" v-model.number="celler" type="number" min="0" max="1000">
        </pretty-input>

        <p>
        <label class="checkbox">
          <input v-model="hasPiano" type="checkbox"> Have a Piano?
        </label>
        </p>
        <load-button text="Calculate" @click.native="calculate()" />
      </div>
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
      email: null,
      distance: this.distanceData,
      attic: null,
      celler: null,
      hasPiano: false,
      errors: null,
      submitted: false
    }
  },
  methods: {
    postData () {
      return {
        email: this.email,
        distance: this.distance,
        attic: this.attic,
        celler: this.celler,
        hasPiano: this.hasPiano
      }
    },
    save () {
      store.setItem('data', JSON.stringify(this.postData()))
    },
    calculate () {
      let vm = this
      vm.submitted = true

      axios.post('http://localhost:3000/offers', { offer: vm.postData() })
      .then((response) => {
        router.push({name: 'offer', params: {id: response.data.id}})
      })
      .catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>

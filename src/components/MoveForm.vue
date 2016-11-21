<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">

      <div v-if="!submitted">
        <pretty-input labelName="Email">
          <input class="input" v-model="email" required>
        </pretty-input>

        <pretty-input labelName="Distance">
          <input class="input" v-model.number="distance" type="number" min="0" max="10000">
        </pretty-input>

        <pretty-input labelName="Attic">
          <input class="input" v-model.number="attic" type="number" min="0" max="1000">
        </pretty-input>

        <pretty-input labelName="Celler">
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
      submitted: false
    }
  },
  methods: {
    save () {
      store.setItem('data', JSON.stringify({
        'distance': this.distance,
        'attic': this.attic,
        'celler': this.celler,
        'hasPiano': this.hasPiano
      }))
    },
    postData () {
      return {
        distance: this.distance,
        attic: this.attic,
        celler: this.celler,
        hasPiano: this.hasPiano
      }
    },
    calculate () {
      let vm = this

      axios.post('http://localhost:3000/offers', this.postData())
      .then((response) => {
        console.log('success', response.data)
        vm.save()
        vm.$emit('saved')
      })
      .catch((response) => {
        vm.submitted = true
        console.log('error', response.data)
      })
    }
  }
}
</script>

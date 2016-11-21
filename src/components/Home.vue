<template>
  <div class="home content">
    <move-form v-on:saved="toggleShow" v-if="show" />
    <offer v-else/>
  </div>
</template>

<script>
import MoveForm from './MoveForm'
import Offer from './Offer'

export default {
  name: 'home',
  components: { MoveForm, Offer },
  data () {
    return {
      show: true
    }
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    }
  }
}
</script>

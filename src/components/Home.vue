<template>
  <div class="home content">
    <component name="distance-map"></component>
  </div>
</template>

<script>
import MoveForm from './MoveForm'
import Offer from './Offer'
import DistanceMap from './DistanceMap'

export default {
  name: 'home',
  components: { DistanceMap, MoveForm, Offer },
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

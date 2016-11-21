<template>
  <div class="home content">
    <component :is="currentView"></component>
  </div>
</template>

<script>
import DistanceMap from './DistanceMap'

export default {
  name: 'home',
  data () {
    return {
      show: true,
      currentView: DistanceMap
    }
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    }
  }
}
</script>

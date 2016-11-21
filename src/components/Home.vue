<template>
  <div class="home content">
    <component :is="currentView" ></component>
  </div>
</template>

<script>
import MoveForm from './MoveForm'

export default {
  name: 'home',
  data () {
    return {
      show: true,
      currentView: MoveForm
    }
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    }
  }
}
</script>

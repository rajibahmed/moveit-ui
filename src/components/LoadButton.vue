<template>
  <button @click="changeState()" :class="[{ 'noop': loading }, 'button is-success is-medium' ]">{{ text }}</button>
</template>
<script>
  export default {
    props: ['text'],
    data () {
      return {
        loading: false
      }
    },
    methods: {
      changeState () {
        this.loading = true
      }
    }
  }
</script>

<template>
  <button @click="changeState()" :class="[{ 'is-loading': loading }, 'button is-success is-medium' ]">{{ text }}</button>
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

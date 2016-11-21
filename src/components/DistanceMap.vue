<template>
  <div>
    <p>
      <input type="text" class="input" v-model="origin" placeholder="Start from">
    </p>
    <p>
      <input type="text" class="input" v-model="destination" placeholder="Destiniation">
    </p>
    <p>
      <button class="button is-success is-large">Next</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'distance-map',
  data () {
    return {
      origin: null,
      destination: null
    }
  }
}
</script>

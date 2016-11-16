<template>
  <section class="hero is-success is-fullheight">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <navigation></navigation>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Title
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>
<style>
  @import 'styles/main.css'
</style>

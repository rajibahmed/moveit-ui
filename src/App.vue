<template>
  <section class="hero is-success is-fullheight">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <navigation>
        <router-link class="nav-item" to="/foo">Go to Foo</router-link>
        <router-link class="nav-item" to="/bar">Go to Bar</router-link>
      </navigation>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <tansition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
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

<template>
  <section class="hero is-darkcyan is-fullheight">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <navigation>
        <router-link class="nav-item" to="/foo">Go to Foo</router-link>
        <router-link class="nav-item" to="/bar">Go to Bar</router-link>
      </navigation>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body is-lightcyan">
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
  @import 'styles/main.css';
  .is-darkcyan { background: #63e6be }
  .is-lightcyan{ background: #e6fcf5 }

  a.nav-item      { color: #fff; background: #63e6be }
  a.nav-item:hover{ color: #fff; background: #38d9a9 }

  .nav-item.router-link-active{ color: #fff; background: #38d9a9 }
  .nav-toggle.is-active { background: rgba(255, 255, 255, 0.41) }
</style>

<template>
  <section class="hero is-darkcyan is-fullheight">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <navigation>
        <router-link class="nav-item" to="/about">About</router-link>
        <router-link class="nav-item" to="/contact">Contact</router-link>
      </navigation>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body is-lightcyan">
      <div class="container has-text-centered">
        <transition name="fade" mode="out-in">
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
  .hero-body{ background: url(assets/pattern.png)}
  .is-darkcyan { background: #63e6be}
  .is-lightcyan{ background: #e6fcf5; }

  a.nav-item      { color: #fff; background: #63e6be }
  a.nav-item:hover{ color: #f2f2f2; background: #38d9a9; transition: all .3s ease }
  .button{ transition: all .3s ease }
  .button:hover{ color: #f2f2f2; transition: all .3s ease }

  .nav-item.router-link-active{ color: #fff; background: #38d9a9 }
  .nav-toggle{ background: rgba(255, 255, 255, 0.41) }
  .nav-toggle:hover{ background: rgba(255, 255, 255, 0.30) }
  .nav-toggle span{background: #38d9a9 }

  .fade-enter-active, .fade-leave-active{ transition: all .2s ease }
  .fade-enter, .fade-leave-active{ opacity: 0 }
</style>

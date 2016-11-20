<template>
  <header class="nav">
    <div class="container">
      <div class="nav-left">
        <router-link class="nav-item" to="/top">
          <img src="../assets/logo.png" alt="Logo">
        </router-link>
      </div>
      <span :class="menuIcon" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div :class="menuItems">
        <router-link class="nav-item" to="/about">About</router-link>
        <router-link class="nav-item" to="/contact">Contact</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  },
  computed: {
    menuItems () {
      return {
        'nav-right nav-menu is-active': this.isActive,
        'nav-right nav-menu': !this.isActive
      }
    },
    menuIcon () {
      return {
        'nav-toggle is-active': this.isActive,
        'nav-toggle': !this.isActive
      }
    }
  }
}
</script>

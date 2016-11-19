<template>
  <header class="nav">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item" href="/">
          <img src="../assets/logo.png" alt="Logo">
        </a>
      </div>
      <span :class="menuIcon" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div :class="menuItems">
        <slot></slot>
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

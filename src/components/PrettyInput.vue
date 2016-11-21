<template>
  <div class="control is-horizontal">
    <div class="control-label">
      <label class="label">{{ labelName }}</label>
    </div>
    <div class="control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['labelName'],
    name: 'pretty-input'
  }
</script>

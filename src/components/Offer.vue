<template>
  <div>
    <h5 class="title is-4">Hi</h5>
    <p> Thank you for your inquiry! Our monkeys working on the server crunched number for you.</p>

    <span class="tag is-success is-large">
      55500 Kr
    </span>

    <button @click="saveOffer()" :disable="sending" :class="[{ 'is-loading': sending }, 'button is-success is-medium' ]">{{ btnText }}</button>

    <div class="information">
      <h5 class="title is-5">Apartment <span>50m<sup>2</sup></span></h5>
      <h5 class="title is-5">Celler <span>50m<sup>2</sup></span></h5>
      <h5 class="title is-5">Attic <span>50m<sup>2</sup></span></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'offer',
  data () {
    return {
      loding: true,
      sending: false,
      offer: null,
      btnText: 'Save Offer'
    }
  },
  methods: {
    saveOffer () {
      this.btnText = 'Sent'
    }
  }
}
</script>
<style scoped>
  .information{
    margin-top: 10px;
    padding: 20px 10px 10px;
    background: rgba(35, 209, 96, 0.14);
  }
</style>

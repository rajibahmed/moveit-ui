<template>
  <div>
    <h5 class="title is-4">Hi</h5>
    <p> Thank you for your inquiry! Our monkeys working on the server crunched number for you.</p>

    <div v-if="offer">
      <span class="tag is-success is-large" >
        {{ offer.price }}  Kr
      </span>

      <span class="tag is-success is-large">
        http://localhost:3000/offer/{{ offer.id }}
      </span>

      <div class="information">
        <h5 class="title is-5">Distance <span>{{ offer.distance }}m<sup>2</sup></span></h5>
        <h5 class="title is-5">Apartment <span>{{ offer.living_space }}m<sup>2</sup></span></h5>
        <h5 class="title is-5">Celler <span>{{ offer.celler }}m<sup>2</sup></span></h5>
        <h5 class="title is-5">Attic <span>{{ offer.attic }}m<sup>2</sup></span></h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
  beforeMount () {
    this.fetchOffer()
  },
  methods: {
    saveOffer () {
      this.btnText = 'Sent'
    },
    fetchOffer () {
      let vm = this
      axios.get('http://localhost:3000/offers/' + vm.$route.params.id)
        .then((response) => {
          vm.offer = response.data
        })
        .catch((response) => {
          console.log('error', response)
          alert('error happend check console')
        })
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

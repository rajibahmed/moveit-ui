<template>
  <div>
    <h5 class="title is-4">Hi</h5>
    <p> Thank you for your inquiry! Our monkeys working on the server crunched number for you.</p>

    <div v-if="offer">
      <div class="offer-main">
        <span class="tag is-success is-large" >
          {{ offer.price }}  Kr
        </span>

        <span class="tag is-success is-large" >
          <router-link class="button is-white" :to="offerUrl">Copy Link</router-link>
        </span>
      </div>

      <div class="information">
        <h5 class="title is-5">Distance <span>{{ offer.distance }} km</span></h5>
        <h5 class="title is-5" v-if="offer.living_space > 0" >Apartment <span>{{ offer.living_space }}m<sup>2</sup></span></h5>
        <h5 class="title is-5" v-if="offer.celler > 0"       >Celler <span>{{ offer.celler }}m<sup>2</sup></span></h5>
        <h5 class="title is-5" v-if="offer.attic > 0"        >Attic <span>{{ offer.attic }}m<sup>2</sup></span></h5>
        <h5 class="title is-5" v-if="offer.has_piano"        >Have a nice piano too</h5>
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
      offer: null
    }
  },
  beforeMount () {
    this.fetchOffer()
  },
  computed: {
    offerUrl () {
      return '/offers/' + this.offer.id
    }
  },
  methods: {
    fetchOffer () {
      let vm = this
      axios.get('http://localhost:3000/offers/' + vm.$route.params.id)
        .then((response) => {
          vm.offer = response.data
        })
        .catch((response) => {
          console.log('error', response)
          window.alert('check console for errors')
        })
    }
  }
}
</script>
<style scoped>
   .offer-main { margin: 10px 0 }
   .offer-main span { margin: 10px 5px }

  .information{
    margin-top: 10px;
    padding: 20px 10px 10px;
    background: rgba(35, 209, 96, 0.14);
  }

  .button.is-white{
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    color: #0a0a0a;
  }

  .button.is-white:hover{
    background-color: transparent;
    border-color: transparent;
    color: #0a0a0a;
  }
</style>

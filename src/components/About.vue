<template>
  <div class="about">
    <div class="columns">
      <div class="column">
        <h3 class='title is-3'>I wanted to be Musician </h3>
        <h5 class='subtitle'>earnings were not that great :)</h5>
        <iframe width="400" height="300" src="https://www.youtube.com/embed/LJ-47Cy3uX4" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="column">
        <h3 class='title is-3'>Fun Projects</h3>
        <h5 class='subtitle'>Which I can provide link</h5>
        <p class="content">
        Wrote a multi player socket based text game (Adventure)<br>
        With 0 experince with C++, Read a book for 12 days and wrote C++ for next 10 days.
          <ul>
            <li>
              <a href="https://github.com/rajibahmed/adventure">Adventure - github</a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Colossal_Cave_Adventure">Wiki</a>
            </li>
          </ul>
        </p>
        <p class="content">
        Needed to solve a best price finding algorithim for phone numbers. <br>
        Implemented my frist gem 5years ago  with 100% coverage, depth first search algo.
          <ul>
            <li>
              <a href="https://github.com/rajibahmed/PriceFinder">PriceFinder - github</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to about'
    }
  }
}
</script>
<style>
.column ul {list-style: none }
</style>

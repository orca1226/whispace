<template>
  <div class="nav d-flex">
    <div class="nav__line">

    </div>
    <ul class="nav__link py-2 ms-3 d-flex flex-column justify-content-between">
      <li>
        <a href="/">Whispace</a>
      </li>
      <li>
        <a href="">Workflow</a>
      </li>
      <li>
        <router-link :to="{name: 'work'}">Work</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav {
    letter-spacing: 1.7 !important;
  }
</style>

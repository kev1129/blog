<template>
  <v-app class="app">
    <v-content>
      <v-container>
        <div class="title">
          <base-pagetitle></base-pagetitle>
        </div>
        <div class="nav">
          <base-nav></base-nav>
        </div>
      </v-container>
        <nuxt />
    </v-content>
    <v-footer
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import BasePagetitle from '~/components/BasePagetitle.vue'
import BaseNav from '~/components/BaseNav.vue'
import BaseSns from '~/components/BaseSns.vue'
export default {
  components: {
    BaseNav,
    BasePagetitle,
    BaseSns
  },
}
</script>

<style>
.theme--light.application {
    background: #fff;
    color: rgba(0,0,0,1);
}
.app {
  background-color: #fff;
}
html {
  font-family: 'Abel', 'Noto Sans JP', sans-serif;
  background: #fff;
}
body {
  background: #fff;
}
.title {
  margin-bottom: 12px;
}
</style>

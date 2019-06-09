<template>
  <v-app class="app">
    <v-content>
      <v-container>
        <base-pagetitle class="page_title"></base-pagetitle>
        <base-nav></base-nav>
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
html {
  font-family: 'Abel', 'Noto Sans JP', sans-serif;
  background: #fff;
}
body {
  background: #fff;
}
.page_title {
  margin-bottom: 12px;
}
</style>

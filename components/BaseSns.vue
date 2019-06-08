<template>
  <v-layout align-start justify-start row fill-height wrap>
    <v-flex v-for="(item, index) in items" v-bind:key="index" class="sns">
      <a :href="item.link" class="sns_link" target="_brank">
        <i class="fab" :class="item.class"></i>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {class: 'fa-linkedin-in', link: 'https://www.linkedin.com/in/shinado-kebukawa-754951185'},
        {class: 'fa-instagram', link: 'https://www.instagram.com/shinado1998/?hl=ja'},
        {class: 'fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=100009639289112'},
        {class: 'fa-twitter', link: 'https://twitter.com/shinadokebukawa'},
        {class: 'fa-github', link: 'https://github.com/kev1129'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

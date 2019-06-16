<template>
  <v-card class="card" flat>
    <v-img
      v-bind:src="image"
      aspect-ratio="1.8"
      class="card_image"
      cover
    />
    <v-card-title class="card_text_box">
      <a :href="link" class="card_text" target="_blank">{{text}}</a>
    </v-card-title>
  </v-card>
</template>
<script>

export default {
  props: {
    image: String,
    link: String,
    text: String
  },
}
</script>

<style lang="scss" scoped>
.card {
  .card_text_box {
    background-color: transparent;
    .card_text {
      color: #000;
      font-size: 1rem;
      text-decoration: underline;
    }
    .card_text:hover {
      opacity: .6;
    }
  }
}
</style>

<template>
  <v-card class="card" flat>
    <v-img
      :src="image"
      aspect-ratio="1.8"
      class="card_image"
      cover
    >
      <v-layout align-end justify-start row fill-height wrap>
        <v-flex xs12 sm12 md12 lg12 class="card_inner">
          <span class="card_tag">{{tag}}</span>
          <h3 class="card_title">{{title}}</h3>
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>
<script>

export default {
  props: {
    image: String,
    link: String,
    tag: String,
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.card {
  font-family: "Abel";
  .card_inner {
    margin-left: 5%;
    margin-bottom: 3%;
    .card_tag {
      color: #fff;
      font-style: italic;
    }
    .card_title {
      color: #fff;
      font-size: 2.2rem;
      letter-spacing: 0.08rem;
      font-weight: bold;
      text-decoration: none;
      transition: .2s;
      font-style: italic;

    }
  }
}
.card:hover {
  opacity: .6;
  transition: .2s;
}
</style>

<template>
  <v-card class="card" flat>
    <v-img
      :src="image"
      aspect-ratio="1.8"
      class="card_image"
      cover
    >
      <a :href="link" class="card_text">{{text}}</a>
    </v-img>
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
  font-family: "Abel";
  position: relative;
  text-align: center;
  .card_text {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin:0;
    padding:0;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.08rem;
    font-weight: bold;
    text-decoration: none;
    transition: .2s;
  }
}
.card:hover {
  opacity: .6;
  transition: .2s;
}
</style>

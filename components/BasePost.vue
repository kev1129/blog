<template>
    <v-card class="card">
      <v-card-title primary-title class="card_title">
        <div>
          <h3 class="title">{{title}}</h3>
          <span class="date">{{date}}</span>
          <p class="text">{{text}}</p>
        </div>
      </v-card-title>
      <v-card-actions class="card_actions">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: slug }}" class="link">
            <v-btn flat class="btn">READ FULL POST</v-btn>
        </nuxt-link>

      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: {
      title: String,
      text: String,
      date: String,
      slug: String
  },
}
</script>

<style lang="scss" scoped>
.card {
    font-family: 'Abel', 'Noto Sans JP', sans-serif;
    .card_title {
        padding-bottom: 0;
        overflow: hidden;
    }
    .card_actions {
        padding-top: 0;
    }
}
.title {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 8px;
    border-bottom: 1px solid #000;
}
.date {
    margin-top: 12px;
    font-size: 1rem;

}
.text {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.link {
    text-decoration: none;
    .btn {
        background: #000;
        color: #fff;
        margin-left: 8px;
        margin-bottom: 8px;
        font-weight: bold;
        letter-spacing: .1rem;
        font-style: italic;
    }
}
</style>

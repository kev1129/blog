<template>
    <v-container>
        <h1 class="base_title">{{ title }}</h1>
    </v-container>
</template>

<script>
export default {
  props: {
      title: String
  }
}
</script>

<style lang="scss" scoped>
.base_title {
    font-family: 'Abel';
    font-size: 1.6rem;
    font-style: italic;
    font-weight: normal;
    letter-spacing: 0.08rem;
    color: #000;
    display: block;
    padding: 4px 10px;
    padding: 0;
}
.container {
    padding-top: 0;
    padding-bottom: 0;
}
</style>

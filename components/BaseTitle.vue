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
    display: inline-block;
    font-family: 'Abel';
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 100;
    letter-spacing: 0.08rem;
    color: #000;
    padding: 4px 10px;
    border-bottom: solid 1px #000;
    padding-bottom: 0;
}
.container {
    padding-top: 0;
    padding-bottom: 0;
}
</style>

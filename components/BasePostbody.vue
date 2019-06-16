<template>
    <div>
        <vue-markdown>{{text}}</vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  props: {
      text: String
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss" scoped>
.text {
    display: inline-block;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: normal;
    letter-spacing: 0.08rem;
    color: #000;
    margin-top: 8px;
}
.container {
    padding-top: 0;
    padding-bottom: 0;
}
</style>

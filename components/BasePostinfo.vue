<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <span class="date">{{date}}</span>
        <hr>
    </div>
</template>

<script>
export default {
  props: {
      title: String,
      date: String
  }
}
</script>

<style lang="scss" scoped>
.title {
    display: block;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.7rem;
    font-style: italic;
    font-weight: 100;
    letter-spacing: 0.08rem;
    color: #000;
}
.date {
    font-size: .9rem;
    opacity: .9;
}
.container {
    padding-top: 0;
    padding-bottom: 0;
}
</style>

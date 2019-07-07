<template>
    <v-btn flat @click="handleClick" class="btn">read more</v-btn>
</template>

<script>
export default {
  props: {
    handleClick: Function
  }
}
</script>

<style lang="scss" scoped>
.btn {
    font-family: 'Abel', 'Noto Sans JP', sans-serif;
}
</style>

<template>
    <nuxt-link :to="{ name: 'tags-id', params: { id: id }}" class="link">
        {{tag}}
    </nuxt-link>
</template>

<script>
export default {
  props: {
      tag: String,
      id: String
  }
}
</script>

<style lang="scss" scoped>
.link {
    border: 1px solid #000;
    margin: 12px;
    margin-left: 0;
    text-decoration: none;
    color: #000;
    padding: 6px 16px;
    transition: .3s;
}
.link:hover {
    color: #fff;
    background: #000;
    transition: .3s;
}
</style>

<template>
<div>
<!-- TODO: トリミングと動画編集 -->
    <video :src="src" preload autoplay loop class="video"></video>
    <div class="bk"></div>
</div>
</template>

<script>
  export default {
    data () {
      return {
          src: '1.mp4'
      }
    }
  }
</script>

<style lang="scss" scoped>
.video {
  width: 100vw;
}
</style>

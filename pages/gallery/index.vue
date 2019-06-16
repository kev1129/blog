<template>
    <div>
      <base-title :title="title"></base-title>
      <v-container grid-list-xl>
        <v-layout align-start justify-space-around row wrap>
          <v-flex
            v-for="(src, index) in imgs"
            :key="index"
            class="pic"
            @click="() => show(index)"
            xs12 sm6 md6 lg4
          >
            <img :src="src" aspect-ratio="1.5" contain>
          </v-flex>
        </v-layout>
      </v-container>
      
      <!-- 各画像を拡大するときにのためのコンポーネント -->
      <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="imgs"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'

export default {
  components: {
    BaseTitle
  },
  data () {
    return {
      imgs: [
        'gallery/16.jpg',
        'gallery/2.jpg',
        'gallery/3.jpg',
        'gallery/4.jpg',
        'gallery/5.jpg',
        'gallery/7.jpg',
        'gallery/8.jpg',
        'gallery/11.jpg',
        'gallery/9.jpg',
        'gallery/10.jpg',
        'gallery/13.jpg',
        'gallery/14.jpg',
      ],
      visible: false,
      index: 0, // default
      title: 'Gallery'
    }
  },
  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
  .pic{
    width: calc(50% - 30px);
    /* margin: 15px; */
    cursor: pointer;
  }
  .pic:hover img{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0);
    transform: scale(1.01)
  }
  img{
    width: 100%;
    transition: .3s ease;
  }
  .btn{
    cursor: pointer;
    outline: none;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    height: 50px;
    padding: 0 8px;
    margin-left: 20px;
    background-color: #50d1c1;
    border-color: #50d1c1;
    border-radius: 4px;
    color: #FFF;
    transition: .3s;
  }
  .btn:active{
    color: #ccc;
    background-color: #6AB5AE;
    border-color: #6AB5AE;
    outline: none;
  }
</style>

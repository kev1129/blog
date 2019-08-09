<template>
  <div>
    <!-- tag別にしても記事が少ないので取り敢えずは全て羅列する -->
    <!-- <v-container class="section">
      <v-layout align-start justify-start row wrap>
        <span v-for="(tag, index) in blogTabs" :key="index">
          <base-tag :tag="tag.fields.blogTag" :id="tag.fields.blogTag"></base-tag>
        </span>
      </v-layout>
    </v-container> -->
    <base-title :title="title"></base-title>
    <v-container grid-list-lg class="section">
      <v-layout align-start justify-start row wrap>
        <v-flex v-for="(post, index) in getPosts" :key="index" xs12 sm12 md6 lg6>
          <base-post :title="post.title" :text="post.description"
            :date="( new Date(post.publishDate)).toDateString()"
            :slug="post.slug"
          ></base-post>
        </v-flex>
      </v-layout>
    </v-container>
    <button v-on:click="fetchMore()">もっと読む</button>
  </div>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseTag from '~/components/BaseTag.vue'
import BasePost from '~/components/BasePost.vue'
import BaseMore from '~/components/BaseMore.vue'
import {createClient} from '~/plugins/contentful.js'
import { mapGetters } from 'vuex'

const client = createClient()
const POSTS_PER_PAGE = 2

export default {
  components: {
    BaseTitle,
    BaseTag,
    BasePost,
    BaseMore
  },
  data () {
    return {
      title: 'Story',
      tags: [
        {'tag': 'Permaculture', 'id': 'permaculture'},
        {'tag': 'Machine Learning', 'id': 'machine-learning'}
      ]
    }
  },
  async fetch({ store, env }) {
    const data = await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt',
      skip: (store.state.counter) * POSTS_PER_PAGE,
      limit: POSTS_PER_PAGE
    })
    const posts = []
    for(const i in data.items) {
      posts.push(data.items[i].fields)
    }
    store.commit("addPost", posts)
  },
  // `env` is available in the context object
  asyncData ({env, store}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        content_type: 'blogTabs',
        order: '-sys.createdAt'
      })
    ]).then(([entries, blogTabs]) => {
      // return data that should be available
      // in the template
      return {
        person: entries.items,
        blogTabs: blogTabs.items
      }
    }).catch(console.error)
  },
 methods: {
   async fetchMore() {
    this.$store.commit("increment")
    const data = await client.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt',
      skip: this.$store.state.counter * POSTS_PER_PAGE,
      limit: POSTS_PER_PAGE
    })
    const posts = []
    for(const i in data.items) {
      posts.push(data.items[i].fields)
    }
    this.$store.commit("addPost", posts)
   }
 },
  computed: {
    ...mapGetters(['getPosts']),
  },
}
</script>


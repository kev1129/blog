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
        <v-flex v-for="(post, index) in getPosts[0]" :key="index" xs12 sm12 md6 lg6>
          <base-post :title="post.fields.title" :text="post.fields.description"
            :date="( new Date(post.fields.publishDate)).toDateString()"
            :slug="post.fields.slug"
          ></base-post>
        </v-flex>
      </v-layout>
    </v-container>
    <button v-on:click="fetchMore()">Add 1</button>

   <div v-for="(post, index) in getPosts" :key=index> 
    {{ post }}
    </div>
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
      skip: (store.state.counter + 1) * POSTS_PER_PAGE,
      limit: POSTS_PER_PAGE
    })
    store.commit("addPost", data.items)
  },
  // `env` is available in the context object
  asyncData ({env, store}) {
    return Promise.all([
      // fetch the owner of the blog
      // client.getContentTypes(),
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
        skip: (store.state.counter + 1) * POSTS_PER_PAGE,
        limit: POSTS_PER_PAGE
      }),
      client.getEntries({
        content_type: 'blogTabs',
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts, blogTabs]) => {
      // return data that should be available
      // in the template
      return {
        person: entries.items,
        // posts: posts.items,
        blogTabs: blogTabs.items
      }
    }).catch(console.error)
  },
 methods: {
   increment () {
     this.$store.commit('increment')
   },
   async fetchMore() {
    this.$store.commit("increment")
    const data = await client.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt',
      skip: (this.$store.state.counter + 1) * POSTS_PER_PAGE,
      limit: POSTS_PER_PAGE
    })
    this.$store.commit("addPost", data.items)
   }
 },
  computed: {
    ...mapGetters(['getPosts']),
  },
  // methods: {
  //   fetchMore() {
  //     this.fetchPosts({ pageType: CONTENT_TYPE_POST, page: this.page + 1 })
  //   }
  // }
}
</script>


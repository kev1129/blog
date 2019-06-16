<template>
  <div>
    <v-container>
      <v-layout align-start justify-start row wrap>
        <span v-for="(tag, index) in blogTabs" :key="index">
          <base-tag :tag="tag.fields.blogTag" :id="tag.fields.blogTag"></base-tag>
        </span>
      </v-layout>
    </v-container>
    <!-- <base-title :title="title"></base-title> -->
    <v-container grid-list-lg>
      <v-layout align-start justify-start row wrap>
        <v-flex v-for="(post, index) in posts" :key="index" xs12 sm12 md6 lg6>
          <base-post :title="post.fields.title" :text="post.fields.description"
          :date="( new Date(post.fields.publishDate)).toDateString()"
          :slug="post.fields.slug"
          ></base-post>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseTag from '~/components/BaseTag.vue'
import BasePost from '~/components/BasePost.vue'
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
// fields.genre=hi というパラメータで取得するとこができた
export default {
  components: {
    BaseTitle,
    BaseTag,
    BasePost
  },
  // `env` is available in the context object
  asyncData ({env, params}) {
    return Promise.all([
      // fetch the owner of the blog
      // client.getContentTypes(),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        'fields.tags.sys.id': params.id,
        order: '-sys.createdAt'
      }),
    ]).then(([entries, posts]) => {
      // return data that should be available
      // in the template
      return {
        preson: entries.items,
        posts: posts.items,
      }
    }).catch(console.error)
  }
}
</script>
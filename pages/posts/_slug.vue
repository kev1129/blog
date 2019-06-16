<template>
  <div>
    <v-container>
      <v-layout align-start justify-start row wrap>
        <v-flex xs12 sm9 md8 lg8>
          <base-postinfo :title="post.fields.title" :date="( new Date(post.fields.publishDate)).toDateString()"></base-postinfo>
          <base-postbody :text="post.fields.body" class="body"></base-postbody>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
import BasePostinfo from '~/components/BasePostinfo.vue'
import BasePostbody from '~/components/BasePostbody.vue'

  const client = createClient()

  export default {
    components: {
      BasePostinfo,
      BasePostbody
    },
    data () {
      return {
        allPosts: [],
        currentPost: []
      }
    },
    // `env` is available in the context object
    asyncData ({env, params}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          'fields.slug': params.slug,
          order: '-sys.createdAt',
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
            post: posts.items[0],
        }
      }).catch(console.error)
    }
  }
</script>

<style lang="scss" scoped>
.body {
  margin-top: 14px;
}
</style>

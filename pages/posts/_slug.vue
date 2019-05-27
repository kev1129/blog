<template>
  <div>
    <!-- render data of the person -->
    <!-- render blog posts -->
    title:{{ post.fields.title }}
    <br>
    desc:{{ post.fields.description }}
    <br>
    body:{{ post.fields.body }}
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
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
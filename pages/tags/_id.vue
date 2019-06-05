<template>
  <div>
    <!-- render data of the person -->
    <!-- render blog posts -->
    <h1>tags</h1>
    <ul>
      <li v-for="post in posts" :key="post">
        title:{{ post.fields.title }}
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}">
          link
        </nuxt-link>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

// fields.genre=hi というパラメータで取得するとこができた

  export default {
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
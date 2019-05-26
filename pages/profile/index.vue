<template>
  <div>
      <nav>
          <ul>
              <li><nuxt-link to="posts">posts</nuxt-link></li>
              <li><nuxt-link to="profile">profile</nuxt-link></li>
          </ul>
      </nav>
    <!-- render data of the person -->
    <!-- render blog posts -->
        profile:{{ person.fields.name }}
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>
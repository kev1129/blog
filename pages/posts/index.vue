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
    <ul>
      <li v-for="post in posts" :key="post">
        title:{{ post.fields.title }}
        <br>
        slug:{{ post.fields.slug }}
        <br>
        tags:{{ post.fields.tags }}
        <br>
        <!-- <img v-bind:src="post.fields.image"/> -->
        desc:{{ post.fields.description }}
        <br>
        date:{{ ( new Date(post.fields.publishDate)).toDateString() }}
        <br>
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}">
          Read Full Content
        </nuxt-link>
        <hr>
      </li>
    </ul>
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
        }),
        client.sync({initial: true})
        .then((response) => {
          console.log(response.entries)
          console.log(response.assets)
        }),
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
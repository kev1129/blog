<template>
  <div>
      <li v-for="post in blogTabs" :key="post">
        title:{{ post.fields.blogTag }}
        <nuxt-link :to="{ name: 'tags-id', params: { id: post.sys.id }}">
          link
        </nuxt-link>

      </li>

    <nav>
        <ul>
            <li><nuxt-link to="posts">posts</nuxt-link></li>
            <li><nuxt-link to="profile">profile</nuxt-link></li>
            <!-- <li><nuxt-link :to="{ name: 'tags-id', params: { tag: post.fields.blogTags } }">tag: hi</nuxt-link></li> -->
        </ul>
    </nav>
      <li v-for="post in blogTabs" :key="post">
        title:{{ post.fields.blogTag }}
        <a href="tags/book">hi</a>
        <nuxt-link :to="{ name: 'tags-slug', params: { slug: post.fields.blogTag }}">
          Read Full Content
        </nuxt-link>

        <hr>
      </li>
      <div>
        <h2>genre</h2>
        <nuxt-link :to="{ name: 'tags-id', params: { id: 'hello' }}">
          hello
        </nuxt-link>
        <nuxt-link :to="{ name: 'tags-id', params: { id: 'photo' }}">
          photo
        </nuxt-link>
        <nuxt-link :to="{ name: 'tags-id', params: { id: 'book' }}">
          book
        </nuxt-link>
        <nuxt-link :to="{ name: 'tags-id', params: { id: 'agri' }}">
          agri
        </nuxt-link>

      </div>
    <!-- render data of the person -->
    <!-- render blog posts -->
    <ul>
      <li v-for="post in posts" :key="post">
        title:{{ post.fields.title }}
        <br>
        slug:{{ post.fields.slug }}
        <br>
        tags:{{ post.fields.blogTags }}
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
        // client.getContentTypes(),
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        }),
        client.getEntries({
          content_type: 'blogTabs',
          order: '-sys.createdAt'

        })
      ]).then(([entries, posts, blogTabs]) => {
        // return data that should be available
        // in the template
          console.log(entries.items)
          console.log(posts.items)
          console.log(blogTabs.items)
        return {
          person: entries.items,
          posts: posts.items,
          blogTabs: blogTabs.items
        }
      }).catch(console.error)
    }
  }
</script>
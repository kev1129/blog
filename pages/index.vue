<template>
    <div>
        <!-- <base-video class="video"></base-video> -->
        <base-title :title="blog"></base-title>
        <v-container class="section">
            <v-layout  align-start justify-start row wrap>
                <v-flex v-for="(story, index) in storys" :key="index" xs12 sm12 md12 lg12 xl12>
                    <!-- tag別の記事が増えてきたらパラメーターを追加する -->
                    <!-- <nuxt-link :to="{ name: 'tags-id', params: { id: story.id }}" class="card_link"> -->
                        <nuxt-link :to="{ name: 'tags-id'}" class="card_link">
                        <base-card :link="story.link" :image="story.image" :title="story.title" :tag="story.tag"></base-card>
                    </nuxt-link>
                </v-flex>
            </v-layout>
        </v-container>
        <base-title :title="portfolio"></base-title>
        <v-container grid-list-md class="section">
            <v-layout align-start justify-start row wrap>
                <v-flex v-for="(card, index) in cards" :key="index" xs12 sm6 md4 lg4>
                    <base-portcard :link="card.link" :image="card.image" :text="card.text"></base-portcard>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BasePortcard from '~/components/BasePortcard.vue'
import BaseCard from '~/components/BaseCard.vue'
import BaseVideo from '~/components/BaseVideo.vue'
export default {
    components: {
        BaseTitle,
        BaseCard,
        BasePortcard,
        BaseVideo
    },
    data () {
        return {
            portfolio: 'Portfolio',
            blog: 'Blog',
            storys: [
                {'title': 'Blog', 'image': 'img/blog.jpg', 'id': 'blog','tag': 'I will say this in advance almost all of articles don\'t make sence.',},
            ],
            cards: [
                {'text': 'HP パン工房プクムク', 'link': 'https://pankouboupukumuku.netlify.com/', 'image': 'img/pukumuku-min.jpg'},
                {'text': 'Web Portfolio', 'link': 'https://shinadokebukawa.com/portfolio/', 'image': 'img/portfolio-min.jpg'},
                {'text': 'WordPress Blog', 'link': 'https://shinadokebukawa.com/taiwan/', 'image': 'img/taiwan-min.jpg'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.card_link {
    text-decoration: none;
}
.section {
    margin-bottom: 48px;
}
.video {
    margin-bottom: 54px;
}
</style>

<template>
    <div>
        <base-title :title="story"></base-title>
        <v-container grid-list-xl>
            <v-layout  align-start justify-start row wrap>
                <v-flex v-for="(story, index) in storys" :key="index" xs12 sm12 md6 lg6 xl6>
                    <base-card :link="story.link" :image="story.image" :text="story.text"></base-card>
                </v-flex>
            </v-layout>
        </v-container>
        <!--  -->
        <base-title :title="portfolio"></base-title>
        <v-container grid-list-md>
            <v-layout align-start justify-start row wrap>
                <v-flex v-for="(card, index) in cards" :key="index" md4 lg4>
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
export default {
    components: {
        BaseTitle,
        BaseCard,
        BasePortcard
    },
    data () {
        return {
            portfolio: 'Portfolio',
            story: 'Story',
            storys: [
                {'text': 'Permaculture', 'param': 'aa', 'link': 'ss', 'image': 'img/story.jpg'},
                {'text': 'Machine Learning', 'param': 'aa', 'link': 'ss', 'image': 'img/story.jpg'},
                {'text': 'Python', 'param': 'aa', 'link': 'ss', 'image': 'img/story.jpg'},
                {'text': 'Science', 'param': 'aa', 'link': 'ss', 'image': 'img/story.jpg'},
            ],
            cards: [
                {'text': 'HP パン工房プクムク', 'link': 'https://pankouboupukumuku.netlify.com/', 'image': 'img/pukumuku.jpg'},
                {'text': 'Web Portfolio', 'link': 'https://shinadokebukawa.com/portfolio/', 'image': 'img/portfolio.jpg'},
                {'text': 'WordPress Blog', 'link': 'https://shinadokebukawa.com/taiwan/', 'image': 'img/taiwan.jpg'},
            ]
        }
    },
}
</script>
<template>
<div class="box">
    <base-title :title="title"></base-title>
    <v-container grid-list-xl>
        <v-layout  align-start justify-start row wrap>
            <v-flex xs12 sm4 md4 lg3>
                <v-img :src="image" aspect-ratio="1" contain class="img" />
            </v-flex>
            <v-flex xs12 sm8 md8 lg9>
                <div class="about about_en">
                    <h2 class="en name">Kebukawa Shinado</h2>
                    <hr>
                    <span class="en text">Student. (2o)</span><br>
                    <span class="en text">Major in Fermentation Science and Technology at Tokyo University of Agriculture</span>
                </div>
                <div class="about about_jp">
                    <h2 class="name">毛部川 風</h2>
                    <hr>
                    <span class="text">大学生. 20歳</span><br>
                    <span class="text">東京農業大学 醸造科学科</span>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container>
        <v-layout  align-start justify-start row>
            <v-flex xs12 sm12 md12 lg12>
                <p class="en desc">
                    I major in Fermentation Science and Technology at Tokyo University of Agriculture.<br>
                    I'm studying microbe and fermentation, life science, organic chemistry and so on at university.
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
export default {
    components: {
        BaseTitle,
    },
    data () {
        return {
            title: 'Profile',
            image: 'img/me.jpg',
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    font-family: 'Noto Sans JP', 'Abel';
}
.img {
    max-width: 240px;
}
.en {
    font-family: 'Abel';
}
.en.name {
    font-style: italic;
}
.name {
    margin-bottom: 4px;
}
.about {
    margin-bottom: 18px;
}
.about_jp {
    font-weight: thin;
    .name {
        font-size: 1.3rem;
        font-weight: 400;
    }
    .text {
        font-weight: 100;
    }
}
.about_en {
    .text {
        font-size: 1.2rem;
    }
}
.desc {
    font-size: 1.3rem;
}
</style>

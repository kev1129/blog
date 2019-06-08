<template>
    <v-layout align-start justify-start row fill-height wrap>
        <v-flex v-for="(item, index) in items" :key="index">
            <nuxt-link :to="{name: item.link}" class="link">
                {{item.name}}
            </nuxt-link>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {'name': 'Profile', 'link': 'profile'},
                {'name': 'Story', 'link': 'posts'},
                {'name': 'Gallery', 'link': 'gallery'},
                {'name': 'Contact', 'link': 'contact'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.flex {
    flex: none;
}
.link {
    font-family: "Abel";
    font-style: italic;
    font-weight: bold;
    letter-spacing: 0.08rem;
    text-decoration: none;
    color: #000;
    font-size: 1.4rem;
    transition: .3s;
    margin-right: 20px;    
}
.link:hover {
    opacity: .6;
    transition: .2s;
}
</style>

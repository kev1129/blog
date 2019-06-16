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
                {'name': 'Home', 'link': 'index'},
                {'name': 'Profile', 'link': 'profile'},
                {'name': 'Blog', 'link': 'posts'},
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
    font-weight: normal;
    letter-spacing: 0.08rem;
    text-decoration: none;
    color: #000;
    font-size: 1.4rem;
    transition: .3s;
    margin-right: 20px;    
    position: relative;
}
.link:hover {
    opacity: .6;
    transform: .3s
}
</style>

<template>
    <nuxt-link to="/" class="link">
        <h1 class="item">Shinado Kebukawa</h1>
    </nuxt-link>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    transition: .2s;
}
.link:hover {
    opacity: .8;
    transition: .2s;
}
.item {
    font-size: 1.8rem;
    font-style: italic;
    font-weight: thin;
    letter-spacing: 0.08rem;
    color: #fff;
    display: inline-block;
    background-color: black;
    padding: 10px 20px;
}
</style>

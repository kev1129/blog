<template>
<div>
    <v-container>
        <v-layout  align-start justify-start row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <div class="ifrm-container">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOpxBGo2_eycSSDEGSDjcJK4t96zezeJStI8ke9fztPaA_SQ/viewform?embedded=true" width="640" height="756" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます...</iframe>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
</script>

<style lang="scss" scoped>
.ifrm-container {
    position: relative;
    width: 100%;
    padding-top: 75%;
}
 
.ifrm-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
</style>

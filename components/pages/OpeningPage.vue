<template>
    <div class="bg-black h-screen w-screen fixed">
        <div class="h-full w-full relative">
            <div class="container mx-auto absolute top-1/3 scale-50 text-center">
                <h1 class="text-white text-5xl m-10">{{siteTitle}}</h1>
                <div class="p-10 animate-pulse">
                    <button @click="moveToGame" class="border-8 border-green-300 rounded-3xl py-5 px-10 text-green-300 text-3xl">PLAY</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports =  {
    name: 'opening-page',
    props: {
        siteTitle: {
            type: String,
            default: "Let's Fukuoka"
        },
        isPlaying: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        moveToGame() {
            this.$emit("move-to-game");
        }
    }
}
</script>

<style lang="css" scoped>
</style>
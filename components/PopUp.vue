<template>
    <div id="popup">
        <h1 id="popup_title"></h1>
        <div class="m-5 p-1">
            <div id="municipality_content"
                class="text-white text-xl text-center"
            ></div>
        </div>
        <div class="m-5 p-1">
            <a id="municipality_url" target='_blank'
                class="text-white text-lg underline text-center hover:shadow"
            >市町村のサイトはこちら</a><br>
        </div>
        <div class="m-5 p-1" v-if="correctCount > 1">
            <p class="text-green-300 text-lg text-center">
                {{correctCount + "問連続で正解中！"}}
            </p>
        </div>
        <div class="m-5 p-1">
            <button @click="closePopUp"
                class="transition-colors duration-100 border-4 border-green-300 rounded-2xl py-5 px-10 text-green-300 text-3xl bg-black hover:bg-green-300 hover:text-white"
            >NEXT</button>
        </div>
    </div>
</template>

<script>
module.exports =  {
    name: 'PopUp',
    props: {
        correctCount: {
            type: Number,
            default: 0,
        }
    },
    methods: {
        closePopUp() {
            this.$emit("close-pop-up");
        }
    },
}
</script>

<style lang="css" scoped>
</style>
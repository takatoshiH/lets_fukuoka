<template>
    <div class='roulette'>
        <button
        class="transition-colors duration-100 border-4 border-green-300 rounded-2xl h-20 hover:bg-green-300 hover:text-white text-green-300 w-2/3 text-3xl"
        @click="startRoulette">
            {{"START!"}}
        </button>
    </div>
</template>

<script>
module.exports =  {
  name: 'Roulette',
  props: {
    readyToStart : {
        type: Boolean,
        default: true,
    },
    rouletteActive : {
        type: Boolean,
        default: false,
    }
  },
  methods: {
    startRoulette() {
        this.$emit('start-roulette')
    },
    stopRoulette() {
        this.$emit('stop-roulette')
    }
  }

}
</script>

<style lang="css" scoped>
</style>
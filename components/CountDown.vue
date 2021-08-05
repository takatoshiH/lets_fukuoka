<template>

    <div v-model="countDownNumber"></div>

</template>

<script>
module.exports = {

  name: 'CountDown',
  props: {
    count: {
        type: Number,
        default: 10
    }
  },
  methods: {
    passedMethod () {
        this.$emit('passed-method')
    }
    countDown() {}
  }

}
</script>

<style lang="css" scoped>
</style>
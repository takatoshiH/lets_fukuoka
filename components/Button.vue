<template>
    <button
        @click="method"
        class = "border-8 border-green-300 rounded-3xl
                 py-5 px-10
                 text-green-300 text-3xl"
        :class = "addClass"
                 >
        {{ buttonLabel }}
    </button>
</template>

<script>
module.exports = {

  name: 'Button',
  prpos: {
    buttoLabel : {
        type: String,
        default: "BUTTON"
    }
    addClass : {
        type : String,
        default : ""
    }
  },
  methods: {
    method() {
        this.$emit('method')
    }
  }

}
</script>

<style lang="css" scoped>
</style>
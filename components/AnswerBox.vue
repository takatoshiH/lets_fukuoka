<template>
    <div class='answer_box'>
        <div class="option" id="answers" v-show="waitingAnswer">
            <button class="transition-colors duration-100 border-4 border-green-300 rounded-2xl h-20 hover:bg-green-300 hover:text-white text-green-300">
                <div class='answer'
                     :class="{answer_active: waitingAnswer, answer_inactive: !waitingAnswer}"
                     id='answer_1'
                     @click="answer($event)"></div>
            </button>
            <button class="transition-colors duration-100 border-4 border-green-300 rounded-2xl h-20 hover:bg-green-300 hover:text-white text-green-300">
            <div class='answer'
                 :class="{answer_active: waitingAnswer, answer_inactive: !waitingAnswer}"
                 id='answer_2'
                 @click="answer($event)"></div>
            </button>
            <button class="transition-colors duration-100 border-4 border-green-300 rounded-2xl h-20 hover:bg-green-300 hover:text-white text-green-300">
            <div class='answer'
                 :class="{answer_active: waitingAnswer, answer_inactive: !waitingAnswer}"
                 id='answer_3'
                 @click="answer($event)"></div>
            </button>
            <button class="transition-colors duration-100 border-4 border-green-300 rounded-2xl h-20 hover:bg-green-300 hover:text-white text-green-300">
            <div class='answer'
                 :class="{answer_active: waitingAnswer, answer_inactive: !waitingAnswer}"
                 id='answer_4'
                 @click="answer($event)"></div>
            </button>
        </div>
    </div>
</template>

<script>
module.exports = {
  name: 'AnswerBox',
  props: {
    waitingAnswer: {
        type: Boolean,
        default: true
    }
  },
  methods: {
    answer(event) {
        this.$emit('answer', event)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
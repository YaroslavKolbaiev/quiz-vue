<script setup>
import TypeQuestion from './TypeQuestion.vue';
import TypeImage from './TypeImage.vue';
import { defineProps, ref, defineEmits } from 'vue';

const emit = defineEmits(['answer']);

const { question } = defineProps(['question']);
const selectAnswer = ref(null);

const emitAnswer = (selectedOption) => {
  emit('answer', selectedOption);
  selectAnswer.value = null;
};
</script>

<template>
  <h1 class="question_title">{{ question.question }}</h1>
  <div class="question_image" v-if="question.image">
    <img class="" :src="question.image" alt="hello" />
  </div>
  <div :class="{ isImageType: question.type === 'image' }">
    <div
      class="question_container"
      v-for="option in question.options"
      :key="option.id"
      @click="selectAnswer = option.id"
    >
      <TypeQuestion
        v-if="question.type === 'quetion'"
        :option="option"
        :selectAnswer="selectAnswer"
      />
      <TypeImage
        v-if="question.type === 'image'"
        :option="option"
        :selectAnswer="selectAnswer"
      />
    </div>
  </div>
  <button
    :disabled="!selectAnswer"
    class="question_next"
    type="button"
    @click="emitAnswer(selectAnswer)"
  >
    далее
  </button>
</template>

<style lang="scss">
.question {
  background-color: rgba(242, 243, 243, 0.5);
  height: 50px;
  display: flex;
  align-items: center;
  gap: 39px;
  padding-left: 35px;

  &_title {
    color: #fff;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 41px;
  }

  &_container {
    max-width: 370px;
    margin: auto;
    margin-bottom: 8px;
    cursor: pointer;
  }

  &_text {
    color: #ffffff;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    max-width: 240px;
  }

  &_selector {
    width: 20px;
    height: 20px;
    border: 1px solid #ffff;
    border-radius: 50%;

    &_active {
      background-color: #2950c2;
      border: 1px solid #272727;
    }
  }

  &_selected {
    background-color: #ffc700;
  }

  &_next {
    width: 189px;
    height: 41px;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8e8e8e;
    border-radius: 20px;
    border: none;

    &:active {
      background-color: #ffc700;
    }
  }

  &_image {
    text-align: center;
    margin-bottom: 23px;

    &-container {
      display: flex;
    }

    &-text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 41px;
      height: 42px;
      background-color: #ffffff;
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      text-transform: capitalize;
      color: #0d0c11;
      cursor: default;
    }
  }
}

.isImageType {
  display: flex;
}
</style>

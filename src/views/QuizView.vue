<script setup>
  import data from '../data/data.json';
  import Questions from '../components/Questions.vue';
  import Result from '../components/Result.vue';
  import { computed, ref } from 'vue';

  const currentQuestion = ref(0);
  const result = ref(false);

  const progress = computed(
    () => `${(currentQuestion.value / data.length) * 100}%`
  );

  const onNextQuestion = (selectedOption) => {
    if (data.length - 1 === currentQuestion.value) {
      result.value = true;
    }

    currentQuestion.value++
  }
</script>

<template>
  <div class="quiz">
    <div class="quiz_progress-container">
      <div class="quiz_progress">
        <div class="quiz_progress-bar" :style="{ width: progress }" />
      </div>
    </div>
    <Questions v-if="!result" :question="data[currentQuestion]" @answer="onNextQuestion" />
    <Result v-else />
  </div>
</template>

<style scoped lang="scss">
  .quiz {
    max-width: 370px;
    margin: auto;

    &_progress {
      width: 260px;
      height: 11px;
      background: #F2F3F3;
      border-radius: 10.5px;
      margin-bottom: 17px;

      &-container {
        display: flex;
        justify-content: center;
        padding-top: 17px;
      }

      &-bar {
        background: #3BDE7C;
        height: 100%;
        border-radius: 10.5px;
      }
    }
  }
</style>


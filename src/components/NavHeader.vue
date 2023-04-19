<script setup>
  import { defineProps } from "vue";

  const { text } = defineProps(["text"]);
</script>

<template>
  <div class="isQuizPage">
    <img class="isQuizPage_image" src="../assets/brain_bk3.svg" alt="brain" />
    <p class="isQuizPage_text">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
  .isQuizPage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    &_image {
      width: 48px;
      height: 48px;
    };

    &_text {
      font-family: 'Yeseva One';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFC700;
    }
  }
</style>
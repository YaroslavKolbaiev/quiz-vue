<script setup>
  import { defineProps } from "vue";
  const { option, selectAnswer } = defineProps(["option", "selectAnswer"]);
</script>

<template>
  <div class="question_image-container">
    <div
      class="question_image-text"
      :class="{ selected: option.id === selectAnswer }"
    >
      {{ option.text }}
    </div>
  </div>
</template>

<style scoped>
  .selected {
    border: 2px solid #ffc700;
  }
</style>

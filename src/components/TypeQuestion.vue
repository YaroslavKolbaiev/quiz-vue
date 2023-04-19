<script setup>
  import { defineProps } from "vue";
  const { option, selectAnswer } = defineProps([
    "option",
    "selectAnswer",
  ]);
</script>

<template>
  <div
    class="question"
    :class="{ question_selected: option.id === selectAnswer }"
  >
    <div
      class="question_selector"
      :class="{ question_selector_active: option.id === selectAnswer }"
    />
    <p class="question_text">{{ option.text }}</p>
  </div>
</template>

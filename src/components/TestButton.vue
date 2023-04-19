<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink to="/quiz" class="button">пpойти тест</RouterLink>
</template>

<style scoped lang="scss">
  .button {
    width: 189px;
    height: 41px;
    background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
    border: none;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 41px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0d0c11;
    margin-bottom: 22px;
    transition: 0.5s;

    &:hover {
      transform: scale(110%);
    }
  }
</style>

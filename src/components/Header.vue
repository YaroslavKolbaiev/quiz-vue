<script setup>
import { RouterLink } from 'vue-router';
import TestButton from './TestButton.vue';

</script>

<template>
  <div class="header">
    <h2 class="header_subtitle">Пройдите точный и быстрый</h2>
    <h1 class="header_title">тест на <br> определение <br> IQ</h1>
    <img src="../assets/brain_bk3.svg" alt="brain">
    <TestButton />
    <p class="header_text">и получите рекомендации по развитию своего интеллекта</p>
    <p class="header_text header_text--white">и улучшению финансового благосостояния и личной жизни</p>
    <RouterLink to="/info" class="header_arrow">
      <img src="../assets/arrow.svg" alt="arrow">
    </RouterLink>
    <p class="header_foot">подробнее</p>
  </div>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 27px;
    padding-left: 15px;
    padding-right: 15px;

    &_subtitle {
      color: #FFFFFF;
      font-family: 'PT Serif', serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 40px;
    }

    &_title {
      font-family: 'Yeseva One';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 35px;
      text-align: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #FFC700;
    }

    &_text {
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFC700;

      &--white {
        color: #FFFFFF;
        margin-bottom: 11px;
      }
    }

    &_arrow {
      width: 16px;
      height: 16px;
      background-color: #FFFFFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
    }

    &_foot {
      color: #FFFFFF;
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 11px;
      text-align: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 11px;
    }
  }
</style>

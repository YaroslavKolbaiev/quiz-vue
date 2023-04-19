<script setup>
  import { RouterLink } from 'vue-router';
  import TestButton from './TestButton.vue';
</script>

<template>
  <div class="footer">
    <p class="footer_top-text">Прохождение теста займет у вас не более 
      <span class="yellow-text">12 минут</span>, а его результаты вы сможете
      <span class="yellow-text">использовать всю жизнь.</span>
    </p>
    <div class="footer_mainText-container">
      <p class="footer_mainText">
        Профессиональная интерпретация и детально проработанные рекомендации 
        позволят вам качественно изменить все аспекты своей жизни: от финансового 
        до любовного.
      </p>
      <img class="flash-right" src="../assets/lightning_PNG9.png" alt="lightning">
      <img class="flash-left" src="../assets/lightning_PNG9(1).png" alt="lightning">
    </div>
    <RouterLink to="/quiz" class="footer_button">пpойти тест</RouterLink>
    <p class="footer_year">© 2019</p>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_top-text {
      max-width: 300px;
      color: #fff;
      padding-left: 14px;
      margin-bottom: 14px;
      font-family: 'Merriweather';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.05em;
    }

    &_mainText-container {
      position: relative;
      padding: 12px;
      margin-bottom: 33px;
    }

    &_mainText {
      max-width: 300px;
      background: rgba(243, 243, 242, 0.8);
      padding-left: 14px;
      padding-right: 15px;
      padding-top: 29px;
      padding-bottom: 31px;
      border-radius: 20px;
      font-family: 'Merriweather';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.05em;
      color: #181818
    }

    &_button {
      width: 189px;
      height: 41px;
      background: transparent;
      border: 1px solid #FFFFFF;
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
      color: #fff;
      margin-bottom: 52px;
      transition: 0.5s;

      &:hover {
        transform: scale(110%);
      }
    }

    &_year {
      color: rgba(255, 255, 255, 0.5);
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.05em;
    }
  }

  .flash-right {
    position: absolute;
    right: 12px;
    top: -10px;
  }

  .flash-left {
    position: absolute;
    top: 80px;
  }

  .yellow-text {
    color: #FFC700;
  }
</style>
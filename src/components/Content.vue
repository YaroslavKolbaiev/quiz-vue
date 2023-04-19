<script setup>
  import TestButton from './TestButton.vue';
</script>

<template>
  <div class="content">
    <p class="content_text">Также по результатам теста <b>вы получите</b> подробные <b>советы</b>
      по определению наиболее перспективной <b>для вашего типа интеллекта сферы
      деятельности,</b> которая принесет вам скорейший финансовый результат.
    </p>
    <div>
        <img src="../assets/brain.png" alt="">
    </div>
    <TestButton />
  </div>
</template>

<style scoped lang="scss">
  .content {
    background-color: #FFF;
    padding-top: 38px;
    padding-left: 11px;
    padding-right: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_text {
      max-width: 298px;
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #272727;
      margin-bottom: 38px;
    }
  }
</style>
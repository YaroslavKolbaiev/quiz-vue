<template>
  <div class="about">
    <p class="about_text">
      Профессиональный IQ-тест позволяет не только определить коэффициент
      вашего интеллекта, но и выработать список рекомендаций для повышения
      этого показателя.
      <img class="about_ticks about_ticks--top" src="../assets/“.svg" alt="ticks">
      <img class="about_ticks about_ticks--bottom" src="../assets/“(2).svg" alt="ticks">
    </p>
  </div>
</template>

<style scoped lang="scss">
  .about {
    background: linear-gradient(333deg, rgba(38, 91, 199, 0.96) 10%, rgba(80,143,207,1) 100%);
    display: flex;
    justify-content: center;
    padding-top: 83px;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 38px;

    &_text {
      max-width: 248px;
      text-align: center;
      font-family: 'Yeseva One';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: #fff;
      position: relative;
    }

    &_ticks {
      position: absolute;

      &--top {
        top: -25px;
        left: -25px;
      }

      &--bottom {
        bottom: -25px;
        right: -25px;
      }
    }
  }
</style>
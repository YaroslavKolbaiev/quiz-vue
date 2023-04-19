<script setup>
  import { computed, onMounted, ref, watch } from 'vue';
  import useLoadInfo from '../composables/useLoadInfo';

  const time = ref(601);
  const infoFromServer = ref(null);

  const loadInfo = async () => {
    const {data} = await useLoadInfo();
    infoFromServer.value = data;
  }

  const minutes = computed(() => {
    return `${Math.floor(time.value / 60)}`
  })

  const seconds = computed(() => {
    return time.value % 60 < 10 ? `0${time.value % 60}` : `${time.value % 60}`
  })

  onMounted(() => {
    time.value--
  })

  watch(time, () => {
    const timeOutFn = setTimeout(() => {
      time.value--
    }, 1000)
    if (time.value === 0) {
      clearTimeout(timeOutFn)
    }
  })
</script>

<template>
  <div class="result">
    <h2 class="result_title">Ваш результат рассчитан:</h2>
    <p class="result_subtitle">
      <span style="text-decoration: underline;">вы относитесь к 3%</span>
      респондентов, чей уровень интеллекта более чем на
      15 пунктов отличается от среднего в большую или меньшую сторону! 
    </p>
    <h1 class="result_alertText">Скорее получите свой результат!</h1>
    <p class="result_copyrights">В целях защиты персональных
      данных результат теста, их подробная интерпретация и рекомендации 
      доступны в виде голосового сообщения по звонку с вашего мобильного телефона
    </p>
    <p class="result_timerText">Звоните скорее, запись доступна всего</p>
    <p style="font-size: 20px;" class="result_timerText">{{ minutes }} : {{ seconds }} МИНУТ</p>
    <div @click="loadInfo" v-if="time !== 0" class="result_contactInfo">
      <img src="../assets/phone.svg" alt="">
      <p>Позвонить и прослушать результат</p>
    </div>
    <div v-if="infoFromServer" class="infoFromServer">Strongest jedi is {{ infoFromServer?.name }}</div>
  </div>
</template>

<style scoped lang="scss">
  .result {
    max-width: 370px;
    margin: auto;
    padding-top: 18px;

    &_title {
      font-family: "PT Serif";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 13px;
    }

    &_subtitle {
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: justify;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 22px;
    }

    &_alertText {
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #3BDE7C;
      margin-bottom: 12px;
    }

    &_copyrights {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 8px;
      line-height: 14px;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #FFFFFF;
      background: #1C2741;
      border-radius: 6px;
      padding: 15px;
    }

    &_timerText {
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #3BDE7C;
    }

    &_contactInfo {
      background-color: #EB1B00;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 31px;
      color: #FFFFFF;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.05em;
      gap: 18px;
      cursor: pointer;
    }
  }

  .infoFromServer {
    background-color: #ffffff;
  }
</style>

<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Spinner from './Spinner.vue';

  const router = useRouter();

  onMounted(() => {
    setTimeout(() => {
      router.push('/result')
    }, 2000)
  })
</script>

<template>
  <div class="result">
    <h1 class="result_title">обработка <br> результатов</h1>
    <Spinner />
    <p class="result_text">Определение стиля мышления.......................
      ...........................................
    </p>
  </div>
</template>

<style scoped lang="scss">
  .result {

    &_title {
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 400;
      font-size: 23px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFFFFF;
    }

    &_text {
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFFFFF;
      text-align: justify;
    }
  }
</style>
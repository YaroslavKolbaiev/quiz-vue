<script setup>
  import About from '../components/About.vue';
  import Header from '../components/Header.vue';
  import Content from '../components/Content.vue';
  import Footer from '../components/Footer.vue';
  import { ref, watch } from 'vue';
  import { useIsSideMenu } from '../store/sideMenu';

  const { isSideMenu } = useIsSideMenu()

  const homePageDisplay = ref('');

  watch(isSideMenu, () => {
    if (isSideMenu.value) {
      homePageDisplay.value = 'isOffDisplay'
    } else {
      homePageDisplay.value = ''
    }
  })
</script>

<template>
  <main :class="homePageDisplay">
    <Header />
    <About />
    <Content />
    <Footer />
  </main>
</template>

<style scoped>
  .isOffDisplay {
    display: none;
  }
</style>

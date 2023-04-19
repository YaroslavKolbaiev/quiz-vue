<script setup>
  import SideMenu from './SideMenu.vue'
  import {useIsSideMenu} from '../store/sideMenu'
  import { useRoute } from "vue-router";
  import NavHeader from './NavHeader.vue';

  const { isSideMenu, onMenuClick } = useIsSideMenu()

  const route = useRoute();
</script>

<template>
  <div class="nav">
    <Transition name="sideMenu">
      <SideMenu v-if="isSideMenu.value" />
    </Transition>
    <button @click="onMenuClick" type="button" class="burger">
      <div class="burger_layer"></div>
      <div class="burger_layer"></div>
      <div class="burger_layer"></div>
    </button>
    <NavHeader v-if="route.path === '/quiz'" text="тест на определение IQ" />
    <NavHeader v-if="route.path === '/result'" text="Готово!" />
  </div>
</template>

<style lang="scss">
  .nav {
    position: relative;
    background-color: #181818;
    height: 46px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .burger {
    width: 46px;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
    padding: 0;
    background: none;
    border: none;

    &:hover {
      background-color: rgba(211, 211, 211, 0.3);
    }
  }

  .burger_layer {
    width: 24px;
    height: 2px;
    background-color: #DADADA;
  }

  .sideMenu-enter-from {
    transform: translateX(-100%);
  }

  .sideMenu-enter-to {
    transform: translateX(0);
  }

  .sideMenu-enter-active {
    transition: all 0.5s ease;
  }

  .sideMenu-leave-from {
    transform: translateX(0);
  }

  .sideMenu-leave-to {
    transform: translateX(-100%);
  }

  .sideMenu-leave-active {
    transition: all 0.5s ease;
  }
</style>


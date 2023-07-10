<script setup>
import { RouterLink } from "vue-router";
import { useIsSideMenu } from "../store/sideMenu";

const { onMenuClick } = useIsSideMenu();
</script>

<template>
  <div class="sideMenu">
    <div class="closeSideMenu">
      <button class="closeSideMenu_button" @click="onMenuClick">
        <img src="../assets/cross.svg" alt="close" />
      </button>
    </div>
    <div class="sideMenu_nav">
      <RouterLink
        @click="onMenuClick"
        class="sideMenu_link"
        active-class="active_link"
        to="/"
      >
        Главная
      </RouterLink>
      <RouterLink
        @click="onMenuClick"
        class="sideMenu_link"
        active-class="active_link"
        to="/info"
      >
        Информация о тесте
      </RouterLink>
      <RouterLink
        @click="onMenuClick"
        class="sideMenu_link"
        active-class="active_link"
        to="/quiz"
      >
        пройти тест
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sideMenu {
  background-color: #181818;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1;

  &_nav {
    display: flex;
    flex-direction: column;
    padding-left: 23px;
    gap: 27px;
  }

  &_link {
    color: #ffffff;
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
  }
}

.closeSideMenu {
  display: flex;
  justify-content: flex-end;
  padding-right: 13px;
  padding-top: 18px;
  margin-bottom: 64px;

  &_button {
    background: none;
    border: none;
    padding: 0;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.active_link {
  color: #f4ce0c;
}
</style>

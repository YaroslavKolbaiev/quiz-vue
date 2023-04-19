import { defineStore } from "pinia";
import { reactive } from "vue";

export const useIsSideMenu = defineStore("sideMenu", () => {
  const isSideMenu = reactive({
    value: false
  });

  const onMenuClick = () => {
    isSideMenu.value = !isSideMenu.value
  };

  return {
    isSideMenu,
    onMenuClick,
  };
});

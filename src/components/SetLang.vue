<template>
  <div class="lang-icon" @click="showMenuHandler">
    <img :src="LangIcon" alt="lang" width="100%">
  </div>
  <transition name="fade">
      <div class="lang-menu" v-show="showMenu" v-click-outside="hideMenu">
        <div 
          v-for="item in LOCALE_OPTIONS" :key="item.value" 
          @click="changeLocale(item.value)" 
          :class="{
            'lang-menu__item--active': currentLocale === item.value,
            'lang-menu__item': true
            }">
          {{ item.label }}
        </div>
      </div>
    </transition>
</template>

<script setup lang="ts">
  import { LOCALE_OPTIONS } from "@/i18n/index";
  import { useLocale } from "@/hooks/locale";
  import { ref } from "vue";
  import LangIcon from '@/assets/lang.svg'

  defineOptions({
    name: 'SetLang'
  })

  const showMenu = ref(false)
  const showMenuHandler = () => {
    showMenu.value = !showMenu.value
  }

  const hideMenu = () => {
    showMenu.value = false
  }
  
  const { changeLocale, currentLocale } = useLocale()
</script>

<style scoped lang="scss">
.lang-icon {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.18rem;
  background-color: #fff;
}
.lang-menu {
  width: 160px;
  padding: 10px;
  background-color: white;
  position: absolute;
  top: 2.6rem;
  right: 3.4rem;
  box-shadow: 0 0 10px #00000030;
  z-index: 1;
  border-radius: 7px;

  &__item {
    padding: 10px;
    background-color: #00000000;
    border-radius: 5px;
    cursor: pointer;

    &--active,&:active {
      background-color: #5985eb;
      color: white;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-0.12rem);
  opacity: 0;
}
</style>
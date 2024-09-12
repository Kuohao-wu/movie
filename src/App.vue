<template>
   <router-view></router-view>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLocale } from "@/hooks/locale";
import { watch } from "vue";

const { t } = useI18n();
const { currentLocale } = useLocale()

watch(currentLocale, (val) => {
   document.title = `OMDB - ${t('common.page.title')}`
}, {
   immediate: true
})

</script>
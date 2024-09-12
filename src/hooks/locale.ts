import { useI18n } from 'vue-i18n';
import { computed } from "vue";


export function useLocale() {
  const i18n = useI18n();
  const currentLocale = computed(() => {
    return i18n.locale.value;
  });

  const changeLocale = (lang: string) => {
    if (i18n.locale.value === lang) {
      return;
    }
    i18n.locale.value = lang;
    localStorage.setItem('lang', lang)
  }

   return {
     currentLocale,
     changeLocale
   }
}
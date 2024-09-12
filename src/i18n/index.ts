import { createI18n } from 'vue-i18n';
import en from './en-US/index';
import cn from './zh-CN/index';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN', shortName: '中' },
  { label: 'English', value: 'en-US', shortName: 'EN' },
] as const

const getLocale = () => {
    const langIsSet = localStorage.getItem('lang')
    if (langIsSet !== null && langIsSet !== 'withSystem') {
        return langIsSet
    } else {
        return window.navigator.language
    }
};

export const i18n = createI18n({
  locale: getLocale(),
  fallbackLocale: 'en-US',
  legacy: false,
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': cn,
  },
});

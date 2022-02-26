import { createApp, nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import zh from './i18n/zh.json'
import en from './i18n/en.json'
import tw from './i18n/tw.json'
import es from './i18n/es.json'
const messages = {
    en, tw, zh, es
}
const i18n = createI18n({

    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages

})

export const SUPPORT_LOCALES = ['en', 'ja']

export function setupI18n(options = { locale: 'en' }) {
    const i18n = createI18n(options)
    setI18nLanguage(i18n, options.locale)
    return i18n
}

export function setI18nLanguage(i18n, locale) {
    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale
    } else {
        i18n.global.locale.value = locale
    }
    document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
    const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./i18n/${locale}.json`
    )
    i18n.global.setLocaleMessage(locale, messages.default)
    return nextTick()
}

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
createApp(App).use(router).use(i18n).mount('#app')

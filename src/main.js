import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
//import cn from './cn.json'
import en from './i18n/en.json'
import tw from './i18n/tw.json'
//import es from './es.json'
const messages = {
    en,tw
}
const i18n = createI18n({

    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages

})
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
createApp(App).use(router).use(i18n).mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import pinia from './store/pinia';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

createApp(App).use(router).use(pinia).use(PrimeVue).mount('#app')

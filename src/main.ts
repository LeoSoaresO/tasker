import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router';
import pinia from './store/pinia';
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

createApp(App).use(router).use(pinia).use(PrimeVue).use(ToastService).mount('#app')

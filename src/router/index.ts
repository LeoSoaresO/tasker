// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Adicione outras rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

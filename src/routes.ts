import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/main',
      component: () => import('./pages/MainPage.vue'),
    },
    {
      path: '/stat',
      component: () => import('./pages/StatPage.vue'),
    },
  ],
  history: createWebHistory(),
});

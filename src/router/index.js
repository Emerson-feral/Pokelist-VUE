import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/List.vue';
import Detail from '../components/Detail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/detail:id',
      name: 'detail',
      component: Detail
    }
  ]
});

export default router;

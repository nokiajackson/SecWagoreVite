import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import MainLayout from '@/components/MainLayout.vue';
import EntryRecordBefore from '@/components/EntryRecordBefore.vue';
import EntryRecordAfter from '@/components/EntryRecordAfter.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login,
      },
      {
        path: 'entryrecord',
        name: 'EntryRecordAfter',
        component: EntryRecordAfter,
      },
    ],
  },
  {
    path: '/entryrecord',
    name: 'EntryRecordBefore',
    component: EntryRecordBefore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

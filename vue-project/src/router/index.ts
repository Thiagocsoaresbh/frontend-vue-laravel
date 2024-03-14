import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth'; 
import RegisterView from '@/views/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/',
      redirect: '/register',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: () => import('../views/ExpensesView.vue')
    },
    {
      path: '/add-purchase',
      name: 'AddPurchase',
      component: () => import('../views/AddPurchaseView.vue')
    },
    {
      path: '/accepted-checks',
      name: 'AcceptedChecks',
      component: () => import('../views/AcceptedChecksView.vue')
    },
    {
      path: '/deposit-check',
      name: 'DepositCheck',
      component: () => import('../views/DepositCheckView.vue')
    },
    {
      path: '/deposit-check/completed',
      name: 'DepositCheckCompleted',
      component: () => import('../views/DepositCheckCompletedView.vue')
    },
    {
      path: '/checks',
      name: 'CheckList',
      component: () => import('../views/ChecklistView.vue')
    },
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});


export default router;

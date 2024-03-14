import { createRouter, createWebHistory } from 'vue-router';
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUpView
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

export default router;

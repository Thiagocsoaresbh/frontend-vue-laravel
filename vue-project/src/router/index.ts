import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import BalanceHomeView from '../views/BalanceHomeView.vue';
import ExpensesView from '../views/ExpensesView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView },
  { path: '/balance', component: BalanceHomeView },
  { path: '/expenses', component: ExpensesView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

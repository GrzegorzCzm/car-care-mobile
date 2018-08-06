import HomePage from './pages/home.vue';
import Expenses from './pages/expenses.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '(.*)',
    component: NotFoundPage
  },
  {
    path: '(/expenses)',
    component: Expenses
  }
];

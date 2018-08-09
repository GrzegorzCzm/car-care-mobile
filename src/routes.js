import HomePage from './pages/home.vue';
import Expenses from './pages/expenses.vue';
import Refueling from './pages/refueling.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '(/expenses)',
    component: Expenses
  },
  {
    path: '(/refueling)',
    component: Refueling
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];

import HomePage from "./pages/home.vue";
import Expenses from "./pages/expenses.vue";
import Refueling from "./pages/refueling.vue";
import NotFoundPage from "./pages/not-found.vue";


export default [
  {
    path: "/",
    component: HomePage,
    title: "Home"
  },
  {
    path: "(/expenses)",
    component: Expenses,
    title: "Expenses"
  },
  {
    path: "(/refueling)",
    component: Refueling,
    title: "Refueling"
  },
  {
    path: "(.*)",
    component: NotFoundPage,
    title: "Upsss"
  }
];

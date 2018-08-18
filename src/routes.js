import HomePage from "./pages/home.vue";
import Expenses from "./pages/expenses.vue";
import Refueling from "./pages/refueling.vue";
import NotFoundPage from "./pages/not-found.vue";

const onPageInit = (event, page) =>{
console.log("onPageInit from routes", event, page);
}

export default [
  {
    path: "/",
    component: HomePage,
    title: "Home",
    on: {
      pageInit: onPageInit
    }
  },
  {
    path: "(/expenses)",
    component: Expenses,
    title: "Expenses",
    on: {
      pageInit: onPageInit
    }
  },
  {
    path: "(/refueling)",
    component: Refueling,
    title: "Refueling",
    on: {
      pageInit: onPageInit
    }
  },
  {
    path: "(.*)",
    component: NotFoundPage,
    title: "Upsss",
    on: {
      pageInit: onPageInit
    }
  }
];

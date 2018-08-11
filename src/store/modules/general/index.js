import * as getters from "./getters";
import * as actions from './actions'

import { UPDATE_TITLE, UPDATE_ACTIVE_PAGE } from "./mutation-types";

// initial state
const initialState = {
  navigationBarTitle: "Home",
  activePage: "/"
};

// mutations
const mutations = {
  [UPDATE_TITLE] (state, newTitle) {
    state.navigationBarTitle = newTitle;
  },
  [UPDATE_ACTIVE_PAGE] (state, newActivePage) {
    state.activePage = newActivePage;
  },
};


export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
};

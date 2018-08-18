import * as getters from "./getters";
import * as actions from './actions'

import { UPDATE_TITLE } from "./mutation-types";

// initial state
const initialState = {
  navigationBarTitle: "Home",
  activePage: "/"
};

// mutations
const mutations = {
  [UPDATE_TITLE] (state, newTitle) {
    state.navigationBarTitle = newTitle;
  }
};


export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
};

import * as getters from "./getters";
import * as actions from './actions'

import { 
ADD_EXPENSE, ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILED,
GET_EXPENSE, GET_EXPENSE_SUCCESS, GET_EXPENSE_FAILED,
GET_ALL_EXPENSES, GET_ALL_EXPENSES_SUCCESS, GET_ALL_EXPENSES_FAILED
} from "./mutation-types";

// initial state
const initialState = {
  expenses: [
      {id: 0, date: "2018-08-19", item: "tires", cost: 35, description: "some details here", address: "dummy address"},
      {id: 1, date: "2018-08-13", item: "wheels", cost: 85, description: "some more details here", address: "dummy second address"},
      {id: 2, date: "2018-07-10", item: "wheels", cost: 85, description: "some more details here", address: "dummy third address"}
    ]
};

// mutations
const mutations = {
};


export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
};

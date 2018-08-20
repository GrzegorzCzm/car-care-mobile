import { DELETE_EXPENSE, DELETE_EXPENSE_SUCCESS, DELETE_EXPENSE_FAILED } from "./mutation-types";

export function deleteExpense ({ commit }, expenseId) {
    commit(DELETE_EXPENSE, expenseId);
    
}
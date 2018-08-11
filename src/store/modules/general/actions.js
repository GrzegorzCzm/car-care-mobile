import uuid from 'uuid';

import { UPDATE_TITLE, UPDATE_ACTIVE_PAGE } from "./mutation-types";

export function updateTitle ({ commit }, newTitle) {
    commit(UPDATE_TITLE, newTitle)
}

export function setActivePage ({commit}, newPageIndex) {
    commit(UPDATE_ACTIVE_PAGE, newPageIndex)
}
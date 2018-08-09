import uuid from 'uuid';

import { UPDATE_TITLE } from "./mutation-types";

export function updateTitle ({ commit }, newTitle) {
    commit(UPDATE_TITLE, newTitle)
}
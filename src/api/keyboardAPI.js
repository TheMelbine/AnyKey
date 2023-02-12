import {http} from "./index";


export const getKeyboards = (params = {}) =>
    http
        .get(`/keyboard`, {
            params
        })


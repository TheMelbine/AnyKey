import {http} from "./index";
import {TParams} from "../components/Category/types";


export const getKeyboards = (params: TParams) =>
    http
        .get(`/keyboard`, {
            params
        })


import {TKeyboard} from "../keyboards/types";


export type TCartSlice = {
    keyboards: TCartKeyboard[]
}


export type TCartKeyboard = TKeyboard & { count: number }
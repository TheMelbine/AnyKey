import {bindActionCreators} from "@reduxjs/toolkit";
import {cartSliceActions} from "../slices/cart";
import {keyboardsSliceActions} from "../slices/keyboards/actions";
import {useAppDispatch} from "./useAppDispatch";

const storeActions = {...cartSliceActions, ...keyboardsSliceActions}
export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(storeActions, dispatch)
}
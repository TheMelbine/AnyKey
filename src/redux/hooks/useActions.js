import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartSliceActions} from "../slices/cart";
import {keyboardsSliceActions} from "../slices/keyboards/actions";

const storeActions = {...cartSliceActions, ...keyboardsSliceActions}
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(storeActions, dispatch)
}
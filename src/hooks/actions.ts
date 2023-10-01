import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { shopActions } from "../store/shop/shop.slice";

const actions = {
    ...shopActions
}

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}
import { combineReducers } from "redux";
import {user} from './User'
import cart from './Cart'

export default combineReducers({
    user,cart
})

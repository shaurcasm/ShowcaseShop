// In case I decide to add in more states needing another reducer
import { combineReducers } from 'redux';    // To make a reducer with sub-reducers.
import cartList from './cartList.js';

const rootReducer = combineReducers({
    cartList
});

export default rootReducer
import authReducer from "./AuthReducers";
import roleReducer from "./RoleReducers";
import userIdReducer from "./UseidReducers";
import {combineReducers} from 'redux';
// add reducers in global reducers
const allReducers = combineReducers({
    authenticated: authReducer,
    role: roleReducer,
    id: userIdReducer
})

export default allReducers;
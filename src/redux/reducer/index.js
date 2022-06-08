import {combineReducers} from 'redux'

import practiceReducer from './practice.reducer'
import userReducer from './user.reducer'

export default combineReducers({
    practice:practiceReducer,
    user:userReducer
})
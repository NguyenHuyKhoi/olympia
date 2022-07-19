import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { combineReducers } from "redux"
import practiceReducer from "./practice/reducer"
import authReducer from "./auth/reducer"
import commonReducer from "./common/reducer"
const reducers = combineReducers({
  practice: practiceReducer,
  auth: authReducer,
  common: commonReducer,
})

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["practice", "common"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}

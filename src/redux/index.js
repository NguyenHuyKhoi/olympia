import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { combineReducers } from "redux"
import playReducer from "./play/reducer"
import authReducer from "./auth/reducer"
import commonReducer from "./common/reducer"
import libraryReducer from "./library/reducer"
const reducers = combineReducers({
  play: playReducer,
  auth: authReducer,
  common: commonReducer,
  library: libraryReducer,
})

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["common", "play"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}

import {createStore,applyMiddleware }from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../reducer'



const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}

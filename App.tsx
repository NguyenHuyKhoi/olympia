import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useEffect } from "react"
import { Keyboard } from "react-native"
import Toast from "react-native-toast-message"

import { Provider, useDispatch, useSelector } from "react-redux"
import returnStoreAndPersistor from "./src/redux"
import { listenKeyboard } from "./src/redux/common/action"
import GuideScreen from "./src/screen/guide"
import HistoryScreen from "./src/screen/history"
import HomeScreen from "./src/screen/home.screen"
import Round1Screen from "./src/screen/rounds/round1"
import Round2Screen from "./src/screen/rounds/round2"
import Round3Screen from "./src/screen/rounds/round3"
import Round4Screen from "./src/screen/rounds/round4"
import Round4SetupScreen from "./src/screen/rounds/round4_setup"
import WaitingScreen from "./src/screen/waiting"
import SettingScreen from "./src/screen/setting"
import SigninScreen from "./src/screen/signin"
import SignupScreen from "./src/screen/signup"
import ToastHandler from "./src/util/toast"
import ResultScreen from "./src/screen/result"

const { store } = returnStoreAndPersistor()

const AppWrapper = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
      <Toast />
    </>
  )
}
const App = () => {
  const { notification } = useSelector((state) => state.common)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (notification) {
      ToastHandler.show(notification)
    }
  }, [notification])

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () =>
      dispatch(listenKeyboard(true))
    )
    Keyboard.addListener("keyboardDidHide", () =>
      dispatch(listenKeyboard(false))
    )
  }, [])

  const stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <stack.Navigator
        headerMode="none"
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!user ? (
          <>
            <stack.Screen name="signin" component={SigninScreen} />
            <stack.Screen name="signup" component={SignupScreen} />
          </>
        ) : (
          <>
            <stack.Screen name="home" component={HomeScreen} />
            <stack.Screen name="waiting" component={WaitingScreen} />
            <stack.Screen name="result" component={ResultScreen} />
            <stack.Screen name="round1" component={Round1Screen} />
            <stack.Screen name="round2" component={Round2Screen} />
            <stack.Screen name="round3" component={Round3Screen} />
            <stack.Screen name="round4" component={Round4Screen} />
            <stack.Screen name="round4_setup" component={Round4SetupScreen} />
            <stack.Screen name="guide" component={GuideScreen} />
            <stack.Screen name="history" component={HistoryScreen} />
            <stack.Screen name="setting" component={SettingScreen} />
          </>
        )}
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppWrapper

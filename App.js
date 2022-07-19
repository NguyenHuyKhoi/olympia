import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useEffect } from "react"
import Toast from "react-native-toast-message"

import { Provider, useSelector } from "react-redux"
import returnStoreAndPersistor from "./src/redux/"
import SigninScreen from "./src/screen/auth/signin.screen"
import SignupScreen from "./src/screen/auth/signup.screen"
import CompetitionHomeScreen from "./src/screen/competition/competition_home.screen"
import HomeScreen from "./src/screen/home.screen"
import PracticeHistoryScreen from "./src/screen/practice/history.screen"
import PracticeHomeScreen from "./src/screen/practice/home.screen"
import PracticeResultScreen from "./src/screen/practice/result.screen"
import PracticeRound1Screen from "./src/screen/practice/round1.screen"
import PracticeRound2Screen from "./src/screen/practice/round2.screen"
import PracticeRound3Screen from "./src/screen/practice/round3.screen"
import PracticeRound4Screen from "./src/screen/practice/round4.screen"
import PracticeRound4SetupScreen from "./src/screen/practice/round4_setup.screen"
import PracticeRuleScreen from "./src/screen/practice/rule.screen"
import PracticeWaitingScreen from "./src/screen/practice/waiting.screen"
import SettingAccountScreen from "./src/screen/setting/setting_account.screen"
import ToastHandler from "./src/util/toast"

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
  const { notif } = useSelector((state) => state.common)
  useEffect(() => {
    if (notif) {
      console.log("Notif content: ", notif)
      ToastHandler.show(notif)
    }
  }, [notif])

  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator
        headerMode="none"
        initialRouteName="signin"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="signin" component={SigninScreen} />
        <stack.Screen name="signup" component={SignupScreen} />
        <stack.Screen name="home" component={HomeScreen} />
        <stack.Screen name="practice_home" component={PracticeHomeScreen} />
        <stack.Screen
          name="practice_waiting"
          component={PracticeWaitingScreen}
        />
        <stack.Screen name="practice_round1" component={PracticeRound1Screen} />
        <stack.Screen name="practice_round2" component={PracticeRound2Screen} />
        <stack.Screen name="practice_round3" component={PracticeRound3Screen} />
        <stack.Screen name="practice_round4" component={PracticeRound4Screen} />
        <stack.Screen
          name="practice_round4_setup"
          component={PracticeRound4SetupScreen}
        />
        <stack.Screen name="practice_result" component={PracticeResultScreen} />
        <stack.Screen name="practice_rule" component={PracticeRuleScreen} />
        <stack.Screen
          name="practice_history"
          component={PracticeHistoryScreen}
        />
        <stack.Screen
          name="competition_home"
          component={CompetitionHomeScreen}
        />
        <stack.Screen name="setting_account" component={SettingAccountScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppWrapper

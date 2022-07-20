import { useNavigation } from "@react-navigation/native"
import React from "react"

import { View } from "react-native"
import { useDispatch } from "react-redux"
import FloatButton from "../component/float_button"
import Footer from "../component/footer"
import Header from "../component/header"
import PlayButton from "../component/play_button"
import { getPracticeRounds } from "../redux/practice/action"
import { INDIGO_3 } from "../util/palette"

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const onPlay = () => {
    dispatch(getPracticeRounds())
    navigation.navigate("waiting")
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Header />
      <PlayButton logo={"https"} onPress={onPlay} />
      <FloatButton
        position={{ bottom: 70, right: 20 }}
        logo={"https"}
        onPress={() => navigation.navigate("history")}
      />

      <FloatButton
        position={{ bottom: 140, right: 20 }}
        logo={"https"}
        onPress={() => navigation.navigate("guide")}
      />
      <FloatButton
        position={{ bottom: 210, right: 20 }}
        logo={"https"}
        onPress={() => navigation.navigate("setting")}
      />

      <Footer navigation={navigation} />
    </View>
  )
}

export default HomeScreen

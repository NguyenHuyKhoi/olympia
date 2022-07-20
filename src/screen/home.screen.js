import { useNavigation } from "@react-navigation/native"
import React from "react"

import { View } from "react-native"
import { useDispatch } from "react-redux"
import Header from "../component/header"
import IconButton from "../component/icon_button"
import PlayButton from "../component/play_button"
import { getRounds } from "../redux/play/action"
import { INDIGO_3 } from "../util/palette"
import { signout } from "../redux/auth/action"
const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const onPlay = () => {
    dispatch(getRounds())
    navigation.navigate("waiting")
  }

  const onSignOut = () => {
    dispatch(signout())
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_3,
        flexDirection: "column",
      }}
    >
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayButton logo={"https"} onPress={onPlay} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 50,
        }}
      >
        <IconButton logo={"https"} onPress={onSignOut} />

        <IconButton
          logo={"https"}
          onPress={() => navigation.navigate("history")}
        />

        <IconButton
          logo={"https"}
          onPress={() => navigation.navigate("guide")}
        />
        <IconButton
          logo={"https"}
          onPress={() => navigation.navigate("setting")}
        />
      </View>
    </View>
  )
}

export default HomeScreen

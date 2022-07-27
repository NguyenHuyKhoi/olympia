import { useNavigation } from "@react-navigation/native"
import React from "react"

import { View } from "react-native"
import { useDispatch } from "react-redux"
import Background from "../component/background"
import IconButton from "../component/icon_button"
import PlayButton from "../component/play_button"
import SmallHeader from "../component/small_header"
import { signout } from "../redux/auth/action"
import { startGame } from "../redux/play/action"
const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const onPlay = () => {
    dispatch(startGame())
    navigation.navigate("waiting")
  }

  const onSignOut = () => {
    dispatch(signout())
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Background />
      <SmallHeader style={{ marginTop: 30 }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayButton onPress={onPlay} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 10,
          paddingBottom: 20,
        }}
      >
        {/* <IconButton logo={"arrow-back"} onPress={onSignOut} /> */}

        {/* <IconButton
          logo={"settings"}
          onPress={() => navigation.navigate("setting")}
        /> */}

        <IconButton
          logo={"assignment"}
          onPress={() => navigation.navigate("guide")}
        />
        <IconButton
          logo={"assessment"}
          onPress={() => navigation.navigate("history")}
        />
      </View>
    </View>
  )
}

export default HomeScreen

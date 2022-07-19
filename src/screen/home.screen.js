import { useNavigation } from "@react-navigation/native"
import React, { Component } from "react"

import { View } from "react-native"
import Button from "../component/button"
import FloatButton from "../component/float_button"
import Footer from "../component/footer"
import HeaderComponent from "../component/header.component"
import PlayButton from "../component/play_button"
import { INDIGO_2, INDIGO_3, SILVER } from "../util/palette"

const HomeScreen = () => {
  const navigation = useNavigation()
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
      <HeaderComponent />
      <PlayButton logo={"https"} />
      <FloatButton
        position={{ bottom: 70, right: 20 }}
        logo={"https"}
        onPress={() => navigation.navigate("practice_history")}
      />

      <FloatButton
        position={{ bottom: 140, right: 20 }}
        logo={"https"}
        onPress={() => navigation.navigate("practice_history")}
      />
      <FloatButton
        position={{ bottom: 210, right: 20 }}
        logo={"https"}
        onPress={() => navigation.navigate("practice_history")}
      />

      <Footer navigation={navigation} />
    </View>
  )
}

export default HomeScreen

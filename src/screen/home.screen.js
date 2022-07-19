import { useNavigation } from "@react-navigation/native"
import React, { Component } from "react"

import { View } from "react-native"
import ButtonComponent from "../component/button.component"
import Footer from "../component/footer"
import HeaderComponent from "../component/header.component"
import { INDIGO_2, INDIGO_3, SILVER } from "../util/palette"

const HomeScreen = () => {
  const navigation = useNavigation
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

      <ButtonComponent
        label="Luyện tập"
        text_color={SILVER}
        background={INDIGO_2}
        onPress={() => navigation.navigate("practice_home")}
      />
      <ButtonComponent
        label="Thi đấu"
        text_color={SILVER}
        background={INDIGO_2}
        onPress={() => navigation.navigate("competition_home")}
      />

      <Footer navigation={navigation} />
    </View>
  )
}

export default HomeScreen

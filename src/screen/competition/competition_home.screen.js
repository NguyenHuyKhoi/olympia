import { useNavigation } from "@react-navigation/native"
import React, { Component } from "react"

import { View, StyleSheet, Alert } from "react-native"
import Button from "../../component/button"
import Footer from "../../component/footer"
import HeaderComponent from "../../component/header.component"
import { INDIGO_2, SILVER, INDIGO_3 } from "../../util/palette"
import ToastHandler from "../../util/toast"
const CompetitionHomeScreen = () => {
  const navigation = useNavigation()

  const onPressBtn = () => {
    ToastHandler.show({
      type: "info",
      text1: "Comming soon...",
    })
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
      <HeaderComponent />

      <Button
        label="Vào luôn !"
        text_color={SILVER}
        background={INDIGO_2}
        onPress={onPressBtn}
      />
      <Button
        label="Tạo trận"
        text_color={SILVER}
        background={INDIGO_2}
        onPress={onPressBtn}
      />
      <Button
        label="Luật chơi"
        text_color={SILVER}
        background={INDIGO_2}
        onPress={onPressBtn}
      />
      <Button
        label="Lịch sử"
        text_color={SILVER}
        background={INDIGO_2}
        onPress={onPressBtn}
      />

      <Footer />
    </View>
  )
}

export default CompetitionHomeScreen

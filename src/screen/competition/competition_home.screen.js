import React, { Component } from "react"

import { View, StyleSheet, Alert } from "react-native"
import Button from "../../component/button"
import Footer from "../../component/footer"
import HeaderComponent from "../../component/header.component"
import { INDIGO_2, SILVER, INDIGO_3 } from "../../util/palette"

export default class CompetitionHomeScreen extends Component {
  render() {
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
          onPress={() => {}}
        />
        <Button
          label="Tạo trận"
          text_color={SILVER}
          background={INDIGO_2}
          onPress={() => {}}
        />
        <Button
          label="Luật chơi"
          text_color={SILVER}
          background={INDIGO_2}
          onPress={() => {}}
        />
        <Button
          label="Lịch sử"
          text_color={SILVER}
          background={INDIGO_2}
          onPress={() => {}}
        />

        <Footer navigation={this.props.navigation} />
      </View>
    )
  }
}

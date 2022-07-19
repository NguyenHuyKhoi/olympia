import React, { Component } from "react"

import { View, StyleSheet, Alert, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import * as actions from "../../redux/practice/action"

import Button from "../../component/button"
import Footer from "../../component/footer"
import HeaderComponent from "../../component/header.component"
import { INDIGO_2, SILVER, INDIGO_3 } from "../../util/palette"

class PracticeHomeScreen extends Component {
  onStartPractice = async () => {
    await this.props.getPracticeRounds()
    this.props.navigation.navigate("practice_waiting")
  }

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
          onPress={this.onStartPractice}
        />
        <Button
          label="Luật chơi"
          text_color={SILVER}
          background={INDIGO_2}
          onPress={() => this.props.navigation.navigate("practice_rule")}
        />
        <Button
          label="Lịch sử"
          text_color={SILVER}
          background={INDIGO_2}
          onPress={() => this.props.navigation.navigate("practice_history")}
        />

        <Footer navigation={this.props.navigation} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  practice: state.practice,
})

export default connect(mapStateToProps, actions)(PracticeHomeScreen)

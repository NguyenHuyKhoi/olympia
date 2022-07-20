import React, { Component } from "react"

import { Text, View, StyleSheet } from "react-native"
import { GRAY, GREEN, RED, SILVER, WHITE } from "../util/palette"
import { initialArray } from "../util/helper"
import { MAX_WIDTH } from "../util/constants"
import { QUIZ_STATUS } from "../redux/play/reducer"

const ProgressBar = (props) => {
  const { status, amount } = props
  console.log("Status: ", status)
  const defineColor = (index) => {
    if (index >= status.length) return GRAY
    switch (status[index]) {
      case QUIZ_STATUS.CORRECT:
        return GREEN
      case QUIZ_STATUS.WRONG:
        return RED
      case QUIZ_STATUS.CURRENT:
        return WHITE
    }
  }

  const arr = initialArray(amount, QUIZ_STATUS.NONE)
  const width_item = MAX_WIDTH / (1.3 * amount)
  return (
    <View
      style={{
        width: MAX_WIDTH,
        height: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
      }}
    >
      {arr.map((item, index) => (
        <View
          key={"" + index}
          style={{
            width: width_item,
            height: 5,
            backgroundColor: defineColor(index),
          }}
        />
      ))}
    </View>
  )
}

export default ProgressBar

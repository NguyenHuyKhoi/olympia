import React from "react"

import { View } from "react-native"
import { MAX_WIDTH } from "../util/constants"
import { initialArray } from "../util/helper"
import { GRAY, GREEN, RED, WHITE } from "../util/palette"

const ProgressBar = (props) => {
  const { status, amount } = props
  console.log("Status: ", status)
  const defineColor = (index) => {
    if (index >= status.length) return GRAY
    switch (status[index]) {
      case "correct":
        return GREEN
      case "wrong":
        return RED
      case "current":
        return WHITE
    }
  }

  const arr = initialArray(amount, "none")
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

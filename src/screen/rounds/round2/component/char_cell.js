import React from "react"

import { Text, View } from "react-native"
import { QUIZ_STATUS } from "../../../../redux/play/reducer"
import { GREEN, RED, SILVER, WHITE } from "../../../../util/palette"

const SIZE = 40
const CharCell = (props) => {
  const { status, content, show, style } = props
  const defineBgColor = () => {
    switch (status) {
      case QUIZ_STATUS.CORRECT:
        return GREEN
      case QUIZ_STATUS.WRONG:
        return RED
      case QUIZ_STATUS.CURRENT:
        return WHITE
      case QUIZ_STATUS.NONE:
        return WHITE
    }
  }
  const defineTextColor = () => {
    switch (status) {
      case QUIZ_STATUS.CORRECT:
        return WHITE
      case QUIZ_STATUS.WRONG:
        return WHITE
      case QUIZ_STATUS.CURRENT:
        return "#6598ec"
      case QUIZ_STATUS.NONE:
        return "rgba(0,0,0,0)"
    }
  }
  return (
    <View
      style={{
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: show ? GREEN : defineBgColor(),
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <Text
        style={{ fontSize: 22, color: defineTextColor(), fontWeight: "bold" }}
      >
        {content}
      </Text>
    </View>
  )
}

export default CharCell

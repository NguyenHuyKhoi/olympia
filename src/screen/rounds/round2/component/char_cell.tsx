import React from "react"

import {View } from "react-native"
import Text from "../../../../component/text"
import { GREEN, RED, WHITE } from "../../../../util/palette"

const SIZE = 40
const CharCell = (props) => {
  const { status, content, unhide, style } = props
  const defineBgColor = () => {
    switch (status) {
      case "correct":
        return GREEN
      case "wrong":
        return RED
      case 'current':
        return WHITE
      case "none":
        return WHITE
    }
  }
  const defineTextColor = () => {
    switch (status) {
      case "correct":
        return WHITE
      case "wrong":
        return WHITE
      case 'current':
        return "#6598ec"
      case "none":
        return "rgba(0,0,0,0)"
    }
  }
  return (
    <View
      style={{
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: unhide ? GREEN : defineBgColor(),
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <Text
        style={{ fontSize: 22, color: unhide ? WHITE : defineTextColor(), fontWeight: "bold" }}
      >
        {content}
      </Text>
    </View>
  )
}

export default CharCell

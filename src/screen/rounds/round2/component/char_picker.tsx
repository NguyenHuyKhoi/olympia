import React from "react"

import { Text, TouchableOpacity } from "react-native"
import { WHITE } from "../../../../util/palette"

const SIZE = 55
const CharPicker = (props) => {
  const { content, select, style } = props
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 1,
        aspectRatio: 1,
        borderRadius: 8,
        backgroundColor: select ? WHITE : "rgba(0,0,0,0)",
        borderWidth: select ? 0 : 3,
        borderColor: WHITE,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: select ? "#3b88f1" : WHITE,
          fontWeight: "bold",
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  )
}

export default CharPicker

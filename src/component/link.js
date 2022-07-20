import React from "react"

import { Text, TouchableOpacity } from "react-native"
import { WHITE } from "../util/palette"

const Link = (props) => {
  const { label, style } = props
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={{
          fontSize: 17,
          color: WHITE,
          textDecorationLine: "underline",
          ...style,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default Link

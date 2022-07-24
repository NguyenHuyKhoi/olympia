import React from "react"

import { TouchableOpacity } from "react-native"
import { WHITE } from "../util/palette"
import Text from "./text"

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

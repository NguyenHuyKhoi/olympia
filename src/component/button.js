import React from "react"

import { Text, TouchableOpacity } from "react-native"
import { GREEN, WHITE } from "../util/palette"

const Button = (props) => {
  let { style, label } = props
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 50,
        backgroundColor: GREEN,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        ...style,
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Text style={{ fontSize: 20, color: WHITE }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

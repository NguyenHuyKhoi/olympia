import React from "react"

import { Text, TouchableOpacity } from "react-native"
import { GREEN, WHITE } from "../util/palette"

const Button = (props) => {
  let { style, label, disabled } = props
  if (!disabled) disabled = false
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        width: "100%",
        height: 60,
        backgroundColor: disabled ? "#cdcdcd" : WHITE,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Text style={{ fontSize: 20, color: "#425CE9" }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

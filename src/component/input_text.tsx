import React from "react"

import { TextInput } from "react-native"
import { GRAY, WHITE } from "../util/palette"

const InputText = (props) => {
  var { type, value, placeholder, secure, style, disabled, maxLength } = props

  if (!maxLength) maxLength = 6
  if (!secure) secure = false
  return (
    <TextInput
      keyboardType={type}
      placeholder={placeholder}
      value={value}
      textAlign="center"
      secureTextEntry={secure}
      maxLength={maxLength}
      placeholderTextColor={GRAY}
      onChangeText={props.onChange}
      style={{
        width: "100%",
        fontSize: 20,
        color: disabled ? GRAY : "#425CE9",
        height: 60,
        backgroundColor: WHITE,
        borderWidth: 2,
        borderColor: "#425CE9",
        borderRadius: 8,
        paddingHorizontal: 15,
        ...style,
      }}
    />
  )
}

export default InputText

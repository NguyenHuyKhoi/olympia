import React from "react"

import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { GRAY, WHITE } from "../util/palette"
const SIZE = 55
const IconButton = (props) => {
  let { style, logo, color, disabled } = props
  return (
    <TouchableOpacity
      disabled = {disabled}
      style={{
        height: SIZE,
        width: SIZE,
        borderWidth: 3,
        borderColor: disabled ? GRAY : color ? color : WHITE,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Icon name={logo} size={30} color={ disabled ? GRAY : color ? color : WHITE} />
    </TouchableOpacity>
  )
}

export default IconButton

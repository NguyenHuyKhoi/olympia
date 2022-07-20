import React from "react"

import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { WHITE } from "../util/palette"
const SIZE = 55
const IconButton = (props) => {
  let { style, logo } = props
  return (
    <TouchableOpacity
      style={{
        width: SIZE,
        height: SIZE,
        borderWidth: 3,
        borderColor: WHITE,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Icon name={logo} size={30} color={WHITE} />
    </TouchableOpacity>
  )
}

export default IconButton

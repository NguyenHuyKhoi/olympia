import React from "react"

import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { GREEN, WHITE } from "../util/palette"
const FloatButton = (props) => {
  let { position, logo } = props
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: GREEN,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        ...position,
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Icon name={logo} size={30} color={WHITE} />
    </TouchableOpacity>
  )
}

export default FloatButton

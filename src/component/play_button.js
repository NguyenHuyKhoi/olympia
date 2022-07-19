import React from "react"

import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { GREEN, WHITE } from "../util/palette"
const SIZE = 240
const PlayButton = (props) => {
  let { position, logo } = props
  return (
    <TouchableOpacity
      style={{
        width: SIZE,
        height: SIZE,
        backgroundColor: GREEN,
        borderRadius: SIZE / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Icon name={logo} size={SIZE * 0.6} color={WHITE} />
    </TouchableOpacity>
  )
}

export default PlayButton

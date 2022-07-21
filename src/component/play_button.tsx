import React from "react"

import { Image, TouchableOpacity } from "react-native"
import { PLAY_BUTTON } from "../asset/image"
const SIZE = 300
const PlayButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Image
        style={{
          width: SIZE,
          height: SIZE,
        }}
        source={PLAY_BUTTON}
      />
    </TouchableOpacity>
  )
}

export default PlayButton
